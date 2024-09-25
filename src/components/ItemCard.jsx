import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, [item.image]);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = handleImageLoad;
    }
    return () => {
      if (imgRef.current) {
        imgRef.current.onload = null;
      }
    };
  }, [item.image, handleImageLoad]);

  return (
    <div className="transform transition-all duration-300 hover:scale-105 bg-white mt-4 sm:mt-8 md:mt-10 lg:mt-14 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4">
      <Link to={`/items/${item._id}`} className="flex flex-col items-center gap-1 sm:gap-2">
        <div className="mb-2 sm:mb-3 md:mb-4 p-4 sm:p-6 md:p-8 lg:p-10 relative w-full aspect-square">
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 border-t-2 border-b-2 border-[--primary-color]"></div>
            </div>
          )}
          <img
            ref={imgRef}
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <h6 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{item.name}</h6>
        <div className="text-white bg-[--primary-color] rounded-full text-xs sm:text-sm md:text-base p-1 px-2 sm:px-3 md:px-4 mx-auto w-auto max-w-[80%] text-center whitespace-nowrap">
          ${item.price.toFixed(2)} USD
        </div>
        <button className="bg-[--primary-color] my-2 sm:my-3 w-full h-8 sm:h-10 md:h-12 border-none rounded-full flex items-center justify-center gap-1 sm:gap-2 text-white text-xs sm:text-sm md:text-base font-medium relative shadow-lg shadow-gray-900/20 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:shadow-gray-900/30 active:scale-95 group">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-white z-10 transition-transform duration-300 ease-in-out group-hover:animate-slide-left"
            viewBox="0 0 576 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          ADD TO CART
        </button>
      </Link>
    </div>
  );
};

export default ItemCard;
