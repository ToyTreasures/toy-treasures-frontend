import localStorageService from "../services/localStorageServices";

export const setupInterceptors = (api, authService) => {
  api.interceptors.request.use(
    (config) => {
      const token = localStorageService.getAccessToken();
      if (token) {
        config.headers["Authorization"] = token;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (authService.isTokenExpiredError(error) && !originalRequest._retry) {
        if (authService.isRefreshing) {
          try {
            const token = await new Promise((resolve, reject) => {
              authService.addRefreshSubscriber((token) => {
                resolve(token);
              }, reject);
            });
            originalRequest.headers["Authorization"] = token;
            return api(originalRequest);
          } catch (err) {
            return Promise.reject(err);
          }
        }

        originalRequest._retry = true;
        authService.isRefreshing = true;

        try {
          const { accessToken, user } = await authService.refreshAccessToken();
          localStorageService.setAccessToken(accessToken);
          localStorageService.setUser(user);
          authService.onRefreshed(accessToken);
          originalRequest.headers["Authorization"] = accessToken;
          return api(originalRequest);
        } catch (refreshError) {
          authService.onRefreshFailure(refreshError);
          localStorageService.clearTokensAndUser();
          window.location.href = "/login";
          return Promise.reject(refreshError);
        } finally {
          authService.isRefreshing = false;
        }
      }

      if (authService.isRefreshTokenExpiredError(error)) {
        localStorageService.clearTokensAndUser();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      return Promise.reject(handleError(error));
    }
  );
};

const handleError = (error) => {
  if (error.response) {
    return { message: error.response.data.error || error.response.data };
  }
  if (error.error) {
    return { message: error.error };
  }
  if (error.code === "ERR_NETWORK") {
    if (!navigator.onLine) {
      return {
        message: "Network Error, please check your internet connection",
      };
    }
    return { message: "Server is Down, please try again later" };
  }
  return { message: "Something went wrong, Please try again later" };
};
