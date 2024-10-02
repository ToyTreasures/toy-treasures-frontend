import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import itemApiRequests from "../services/apiRequests/itemApiRequests";
import ItemCard from "../components/ItemCard";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 6;
  // Filter states
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [buy, setBuy] = useState(false);
  const [swap, setSwap] = useState(false);
  const [conditions, setConditions] = useState({
    new: false,
    gentle: false,
    used: false,
  });
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const governorates = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Luxor",
    "Aswan",
    "Dakahlia",
    "Sharqia",
    "Qalyubia",
    "Suez",
    "Fayoum",
  ];

  const fetchFilteredItems = async (queryParams) => {
    setLoading(true);
    setError("");
    try {
      const response = await itemApiRequests.getAllItems(queryParams);

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
          (err.message || "Something wen wrong, Please try again later")
      );
      setItems([]);
      setTotalPages(1);
    }
    setLoading(false);
  };

  const getCurrentFilters = () => {
    const filters = [];

    if (minPrice) filters.push(`minPrice-${minPrice}`);
    if (maxPrice) filters.push(`maxPrice-${maxPrice}`);
    if (buy && !swap) filters.push("swap-false");
    if (swap && !buy) filters.push("swap-true");

    const selectedConditions = Object.keys(conditions)
      .filter((key) => conditions[key])
      .join(",");
    if (selectedConditions) filters.push(`condition-${selectedConditions}`);
    if (address) filters.push(`address-${address}`);

    return filters;
  };

  const updateFilters = () => {
    const filters = getCurrentFilters();

    const queryParams =
      search || filters.length
        ? `?${search ? `search=${search}&` : ""}${
            filters.length ? `filters=${filters.join("--")}&` : ""
          }page=${currentPage}&limit=${itemsPerPage}`
        : `?page=${currentPage}&limit=${itemsPerPage}`;

    navigate(`${location.pathname}${queryParams}`, { replace: true });

    fetchFilteredItems(queryParams);
  };

  const handleSearch = () => {
    if (search) {
      setCurrentPage(1);
      updateFilters();
    }
  };

  const resetFilters = () => {
    if (
      search ||
      minPrice ||
      maxPrice ||
      buy ||
      swap ||
      conditions.new ||
      conditions.gentle ||
      conditions.used ||
      address
    ) {
      setSearch("");
      setMinPrice("");
      setMaxPrice("");
      setBuy(false);
      setSwap(false);
      setConditions({ new: false, gentle: false, used: false });
      setAddress("");
      setCurrentPage(1);
      navigate(location.pathname, { replace: true });
      updateFilters();
    }
  };

  useEffect(() => {
    updateFilters();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    updateFilters();
  }, [minPrice, maxPrice, buy, swap, conditions, address]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pb-6">
      <div className="container mx-auto ">
        <div className="join mt-6 flex flex-wrap justify-center items-center">
          <button
            className="text-white text-xl  font-bold bg-[var(--primary-color)] hover:bg-[var(--primary-color)] transition-colors duration-200 join-item btn btn-sm w-10"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <div className="flex items-center justify-center  mx-3 gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`
         text-md w-9 h-9 rounded-full
        ${
          page === currentPage
            ? "bg-[var(--secondary-color)] text-white font-bold"
            : "text-gray-700 hover:bg-gray-300 hover:text-gray-900"
        }
        transition-colors duration-200
      `}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            className="text-white text-xl font-bold bg-[var(--primary-color)] hover:bg-[var(--primary-color)] transition-colors duration-200 join-item btn btn-sm w-10 "
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6  ">
          <div className="filters w-full h-max mt-8 md:w-1/4 bg-white p-4  rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Filters</h2>
            <div className="mb-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="border border-gray-300 rounded-md w-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
              />
              <button
                className="mt-2 btn text-white bg-[--secondary-color] hover:bg-[var(--primary-color)] w-full rounded-md p-2 text-sm transition duration-150 ease-in-out"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            <div className="flex mb-3 gap-4 text-sm">
              <div className="flex items-center">
                <input
                  className="cursor-pointer"
                  id="buy"
                  type="checkbox"
                  checked={buy}
                  onChange={(e) => setBuy(e.target.checked)}
                />
                <label className="ml-1 cursor-pointer" htmlFor="buy">
                  Buy
                </label>
              </div>

              <div className="flex items-center">
                <input
                  className="cursor-pointer"
                  id="swap"
                  type="checkbox"
                  checked={swap}
                  onChange={(e) => setSwap(e.target.checked)}
                />
                <label htmlFor="swap" className="ml-1 cursor-pointer">
                  Swap
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-3">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                min={0}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border border-gray-300 rounded-md w-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                min={0}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border border-gray-300 rounded-md w-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
              />
            </div>

            <div className="mb-3">
              <h3 className="font-semibold mb-1 text-sm">Condition</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(conditions).map((condition) => (
                  <div key={condition} className="flex items-center">
                    <input
                      className="cursor-pointer"
                      id={condition}
                      type="checkbox"
                      checked={conditions[condition]}
                      onChange={(e) =>
                        setConditions({
                          ...conditions,
                          [condition]: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor={condition}
                      className="ml-1 cursor-pointer capitalize text-sm"
                    >
                      {condition}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <select
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="select select-bordered w-full p-2 rounded-md bg-white text-gray-700 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
              >
                <option value="" disabled>
                  Select Governorate
                </option>
                {governorates.map((gov, index) => (
                  <option key={index} value={gov}>
                    {gov}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn text-white bg-[--secondary-color] hover:bg-error w-full rounded-md p-2 text-sm transition duration-150 ease-in-out"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>

          <div className="items-grid w-full md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : error ? (
              <div className="text-error text-center">
                <p>{error}</p>
                <button
                  className="btn btn-primary mt-4"
                  onClick={() => {
                    setError("");
                    updateFilters();
                  }}
                >
                  Try Again
                </button>
              </div>
            ) : items.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                  {items.map((item) => (
                    <ItemCard
                      key={item._id}
                      item={item}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-center">No items found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
