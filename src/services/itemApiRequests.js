import axios from "axios";
import authApiRequests from "./authApiRequests";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/items",
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
    if (!error.response) {
      console.error("Network error: ", error.message);
      return Promise.reject({
        error: "Server is currently unavailable. Please try again later.",
      });
    }

    return Promise.reject(error.response.data);
  }
);

const getAllItems = async (queryParams = "") => {
  const res = await api.get("/" + queryParams);
  return res.data;
};

const getItemById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

const createItem = async (data) => {
  const res = await api.post("/", data);
  return res.data;
};

const updateItem = async (id, data) => {
  const res = await api.patch(`/${id}`, data);
  return res.data;
};

const deleteItem = async (id) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};

export default {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
