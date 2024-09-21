import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="transform transition-all duration-300 hover:scale-105 bg-white mt-14 rounded-2xl p-4 ">
      <Link to={`/item/${item.name}`} className="flex flex-col items-center gap-2 ">
        <div className="mb-4 p-10">
          <img src={item.image} alt={item.name} className="w-full h-auto" />
        </div>
        <h6 className="text-lg font-semibold mb-2">{item.name}</h6>
        <div className="text-white bg-[#a5c926]  rounded-full text-sm p-1 mx-auto w-2/5 text-center">
          ${item.price.toFixed(2)} USD
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
