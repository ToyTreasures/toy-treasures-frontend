import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../utils/validatoin/userValidation";
import registerImage from "../assets/register/r1.jpg";
import authApiRequests from "../services/authApiRequests";

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
      const response = await authApiRequests.register(values);
      setRegisterError("");
      console.log("Registration successful:", response);
      navigate("/login");
      resetForm();
    } catch (error) {
      setRegisterError(
        error.error || "An unexpected error occurred. Please try again later."
      );
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
              {registerError && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <span className="block sm:inline">{registerError}</span>
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="name" className="ml-4 font-semibold">
                  Full Name
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
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
                    placeholder="Create a strong password"
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
                <label htmlFor="phoneNumber" className="ml-4 font-semibold">
                  Phone Nummber
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
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
                <label htmlFor="address" className="ml-4 font-semibold">
                  Address
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    as="select"
                    name="address"
                    id="address"
                    className="grow bg-transparent outline-none w-full"
                  >
                    <option value="">Select Address</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="Alexandria">Alexandria</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

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
