const CheckboxFilters = ({ title, options, selectedValues, onChange }) => {
  const handleChange = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(updatedValues);
  };

  return (
    <div className="mb-3">
      <h3 className="font-semibold mb-1 text-sm">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={option.value}
              type="checkbox"
              checked={selectedValues.includes(option.value)}
              onChange={() => handleChange(option.value)}
              className="cursor-pointer"
            />
            <label
              htmlFor={option.value}
              className="ml-1 cursor-pointer capitalize text-sm"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxFilters;
