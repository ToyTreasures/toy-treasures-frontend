import { useState, useEffect, useRef } from "react";
import governorates from "../../utils/staticData/cities.json";

const AddressSelector = ({ value, onChange }) => {
  const [addressSearchTerm, setAddressSearchTerm] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setAddressSearchTerm(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredGovernorates = governorates.filter((gov) =>
    gov.toLowerCase().includes(addressSearchTerm.toLowerCase())
  );

  const handleSelectGovernorate = (gov) => {
    onChange(gov);
    setAddressSearchTerm(gov);
    setShowDropdown(false);
  };

  return (
    <div className="relative mb-3" ref={inputRef}>
      <input
        type="text"
        value={addressSearchTerm}
        onChange={(e) => {
          setAddressSearchTerm(e.target.value);
          setShowDropdown(true);
        }}
        placeholder="Select Governorate"
        className="input input-bordered w-full p-2 rounded-md bg-white text-gray-700 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-150 ease-in-out"
        onClick={() => setShowDropdown(true)}
      />
      {showDropdown && filteredGovernorates.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
          {filteredGovernorates.map((gov, index) => (
            <li
              key={index}
              onClick={() => handleSelectGovernorate(gov)}
              className="p-2 cursor-pointer hover:bg-yellow-100"
            >
              {gov}
            </li>
          ))}
        </ul>
      )}
      {showDropdown && filteredGovernorates.length === 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 p-2">
          No governorates found.
        </div>
      )}
    </div>
  );
};

export default AddressSelector;
