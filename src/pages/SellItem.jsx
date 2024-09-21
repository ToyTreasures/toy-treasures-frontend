import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import itemApiRequests from "../services/itemApiRequests"; // Assuming you have a service to handle API calls

const SellItemSchema = Yup.object().shape({
  name: Yup.string().required("Item Name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  condition: Yup.string().required("Condition is required"),
  isAvailableForSwap: Yup.boolean(),
});

const SellItem = () => {
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    price: "",
    condition: "",
    isAvailableForSwap: false,
    address: "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await itemApiRequests.createItem(values);
      setSubmitError("");
      console.log("Item added successfully:", response);
      resetForm();
      navigate("/");
    } catch (error) {
      console.error("Submission error:", error);
      if (error.error) {
        setSubmitError(error.error);
      } else {
        setSubmitError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex w-full max-w-6xl mx-auto justify-center my-4 md:my-10 p-4 md:p-8">
      <div className="w-full md:w-1/2 p-4 md:p-8 ">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mt-2 mb-6">
          Sell Your Item
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={SellItemSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {submitError && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <strong className="font-bold">Error: </strong>
                  <span className="block sm:inline">{submitError}</span>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="ml-4 font-semibold">
                  Item Name
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter item name"
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
                <label htmlFor="description" className="ml-4 font-semibold">
                  Description
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 px-4 py-16">
                  <Field
                    as="textarea"
                    name="description"
                    id="description"
                    placeholder="Enter a detailed description about your item"
                    className="grow bg-transparent outline-none w-full resize-none "
                    rows="5"
                  />
                </div>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="price" className="ml-4 font-semibold">
                  Price
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    type="number"
                    name="price"
                    id="price"
                    min="1"
                    placeholder="Enter item price"
                    className="grow bg-transparent outline-none w-full"
                  />
                </div>
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="condition" className="ml-4 font-semibold">
                  Item Condition
                </label>
                <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                  <Field
                    as="select"
                    name="condition"
                    id="condition"
                    className="grow bg-transparent outline-none w-full"
                  >
                    <option value="">Select Item Condition</option>
                    <option value="new">New</option>
                    <option value="gentle">Gently Used</option>
                    <option value="used">Used</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="condition"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 p-4">
                  <Field
                    type="checkbox"
                    name="isAvailableForSwap"
                    className="w-4 h-4"
                  />
                  <label htmlFor="isAvailableForSwap" className="text-lg">
                    Available for Swap
                  </label>
                </div>
              </div>

              <div className="flex-col justify-between mt-6 md:flex-col">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn rounded-3xl bg-lime-400 w-full md:w-1/2 py-2 text-black font-semibold hover:bg-lime-500 transition-colors mb-4"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="btn rounded-3xl bg-gray-300 w-full md:w-1/2 py-2 text-black font-semibold hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SellItem;
