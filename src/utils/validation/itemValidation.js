import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const FILE_SIZE = 5 * 1024 * 1024; // 5MB

const validCategoryNames = [
  "Action Figures",
  "Stuffed Animals",
  "Wooden Toys",
  "Puzzle",
  "Doll & Plush",
  "Technology",
];

export const SellItemSchema = Yup.object().shape({
  name: Yup.string().required("Item Name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be a positive number")
    .required("Price is required"),
  image: Yup.mixed()
    .required("Image is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  condition: Yup.string().required("Condition is required"),
  category: Yup.string()
    .oneOf(validCategoryNames, "Invalid category name")
    .required("Category is required"),
  isAvailableForSwap: Yup.boolean(),
});
