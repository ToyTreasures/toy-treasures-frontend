import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import contactUsRequest from "../../services/contactUsRequests";
import { contactUsSchema } from "../../utils/validation/contactUsValidation";

const ContactUsForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [backendErrors, setBackendErrors] = useState(null);

  const initialValues = {
    fullName: "",
    email: "",
    messageText: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setErrors }
  ) => {
    try {
      const response = await contactUsRequest.sendEmail(values);
      setSubmitStatus("success");
      setBackendErrors(null);
      resetForm();
    } catch (error) {
      setSubmitStatus("error");
      handleSubmissionError(error, setErrors);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmissionError = (error, setErrors) => {
    if (error.response && error.response.data) {
      if (error.response.data.errors) {
        const backendValidationErrors = {};
        error.response.data.errors.forEach((errorMsg) => {
          const field = errorMsg.split(" ")[0].toLowerCase();
          backendValidationErrors[field] = errorMsg;
        });
        setErrors(backendValidationErrors);
      } else if (error.response.data.error) {
        setBackendErrors([error.response.data.error]);
      }
    } else {
      setBackendErrors(["An unexpected error occurred. Please try again."]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactUsSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => {
        const renderField = (name, label, type = "text", as = "input") => (
          <>
            <label htmlFor={name} className="block mb-2 font-semibold">
              {label}
            </label>
            <Field
              type={type}
              name={name}
              as={as}
              className={`w-full ${
                as === "textarea" ? "min-h-[160px] py-6" : "h-12"
              } px-7 rounded-${as === "textarea" ? "3xl" : "full"} border-2 ${
                errors[name] && touched[name]
                  ? "border-red-500"
                  : "border-gray-200"
              } bg-gray-100 transition-colors duration-300 focus:border-[--primary-color] focus:outline-none ${
                as === "textarea" ? "resize-y" : ""
              }`}
            />
            <ErrorMessage
              name={name}
              component="div"
              className="text-red-500 mt-1"
            />
          </>
        );

        return (
          <Form className="space-y-6">
            {renderField("fullName", "Full Name")}
            {renderField("email", "Email Address", "email")}
            {renderField("messageText", "Message", "text", "textarea")}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-1/2 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 sm:p-3 bg-[--primary-color] text-white text-xs font-semibold rounded-full hover:bg-opacity-90 transition-colors duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactUsForm;
