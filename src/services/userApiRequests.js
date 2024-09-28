import axios from "axios";
import AuthService from "./authApiRequests";
import { setupInterceptors } from "./interceptor";

class Userervice {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/api/v1/users",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setupInterceptors(this.api, AuthService);
  }

  async getAllUsers() {
    const res = await api.get("/");
    return res.data;
  }

  async getUserById(id) {
    const res = await api.get(`/${id}`);
    return res.data;
  }

  async updateUser(id, data) {
    const res = await api.patch(`/${id}`, data);
    return res.data;
  }
}

export default new Userervice();
