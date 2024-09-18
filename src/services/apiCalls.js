import axios from "axios";

export const fetchItems = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/items");
    return response.data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};
