import { useState, useEffect } from "react";
import itemApiRequests from "../services/apiRequests/itemApiRequests";

const useItems = (queryParams = {}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError("");
      try {
        const {
          currentPage = 1,
          itemsPerPage = 12,
          filters = {},
        } = queryParams;

        const params = {
          page: currentPage,
          limit: itemsPerPage,
        };

        if (filters.search) params.search = filters.search;
        if (filters.minPrice) params.minPrice = filters.minPrice;
        if (filters.maxPrice) params.maxPrice = filters.maxPrice;
        if (filters.tradeType) params.tradeType = filters.tradeType;
        if (filters.conditions && filters.conditions.length) {
          params.conditions = filters.conditions.join(",");
        }
        if (filters.categories && filters.categories.length) {
          params.categories = filters.categories.join(",");
        }
        if (filters.address) params.address = filters.address;

        const response = await itemApiRequests.getAllItems(params);

        if (response && response.items && response.items.length > 0) {
          setItems(response.items);
          setTotalPages(response.paginationMetaData.pagesNumber);
        } else {
          setItems([]);
          setTotalPages(1);
        }
      } catch (err) {
        setError(
          "Failed to fetch items: " +
            (err.message || "Something went wrong, Please try again later")
        );
        setItems([]);
        setTotalPages(1);
      }
      setLoading(false);
    };

    fetchItems();
  }, [queryParams]);

  return { items, loading, error, totalPages };
};

export default useItems;
