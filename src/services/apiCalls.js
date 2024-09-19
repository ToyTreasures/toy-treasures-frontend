import axios from "axios";

export const fetchItems = async (queryParams = "") => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/items${queryParams}`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};