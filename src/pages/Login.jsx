import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().min(8).required("Password is required"),
});

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await authService.login(values);
      setLoginError("");
      console.log("Login successful:", response);
      navigate("/");
      resetForm();
    } catch (error) {
      console.error("Login error:", error);
      if (error.error) {
        setLoginError(error.error);
      } else {
        setLoginError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex w-full max-w-6xl mx-auto justify-center my-4 md:my-10 p-4 md:p-8">
      <div className="w-full md:w-1/2 p-4 md:p-8 rounded-lg">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mt-2 mb-6">
          Login
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {loginError && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <span className="block sm:inline">{loginError}</span>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="email" className="ml-4 font-semibold">
                  Email
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="grow bg-transparent outline-none w-full"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="ml-4 font-semibold">
                  Password
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="grow bg-transparent outline-none w-full"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn rounded-3xl bg-lime-400 w-full md:w-1/2 py-2 text-black font-semibold hover:bg-lime-500 transition-colors"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
