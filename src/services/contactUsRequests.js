import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/contactUs",
  headers: {
    "Content-Type": "application/json",
  },
});

const sendEmail = async (emailData) => {
  const res = await api.post("", emailData); 
  return res.data;
};


export default {sendEmail}
