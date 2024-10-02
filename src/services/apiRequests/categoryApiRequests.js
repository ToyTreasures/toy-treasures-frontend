import axios from "axios";
import AuthService from "./authApiRequests";
import { setupInterceptors } from "./interceptor";

class CategoryService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/api/v1/categories",
      withCredentials: true,
    });

    setupInterceptors(this.api, AuthService);
  }
}

export default new CategoryService();
