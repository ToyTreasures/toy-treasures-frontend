import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/register/r1.jpg";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),
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
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await authService.register(values);
      setRegisterError("");
      console.log("Registration successful:", response);
      navigate("/login");
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
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto justify-around gap-4 md:gap-10 my-4 md:my-10  p-4 md:p-8">
      <div className="w-full md:w-1/2 p-4 md:p-8 rounded-lg">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mt-2 mb-6 ">
          Create Account
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div className="space-y-2">
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="grow bg-transparent outline-none w-full"
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
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
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="grow bg-transparent outline-none w-full"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="grow bg-transparent outline-none w-full"
                  />
                </div>
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    as="select"
                    name="address"
                    className="grow bg-transparent outline-none w-full"
                  >
                    <option value="">Select Address</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="Alexandria">Alexandria</option>
                    {/* Add other governorates here */}
                  </Field>
                </div>
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {registerError && (
                <div className="text-red-500">{registerError}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn rounded-3xl bg-lime-400 w-full md:w-1/2 py-2 text-black font-semibold hover:bg-lime-500 transition-colors"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-full rounded-lg md:w-1/2 mt-4 md:mt-0 hidden md:inline-block ">
        <img
          src={registerImage}
          alt="kid playing with toys"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Register;
