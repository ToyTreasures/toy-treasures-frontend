import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
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
  address: Yup.string().required("Address is required"),
});
