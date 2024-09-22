import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/users",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllUsers = async () => {
  try {
    const res = await api.get("/");
    return res.data;
  } catch (error) {
    console.log("Get all users error", error);
  }
};

const getUserById = async (id) => {
    const res = await api.get(`/${id}`);
    return res.data;
};

const updateUser = async (id, data) => {
  try {
    const res = await api.patch(`/${id}`, data);
    return res.data;
  } catch (error) {
    console.log("PATCH user error:", error);
    throw error;
  }
};

export default {
  getAllUsers,
  getUserById,
  updateUser,
};
