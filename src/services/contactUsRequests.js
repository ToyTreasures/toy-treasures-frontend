import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/contactUs",
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error) => {
  if (!navigator.onLine) {
    return new Error("NO_INTERNET");
  }
  if (error.response) {
    if (error.response.status === 500) {
      return new Error("INTERNAL_SERVER_ERROR");
    }
    return new Error(error.response.data.message || "DEFAULT");
  } else if (error.request) {
    return new Error("SERVER_UNAVAILABLE");
  } else {
    return new Error("DEFAULT");
  }
};

export const sendEmail = async (emailData) => {
  try {
    const res = await api.post("", emailData);
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
