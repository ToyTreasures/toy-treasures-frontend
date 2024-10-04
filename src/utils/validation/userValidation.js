import * as Yup from "yup";
import cities from "../staticData/cities.json";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Full Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  phoneNumber: Yup.string()
    .matches(
      /^(010|011|012|015)[0-9]{8}$/,
      "Phone number must be a valid Egyptian number"
    )
    .required("Phone number is required"),
  address: Yup.string()
    .oneOf(cities, "Invalid address")
    .required("Address is required"),
});

export const UpdateUserSchema = RegisterSchema.shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters")
    .required(),
  email: Yup.string().email("Invalid email format"),
  password: Yup.string().min(8, "Password must be at least 8 characters"),
  phoneNumber: Yup.string().matches(
    /^(010|011|012|015)[0-9]{8}$/,
    "Phone number must be a valid Egyptian number"
  ),
  address: Yup.string().oneOf(cities, "Invalid address"),
}).noUnknown();
