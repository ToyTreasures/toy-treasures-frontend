import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { LoginSchema } from "../utils/validation/userValidation";
import authServices from "../services/authServices";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { setUser } = useUserContext();

  const navigate = useNavigate();

  const handleLogin = async (userData, { setSubmitting, resetForm }) => {
    try {
      await authServices.login(userData, setUser);

      setLoginError("");
      navigate("/");
      resetForm();
    } catch (error) {
      setLoginError(
        error.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex w-full max-w-6xl mx-auto justify-center my-4 md:my-10 p-4 md:p-8">
      <div className="w-full md:w-1/2 p-4 md:p-8 rounded-lg bg-white shadow-2xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mt-2 mb-6">
          Login
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn rounded-3xl bg-lime-400 w-full md:w-1/2 py-2 text-black font-semibold hover:bg-[--primary-color] transition-colors"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-red-500 font-semibold">
                    Register here
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
