import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

const register = async (user) => {
  try {
    const res = await api.post("/register", user);
    return res.data;
  } catch (error) {
    console.log("Register error", error);
  }
};

const login = async (user) => {
  try {
    const res = await api.post(`/login`, user);
    return res.data;
  } catch (error) {
    console.log("Login error", error);
  }
};

const logout = async () => {
  try {
    const res = await api.get();
    return res.data;
  } catch (error) {
    console.log("Logout error:", error);
    throw error;
  }
};

const refreshAccessToken = async () => {
  try {
    const res = await api.get();
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
