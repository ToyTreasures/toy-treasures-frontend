import { useState, useEffect } from "react";
import itemApiRequestss from "../services/itemApiRequests";
import { useNavigate, useLocation } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      const fetchedItems = await itemApiRequestss.getAllItems(queryParams);
      setItems(fetchedItems);
    } catch (err) {
      setError("Failed to fetch items.");
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
  }

  const updateFilters = () => {
    const filters = getCurrentFilters();

    const queryParams =
      search || filters.length
        ? `?${search && `search=${search}`}${
            filters.length ? `&filters=${filters.join("--")}` : ""
          }`
        : "";

    navigate(`${location.pathname}${queryParams}`, { replace: true });

    fetchFilteredItems(queryParams);
  };

  const handleSearch = () => {
    if (search) {
      const queryParams = `?search=${search}`;
      navigate(`${location.pathname}${queryParams}`, { replace: true });

      fetchFilteredItems(queryParams);
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
      navigate(location.pathname, { replace: true });
    }
  };

  useEffect(() => {
    updateFilters();
  }, [minPrice, maxPrice, buy, swap, conditions, address]);

  return (
    <div className="shop-page p-6 flex">
      <div className="filters w-1/5 p-4 bg-gray-100">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full"
          />
          <button
            className="btn btn-primary w-full mt-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="flex mb-4 gap-4">
          <div>
            <input
              className="cursor-pointer"
              id="buy"
              type="checkbox"
              checked={buy}
              onChange={(e) => {
                setBuy(e.target.checked);
                updateFilters();
              }}
            />
            <label className="ml-2 cursor-pointer" htmlFor="buy">
              Buy
            </label>
          </div>

          <div>
            <input
              className="cursor-pointer"
              id="swap"
              type="checkbox"
              checked={swap}
              onChange={(e) => {
                setSwap(e.target.checked);
                updateFilters();
              }}
            />
            <label htmlFor="swap" className="ml-2 cursor-pointer">
              Swap
            </label>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="input input-bordered w-full"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div className="mb-4">
          <div>
            <input
              className="cursor-pointer"
              id="new"
              type="checkbox"
              checked={conditions.new}
              onChange={(e) => {
                setConditions({ ...conditions, new: e.target.checked });
                updateFilters();
              }}
            />
            <label htmlFor="new" className="ml-2 cursor-pointer">
              New
            </label>
          </div>

          <div>
            <input
              className="cursor-pointer"
              id="gentle"
              type="checkbox"
              checked={conditions.gentle}
              onChange={(e) => {
                setConditions({ ...conditions, gentle: e.target.checked });
                updateFilters();
              }}
            />
            <label htmlFor="gentle" className="ml-2 cursor-pointer">
              Gentle
            </label>
          </div>

          <div>
            <input
              className="cursor-pointer"
              id="used"
              type="checkbox"
              checked={conditions.used}
              onChange={(e) => {
                setConditions({ ...conditions, used: e.target.checked });
                updateFilters();
              }}
            />
            <label htmlFor="used" className="ml-2 cursor-pointer">
              Used
            </label>
          </div>
        </div>

        <div className="mb-4">
          <select
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">Select Governorate</option>
            {governorates.map((gov, index) => (
              <option key={index} value={gov}>
                {gov}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-secondary w-full" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="items-grid w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          items.map((item) => (
            <div key={item._id} className="card shadow-lg p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>{item.description}</p>
              <p
                className={
                  item.isAvailableForSwap ? "text-success" : "text-error"
                }
              >
                {item.isAvailableForSwap
                  ? "Available For Swap"
                  : "NOT Available For Swap"}
              </p>
              <p className="text-lg font-semibold">{item.condition}</p>
              <p className="text-lg font-semibold">${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
