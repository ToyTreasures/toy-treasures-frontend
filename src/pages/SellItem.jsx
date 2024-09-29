import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import itemApiRequests from "../services/itemApiRequests";
import { SellItemSchema } from "../utils/validation/itemValidation";
import BreadCrumbs from "../components/BreadCrumbs";

const SellItem = () => {
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    price: "",
    image: null,
    condition: "",
    category: "",
    isAvailableForSwap: false,
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("price", values.price);
      formData.append("condition", values.condition);
      formData.append("category", values.category);
      formData.append("isAvailableForSwap", values.isAvailableForSwap);
      formData.append("thumbnail", values.image);

      await itemApiRequests.createItem(formData);
      setSubmitError("");
      resetForm();
      navigate("/my-items", { state: { isRedirected: true } });
    } catch (error) {
      setSubmitError(
        error.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto w-full flex-col align-middle  p-4 md:p-4">
      <div className="w-full md:w-11/12 mx-auto py-4">
        <BreadCrumbs currentPage={"Sell Item"} />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-6xl md:w-1/2 p-4 md:p-8 ">
          <h1 className="text-2xl md:text-4xl font-semibold text-center mt-2 mb-6">
            Sell Your Item
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={SellItemSchema}
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
                      step="0.01"
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
                  <label htmlFor="image" className="ml-4 font-semibold">
                    Image
                  </label>
                  <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept=".jpg,.jpeg,.png"
                      className="grow bg-transparent outline-none w-full"
                      onChange={(event) => {
                        setFieldValue("image", event.currentTarget.files[0]);
                      }}
                    />
                  </div>
                  <ErrorMessage
                    name="image"
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
                  <div className="input input-bordered rounded-3xl bg-[#f8f8f8] flex items-center gap-2 p-4">
                    <Field
                      as="select"
                      name="category"
                      id="category"
                      className="grow bg-transparent outline-none w-full"
                    >
                      <option value="">Select Item Category</option>
                      <option value="Action Figures">Action Figures</option>
                      <option value="Stuffed Animals">Stuffed Animals</option>
                      <option value="Wooden Toys">Wooden Toys</option>
                      <option value="Doll & Plush">Doll & Plush</option>
                      <option value="Puzzle">Puzzle</option>
                      <option value="Technology">Technology</option>
                    </Field>
                  </div>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-4">
                    <Field
                      type="checkbox"
                      id="isAvailableForSwap"
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
    </div>
  );
};

export default SellItem;
