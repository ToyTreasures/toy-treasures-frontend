import { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FilterPanel from "../Layouts/shop-layouts/FilterPanel";
import ItemGrid from "../Layouts/shop-layouts/ItemGrid";
import Pagination from "../Layouts/shop-layouts/Pagination";
import useItems from "../hooks/useItems";
import { useUserContext } from "../contexts/UserContext";
import { useToast, TOAST_TYPES } from "../hooks/useToast";

const Shop = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast, ToastContainer } = useToast();

  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    tradeType: "all",
    conditions: [],
    categories: [],
    address: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        categories: [decodeURIComponent(category)],
      }));
    }
  }, [location.search]);

  useEffect(() => {
    if (!user) {
      showToast(
        "Log in to be able to add to your wishlist",
        TOAST_TYPES.WARNING
      );
    }
  }, [user, showToast]);

  const queryParams = useMemo(() => {
    const params = {
      currentPage,
      itemsPerPage,
      filters: {
        ...filters,
        tradeType: filters.tradeType !== "all" ? filters.tradeType : "",
      },
    };
    return params;
  }, [filters, currentPage, itemsPerPage]);

  const { items, loading, error, totalPages } = useItems(queryParams);

  const updateURL = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (newFilters[key]) {
        if (Array.isArray(newFilters[key])) {
          newFilters[key].forEach((value) => params.append(key, value));
        } else {
          params.set(key, newFilters[key]);
        }
      }
    });
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const handleFilterChange = useCallback(
    (newFilters) => {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters, ...newFilters };
        updateURL(updatedFilters);
        return updatedFilters;
      });
      setCurrentPage(1);
    },
    [navigate, location.pathname]
  );

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const handleSearch = useCallback(
    (searchValue) => {
      handleFilterChange({ search: searchValue });
    },
    [handleFilterChange]
  );

  return (
    <div className="container mx-auto pb-6">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className="flex flex-col md:flex-row gap-6">
        <FilterPanel
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
        />
        <ItemGrid
          items={items}
          loading={loading}
          error={error}
          onRetry={() => handleSearch(filters.search)}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Shop;
