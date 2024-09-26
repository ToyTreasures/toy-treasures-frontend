import React, { useState, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import  {contactUsSchema}  from "../../utils/validatoin/contactUsValidation";
import { sendEmail } from "../../services/contactUsRequests";
import Toast from "../../components/Toast";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  messageText: "",
};

const ERROR_MESSAGES = {
  NO_INTERNET: "No internet connection. Please check your network.",
  SERVER_UNAVAILABLE: "Server is currently unavailable. Please try again later.",
  INTERNAL_SERVER_ERROR: "Something went wrong. Please try again.",
  DEFAULT: "An error occurred. Please try again.",
};

const ContactUsForm = () => {
  const [toastConfig, setToastConfig] = useState({ show: false, message: "", type: null });

  const showToast = useCallback((message, type) => {
    setToastConfig({ show: true, message, type });
    setTimeout(() => setToastConfig({ show: false, message: "", type: null }), 3000);
  }, []);

  const handleSubmit = useCallback(
    async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        const response = await sendEmail(values);
        console.log(response);
        showToast("Message sent successfully!", "success");
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        const errorMessage = ERROR_MESSAGES[error.message] || ERROR_MESSAGES.DEFAULT;
        showToast(errorMessage, "error");

        if (error.response?.data?.errors) {
          const backendValidationErrors = error.response.data.errors.reduce((acc, errorMsg) => {
            const field = errorMsg.split(" ")[0].toLowerCase();
            acc[field] = errorMsg;
            return acc;
          }, {});
          setErrors(backendValidationErrors);
        }
      } finally {
        setSubmitting(false);
      }
    },
    [showToast]
  );

  const renderField = useCallback(
    ({ name, label, type = "text", as = "input" }) => (
      <div className="mb-4">
        <label htmlFor={name} className="block mb-2 font-semibold">
          {label}
        </label>
        <Field
          id={name}
          name={name}
          type={type}
          as={as}
          className={`w-full ${as === "textarea" ? "min-h-[160px] py-6" : "h-12"} px-7 rounded-${
            as === "textarea" ? "3xl" : "full"
          } border-2 border-gray-200 bg-gray-100 transition-colors duration-300 focus:border-[--primary-color] focus:outline-none ${as === "textarea" ? "resize-y" : ""}`}
        />
        <ErrorMessage name={name} component="div" className="text-red-500 mt-1 text-sm" />
      </div>
    ),
    []
  );

  return (
    <Formik initialValues={INITIAL_VALUES} validationSchema={contactUsSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="space-y-6 relative">
          {renderField({ name: "fullName", label: "Full Name" })}
          {renderField({ name: "email", label: "Email Address", type: "email" })}
          {renderField({ name: "messageText", label: "Message", as: "textarea" })}

          {toastConfig.show && <Toast message={toastConfig.message} type={toastConfig.type} />}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 bg-[--primary-color] text-white text-sm font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
