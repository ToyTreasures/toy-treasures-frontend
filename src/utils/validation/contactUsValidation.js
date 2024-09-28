import * as Yup from "yup";

export const contactUsSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required").min(2, "Full name must be at least 2 characters long").max(50, "Full name cannot exceed 50 characters").trim(),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address")
    .trim(),
  messageText: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters long").max(1000, "Message cannot exceed 1000 characters").trim(),
});
