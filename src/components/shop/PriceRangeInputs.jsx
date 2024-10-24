const PriceRangeInputs = ({ title, minPrice, maxPrice, onChange }) => {
  return (
    <div className="flex flex-col gap-3 mb-3">
      {" "}
      <h3 className="font-semibold mb-1 text-sm">{title}</h3>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        min={0}
        onChange={(e) => onChange(e.target.value, maxPrice)}
        className="border border-gray-300 rounded-md w-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        min={0}
        onChange={(e) => onChange(minPrice, e.target.value)}
        className="border border-gray-300 rounded-md w-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
      />
    </div>
  );
};

export default PriceRangeInputs;
