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
      error.response.status === 401 &&
      error.response.data.error ===
        "Your token has expired, please log in again" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

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
    return Promise.reject(error);
  }
);

const register = async (user) => {
  try {
    const res = await api.post("/register", user);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (user) => {
  try {
    const res = await api.post("/login", user);
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};

const logout = async () => {
  try {
    const res = await api.post("/logout");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    return res.data;
  } catch (error) {
    console.log("Logout error:", error);
    throw error;
  }
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
