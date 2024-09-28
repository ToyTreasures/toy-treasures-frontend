import axios from "axios";
import { handleError } from "./interceptor";

class ContactUsService {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000/api/v1/contact-us",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async sendEmail(emailData) {
    try {
      const res = await this.api.post("/", emailData);
      return res.data;
    } catch (error) {
      handleError(error);
    }
  }
}

export default new ContactUsService();
