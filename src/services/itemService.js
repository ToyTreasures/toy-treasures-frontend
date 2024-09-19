import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/items",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllItems = async (queryParams = "") => {
  try {
    const res = await api.get("/" + queryParams);
    return res.data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// const getAllItems = async () => {
//   try {
//     const res = await api.get("/");
//     return res.data;
//   } catch (error) {
//     console.log("Get all items error", error);
//   }
// };

const getItemById = async (id) => {
  try {
    const res = await api.get(`/${id}`);
    return res.data;
  } catch (error) {
    console.log("Get item by id error", error);
  }
};

const updateItem = async (id, data) => {
  try {
    const res = await api.patch(`/${id}`, data);
    return res.data;
  } catch (error) {
    console.log("PATCH item error:", error);
    throw error;
  }
};

const creatItem = async (data) => {
  try {
    const res = await api.post(`/`, data);
    return res.data;
  } catch (error) {
    console.log("Post item error:", error);
    throw error;
  }
};

const deleteItem = async (id) => {
  try {
    const res = await api.delete(`/${id}`);
    return res.data;
  } catch (error) {
    console.log("Delete item error", error);
  }
};

export default {
  getAllItems,
  getItemById,
  updateItem,
  creatItem,
  deleteItem,
};
