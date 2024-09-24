import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const ContactUsForm = () => {
       const validationSchema = Yup.object().shape({
         fullName: Yup.string().required("Full Name is required"),
         email: Yup.string().email("Invalid email").required("Email is required"),
         messageText: Yup.string().required("messageText is required"),
       });

       const initialValues = {
         fullName: "",
         email: "",
         messageText: "",
       };

       const handleSubmit = (values, { setSubmitting }) => {
         console.log(values);
         setSubmitting(false);
       };
      return (
        <div>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-gray-800 mb-2">
                    Full Name
                  </label>
                  <Field type="text" id="fullName" name="fullName" placeholder="Enter you Name" className="w-full h-12 px-7 rounded-full border-2 border-gray-200 bg-gray-100 transition-colors duration-300 focus:border-[--primary-color] focus:outline-none" />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-800 mb-2">
                    Email Address
                  </label>
                  <Field type="email" id="email" name="email" placeholder="Your contact email" className="w-full h-12 px-7 rounded-full border-2 border-gray-200 bg-gray-100 transition-colors duration-300 focus:border-[--primary-color] focus:outline-none" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label htmlFor="messageText" className="block text-xs font-semibold text-gray-800 mb-2">
                    Message
                  </label>
                  <Field as="textarea" id="messageText" placeholder="Message text ..." name="messageText" className="w-full min-h-[160px] px-7 py-6 rounded-3xl border-2 border-gray-200 bg-gray-100 transition-colors duration-300 focus:border-[--primary-color] focus:outline-none resize-y" />
                  <ErrorMessage name="messageText" component="div" className="text-red-500 text-xs mt-1" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-1/2 sm:w-auto px-6 py-3 rounded-full bg-[--primary-color] text-white text-sm font-semibold transition-all duration-500 hover:shadow-md hover:transform hover:scale-105 focus:outline-none">
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      );
}

export default ContactUsForm;
