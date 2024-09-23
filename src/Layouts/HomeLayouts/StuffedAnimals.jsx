import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";

const StuffedAnimals = () => {
  const items = [
    {
      id: 1,
      name: "Teddy Bear",
      price: 30.0,
      image:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png",
    },
    {
      id: 2,
      name: "Mega Plush Toy",
      price: 38.0,
      image:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
    },
    {
      id: 3,
      name: "Cute Dog",
      price: 24.0,
      image:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png",
    },
    {
      id: 4,
      name: "Little Friend",
      price: 27.0,
      image:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png",
    },
  ];

  return (
    <div className="py-12">
      <div className="w-full lg:max-w-6xl mx-auto px-4 sm:w-4/5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h3 className="text-[28px] text-black mb-4 sm:mb-0">Stuffed Animals</h3>
          <Link
            to="/shop"
            className="py-2 border-b-2 border-gray-300 transition-colors duration-300 ease-in-out text-gray-900 text-sm font-semibold no-underline hover:border-lime-500 flex items-center gap-1"
          >
            See All Toys
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full h-0.5 mt-8 bg-gray-200 relative">
          <div className="w-[136px] h-full bg-lime-500 absolute top-0 left-0"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StuffedAnimals;
