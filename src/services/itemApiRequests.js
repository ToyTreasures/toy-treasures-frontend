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
    return Promise.reject(error);
  }
);

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
    return Promise.reject(error);
  }
);

const getAllItems = async (queryParams = "") => {
  try {
    const res = await api.get("/" + queryParams);
    return res.data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
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
