import axios from "axios";
import authService from "./authService"; // Adjust the path as necessary

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/items",
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

      const token = localStorage.getItem("accessToken");
      if (!token) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const refreshResponse = await authService.refreshAccessToken();
        const { accessToken } = refreshResponse;
        localStorage.setItem("accessToken", accessToken);
        originalRequest.headers["Authorization"] = accessToken;
        return api(originalRequest);
      } catch (refreshError) {
        await authService.logout();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const getAllItems = async () => {
  try {
    const res = await api.get("/");
    return res.data;
  } catch (error) {
    console.log("Get all items error", error);
    throw error.response.data;
  }
};

const getItemById = async (id) => {
  try {
    const res = await api.get(`/${id}`);
    return res.data;
  } catch (error) {
    console.log("Get item by id error", error);
    throw error.response.data;
  }
};

const createItem = async (data) => {
  try {
    const res = await api.post("/", data);
    return res.data;
  } catch (error) {
    console.log("Post item error:", error);
    throw error.response.data;
  }
};

const updateItem = async (id, data) => {
  try {
    const res = await api.patch(`/${id}`, data);
    return res.data;
  } catch (error) {
    console.log("PATCH item error:", error);
    throw error.response.data;
  }
};

const deleteItem = async (id) => {
  try {
    const res = await api.delete(`/${id}`);
    return res.data;
  } catch (error) {
    console.log("Delete item error", error);
    throw error.response.data;
  }
};

export default {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
