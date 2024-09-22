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
        <div className="text-white bg-[--primary-color]  rounded-full text-sm p-1 mx-auto w-2/5 text-center">
          ${item.price.toFixed(2)} USD
        </div>
        <button className="bg-[#a4c13b] my-3 w-full h-12 border-none rounded-none flex items-center justify-center gap-2 text-white font-medium relative shadow-lg shadow-gray-900/20 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:shadow-gray-900/30 active:scale-95 group">
          <svg
            className="w-5 h-5 fill-white z-10 transition-transform duration-300 ease-in-out group-hover:animate-slide-left"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          ADD TO CART
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3 h-3 fill-gray-300 absolute left-[3.2rem] bottom-6 opacity-0 z-0 transition-all duration-300 ease-in-out group-hover:animate-slide-in-top"
          >
            <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default ItemCard;
