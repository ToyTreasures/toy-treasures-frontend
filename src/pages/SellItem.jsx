import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import itemService from "../services/itemService"; // Assuming you have a service to handle API calls

// Define Yup validation schema
const SellItemSchema = Yup.object().shape({
  name: Yup.string().required("Item Name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  condition: Yup.string().required("Condition is required"),
  isAvailableForSwap: Yup.boolean(),
  address: Yup.string().required("Address is required"),
});

const SellItem = () => {
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    description: "",
    price: "",
    condition: "new",
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

      const response = await itemService.createItem(values);
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
    <Formik
      initialValues={initialValues}
      validationSchema={SellItemSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="text"
                name="name"
                placeholder="Item Name"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                as="textarea"
                name="description"
                placeholder="Description"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="number"
                name="price"
                placeholder="Price"
                className="grow"
              />
            </div>
            <ErrorMessage
              name="price"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field as="select" name="condition" className="grow">
                <option value="new">new</option>
                <option value="gentle">gentle</option>
                <option value="used">used</option>
              </Field>
            </div>
            <ErrorMessage
              name="condition"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field
                type="checkbox"
                name="isAvailableForSwap"
                className="grow"
              />
              <label htmlFor="isAvailableForSwap">Available for Swap</label>
            </div>
            <ErrorMessage
              name="isAvailableForSwap"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="space-y-2">
            <div className="input input-bordered flex items-center gap-2">
              <Field as="select" name="address" className="grow">
                {/* Assuming governorates are imported from another file */}
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

          {submitError && <div className="text-red-500">{submitError}</div>}

          <div className="flex justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SellItem;
