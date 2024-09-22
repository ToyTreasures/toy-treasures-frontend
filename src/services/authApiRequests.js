import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
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
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.error ===
        "Your token has expired, please log in again" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const token = localStorage.getItem("accessToken");
      if (!token) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const refreshResponse = await refreshAccessToken();
        const { accessToken } = refreshResponse;
        localStorage.setItem("accessToken", accessToken);
        originalRequest.headers["Authorization"] = accessToken;
        return api(originalRequest);
      } catch (refreshError) {
        await logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    if (!error.response) {
      console.error("Network error: ", error.message);
      return Promise.reject({
        error: "Server is currently unavailable. Please try again later.",
      });
    }

    return Promise.reject(error.response.data);
  }
);

const register = async (user) => {
  const res = await api.post("/register", user);
  return res.data;
};

const login = async (user) => {
  const res = await api.post("/login", user);
  return res.data;
};

const logout = async () => {
  const res = await api.post("/logout");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  return res.data;
};

const refreshAccessToken = async () => {
  try {
    const res = await api.post("/refresh-token");
    return res.data;
  } catch (error) {
    console.log("Refresh Access Token error:", error);
    throw error;
  }
};

export default {
  register,
  login,
  logout,
  refreshAccessToken,
};
