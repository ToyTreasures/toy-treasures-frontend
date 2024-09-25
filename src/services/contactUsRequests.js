import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1/contactus",
  headers: {
    "Content-Type": "application/json",
  },
});

const sendEmail = async (emailData) => {
  const res = await api.post("/email", emailData); 
  return res.data;
};


export default {sendEmail}
