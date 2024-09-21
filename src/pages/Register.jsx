import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import authApiRequests from "../services/authApiRequests";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  // const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await authApiRequests.register(values);
      setRegisterError("");
      console.log("Registration successful:", response);
      // Redirect to a login form
      // navigate("/login");
      resetForm();
    } catch (error) {
      console.error("Registration error:", error);
      if (error.error) {
        setRegisterError(error.error);
      } else {
        setRegisterError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="text"
                name="address"
                placeholder="Address"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {registerError && <div className="text-red-500">{registerError}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
