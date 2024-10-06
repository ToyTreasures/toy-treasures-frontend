import SearchBar from "../../components/shop/SearchBar";
import PriceRangeInputs from "../../components/shop/PriceRangeInputs";
import CheckboxFilters from "../../components/shop/CheckBoxFilters";
import AddressSelector from "../../components/shop/AddressSelector";

const FilterPanel = ({ filters, onFilterChange, onSearch }) => {
  const handleResetFilters = () => {
    console.log(filters);
    if (
      filters.address ||
      filters.categories.length ||
      filters.conditions.length ||
      filters.maxPrice ||
      filters.minPrice ||
      filters.search ||
      filters.tradeType !== "all"
    ) {
      onFilterChange({
        search: "",
        minPrice: "",
        maxPrice: "",
        tradeType: "all",
        conditions: [],
        categories: [],
        address: "",
      });
    }
  };

  return (
    <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">Filters</h2>
      <SearchBar onSearch={(value) => onFilterChange({ search: value })} />
      <PriceRangeInputs
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onChange={(minPrice, maxPrice) =>
          onFilterChange({ minPrice, maxPrice })
        }
      />
      <CheckboxFilters
        title="Trade Type"
        options={[
          { label: "Buy", value: "buy" },
          { label: "Swap", value: "swap" },
        ]}
        selectedValues={filters.tradeType === "all" ? [] : [filters.tradeType]}
        onChange={(selected) =>
          onFilterChange({ tradeType: selected.length ? selected[0] : "all" })
        }
      />
      <CheckboxFilters
        title="Condition"
        options={[
          { label: "New", value: "new" },
          { label: "Gentle", value: "gentle" },
          { label: "Used", value: "used" },
        ]}
        selectedValues={filters.conditions}
        onChange={(selected) => onFilterChange({ conditions: selected })}
      />
      <CheckboxFilters
        title="Categories"
        options={[
          { label: "Educational", value: "Educational" },
          { label: "Action Figures & Dolls", value: "Action Figures & Dolls" },
          { label: "Outdoor & Sports", value: "Outdoor & Sports" },
          {
            label: "Electronic & Interactive",
            value: "Electronic & Interactive",
          },
        ]}
        selectedValues={filters.categories}
        onChange={(selected) => onFilterChange({ categories: selected })}
      />
      <AddressSelector
        value={filters.address}
        onChange={(value) => onFilterChange({ address: value })}
      />
      <button
        className="btn text-white bg-[--secondary-color] hover:bg-error w-full rounded-md p-2 text-sm transition duration-150 ease-in-out"
        onClick={handleResetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;
