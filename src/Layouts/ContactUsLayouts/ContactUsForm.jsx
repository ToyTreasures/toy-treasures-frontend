import React, { useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useToast, TOAST_TYPES } from "../../hooks/useToast";
import contactUsService from "../../services/apiRequests/contactUsApiRequests";
import { contactUsSchema } from "../../utils/validation/contactUsValidation";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  messageText: "",
};

const ContactUsForm = () => {
  const { showToast, ToastContainer } = useToast();

  const handleSubmit = useCallback(
    async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        await contactUsService.sendEmail(values);
        showToast("Message sent successfully!", TOAST_TYPES.SUCCESS);
        resetForm();
      } catch (error) {
        const errorMessage =
          error.message || "Unexpected error occurred, please try again later";
        showToast(errorMessage, TOAST_TYPES.ERROR);
        setErrors({ submit: errorMessage });
      } finally {
        setSubmitting(false);
      }
    },
    [showToast]
  );

  const renderField = ({ name, label, type = "text", as = "input" }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 font-semibold">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        as={as}
        className={`w-full ${
          as === "textarea" ? "min-h-[160px] py-6" : "h-12"
        } px-7 rounded-${
          as === "textarea" ? "3xl" : "full"
        } border-2 border-gray-200 bg-gray-100 transition-colors duration-300 focus:border-[--primary-color] focus:outline-none ${
          as === "textarea" ? "resize-y" : ""
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 mt-1 text-sm"
      />
    </div>
  );

  return (
    <>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={contactUsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className="space-y-6 relative">
            {renderField({ name: "fullName", label: "Full Name" })}
            {renderField({
              name: "email",
              label: "Email Address",
              type: "email",
            })}
            {renderField({
              name: "messageText",
              label: "Message",
              as: "textarea",
            })}

            {errors.submit && (
              <div className="text-red-500 text-sm">{errors.submit}</div>
            )}

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
      <ToastContainer />
    </>
  );
};

export default ContactUsForm;
