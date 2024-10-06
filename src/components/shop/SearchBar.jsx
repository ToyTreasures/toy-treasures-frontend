import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
        className="border border-gray-300 rounded-md w-full p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
      />
      <button
        className="mt-2 btn text-white bg-[--secondary-color] hover:bg-[var(--primary-color)] w-full rounded-md p-2 text-sm transition duration-150 ease-in-out"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
