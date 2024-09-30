import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const WoodenToys = () => {
  const items = [
    {
      id: 1,
      name: "Happy Flower",
      price: 38.0,
      thumbnail:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png",
      condition: "new",
      isAvailableForSwap: true,
    },
    {
      id: 2,
      name: "Lift Machine",
      price: 24.0,
      thumbnail:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png",
      condition: "gentle",
      isAvailableForSwap: false,
    },
    {
      id: 3,
      name: "Wooden Camera",
      price: 32.0,
      thumbnail:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png",
      condition: "used",
      isAvailableForSwap: true,
    },
    {
      id: 4,
      name: "Little Rabbit",
      price: 16.0,
      thumbnail:
        "https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
      condition: "new",
      isAvailableForSwap: false,
    },
  ];

  return (
    <div className="py-12">
      <div className="w-full lg:max-w-6xl mx-auto px-4 sm:w-4/5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h3 className="text-[28px] text-black mb-4 sm:mb-0">Wooden Toys</h3>
          <Link
            to="/shop"
            className="py-2 border-b-2 border-gray-300 transition-colors duration-300 ease-in-out text-gray-900 text-sm font-semibold no-underline hover:border-[--primary-color] flex items-center gap-1"
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
          <div className="w-[136px] h-full bg-[--primary-color] absolute top-0 left-0"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              buttonText="Add to cart"
              icon={HiOutlineShoppingCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WoodenToys;
