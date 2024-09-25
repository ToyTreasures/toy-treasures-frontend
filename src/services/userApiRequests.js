import axios from "axios";
import authApiRequests from "./authApiRequests";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
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
        const refreshResponse = await authApiRequests.refreshAccessToken();
        const { accessToken } = refreshResponse;
        localStorage.setItem("accessToken", accessToken);
        originalRequest.headers["Authorization"] = accessToken;
        return api(originalRequest);
      } catch (refreshError) {
        await authApiRequests.logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    if (error.code === "ERR_NETWORK") {
      return Promise.reject(
        "Network Error, please check your internet connection"
      );
    }

    if (error.code === "ERR_BAD_REQUEST") {
      return Promise.reject(error.response.data.error);
    }

    return Promise.reject(
      "Server is currently unavailable. Please try again later."
    );
  }
);

const getAllUsers = async () => {
  const res = await api.get("/");
  return res.data;
};

const getUserById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

const updateUser = async (id, data) => {
  const res = await api.patch(`/${id}`, data);
  return res.data;
};

export default {
  getAllUsers,
  getUserById,
  updateUser,
};
