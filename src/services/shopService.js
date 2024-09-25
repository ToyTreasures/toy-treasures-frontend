import itemApiRequests from "../services/itemApiRequests";

export const getCurrentFilters = (search, minPrice, maxPrice, buy, swap, conditions, address) => {
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

export const fetchFilteredItems = async (search, filters, currentPage, itemsPerPage) => {
  const queryParams =
    search || filters.length
      ? `?${search ? `search=${search}&` : ""}${
          filters.length ? `filters=${filters.join("--")}&` : ""
        }page=${currentPage}&limit=${itemsPerPage}`
      : `?page=${currentPage}&limit=${itemsPerPage}`;

  try {
    const response = await itemApiRequests.getAllItems(queryParams);
    return response;
  } catch (err) {
    throw new Error(err.message || "Unknown error");
  }
};
