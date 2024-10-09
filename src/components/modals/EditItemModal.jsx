import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import itemApiRequests from "../../services/apiRequests/itemApiRequests";
import { UpdateItemSchema } from "../../utils/validation/itemValidation";

const EditItemModal = ({ item, onClose }) => {
  const [submitError, setSubmitError] = useState("");

  const initialValues = {
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.image,
    condition: item.condition,
    category: item.category,
    isAvailableForSwap: item.isAvailableForSwap,
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("condition", values.condition);
      formData.append("category", values.category);
      formData.append("isAvailableForSwap", values.isAvailableForSwap);
      if (values.image instanceof File) {
        formData.append("thumbnail", values.image);
      }

      await itemApiRequests.updateItem(item._id, formData);
      setSubmitError("");
      onClose();
    } catch (error) {
      setSubmitError(
        error.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg my-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Edit Item</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
          <Formik
            initialValues={initialValues}
            validationSchema={UpdateItemSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="space-y-4">
                {submitError && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                    role="alert"
                  >
                    <span className="block sm:inline">{submitError}</span>
                  </div>
                )}
                <div className="space-y-2">
                  <label htmlFor="name" className="ml-4 font-semibold">
                    Item Name
                  </label>
                  <div className="input input-bordered rounded-3xl bg-gray-100 flex items-center gap-2 p-4">
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
                  <div className="input input-bordered rounded-3xl bg-gray-100 flex items-center gap-2 p-4">
                    <Field
                      type="number"
                      name="price"
                      id="price"
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
                  <label htmlFor="category" className="ml-4 font-semibold">
                    Category
                  </label>
                  <div className="input input-bordered rounded-3xl bg-gray-100 flex items-center gap-2 p-4">
                    <Field
                      as="select"
                      name="category"
                      id="category"
                      className="grow bg-transparent outline-none w-full"
                    >
                      <option value="">Select a category</option>
                      <option value="Educational">Educational</option>
                      <option value="Action Figures & Dolls">
                        Action Figures & Dolls
                      </option>
                      <option value="Outdoor & Sports">Outdoor & Sports</option>
                      <option value="Electronic & Interactive">
                        Electronic & Interactive
                      </option>
                    </Field>
                  </div>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="isAvailableForSwap"
                    className="ml-4 font-semibold"
                  >
                    Available for Swap
                  </label>
                  <div className="input input-bordered rounded-3xl bg-gray-100 flex items-center gap-2 p-4">
                    <Field
                      type="checkbox"
                      name="isAvailableForSwap"
                      id="isAvailableForSwap"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">Available for swap</span>
                  </div>
                  <ErrorMessage
                    name="isAvailableForSwap"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="image" className="ml-4 font-semibold">
                    Image
                  </label>
                  <div className="input input-bordered rounded-3xl bg-gray-100 flex items-center gap-2 p-4">
                    <input
                      type="file"
                      name="image"
                      id="image"
                      onChange={(event) => {
                        setFieldValue("image", event.currentTarget.files[0]);
                      }}
                      className="grow bg-transparent outline-none w-full"
                    />
                  </div>
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[--primary-color] text-[--secondary-color] rounded-lg px-4 py-2 hover:bg-[--secondary-color] hover:text-[--primary-color] w-full"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditItemModal;
