import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ item, buttonText, onButtonClick, icon: Icon }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.onload = handleImageLoad;
    }
    return () => {
      if (imgRef.current) {
        imgRef.current.onload = null;
      }
    };
  }, [handleImageLoad]);

  const getConditionColor = (condition) => {
    switch (condition) {
      case "new":
        return "bg-green-500";
      case "gently used":
        return "bg-yellow-500";
      case "used":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getConditionLightColor = (condition) => {
    switch (condition) {
      case "new":
        return "bg-green-300";
      case "gently used":
        return "bg-yellow-300";
      case "used":
        return "bg-red-300";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="transform transition-all duration-300 hover:scale-105 bg-white rounded-lg shadow-md overflow-hidden w-full h-[450px] flex flex-col">
      <Link to={`/items/${item._id}`} className="flex flex-col h-full">
        <div className="p-4 flex flex-col h-full">
          <div className="h-6 mb-4">
            {item.condition && (
              <span className={`relative inline-block px-3 py-1 text-xs font-semibold text-white ${getConditionColor(item.condition)} rounded-md overflow-hidden`}>
                <span className={`absolute top-0 right-0 inline-block w-2 h-2 ${getConditionLightColor(item.condition)} rounded`}>
                  <span className={`absolute top-0 right-0 w-3 h-3 rotate-45 translate-x-1/2 -translate-y-1/2 ${getConditionColor(item.condition)}`}></span>
                </span>
                <span className={`absolute bottom-0 left-0 inline-block w-2 h-2 rotate-180 ${getConditionLightColor(item.condition)} rounded`}>
                  <span className={`absolute top-0 right-0 w-3 h-3 rotate-45 translate-x-1/2 -translate-y-1/2 ${getConditionColor(item.condition)}`}></span>
                </span>
                {item.condition}
              </span>
            )}
          </div>

          <div className="relative w-full h-48 mb-4 flex-shrink-0">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[--primary-color]"></div>
              </div>
            )}
            <img
              ref={imgRef}
              src={item.thumbnail}
              alt={item.name}
              className={`w-[90%] mx-auto p-2 h-full flex items-center object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={handleImageLoad}
            />
          </div>

          <h6 className="text-lg font-semibold line-clamp-2 text-center h-10 overflow-hidden">{item.name}</h6>

          <div className="flex flex-col items-center justify-center gap-2 mb-4 h-16">
            <div className="h-8 flex items-center justify-center">
              {item.isAvailableForSwap && (
                <span className="text-sm px-2 py-1 rounded-lg text-[--primary-color] border border-[--primary-color] animate-text-shimmer bg-gradient-to-r from-[--primary-color] via-[--secondary-color] to-[--primary-color] bg-[length:200%_100%] bg-clip-text text-transparent">
                  Available For Swap
                </span>
              )}
            </div>
            <div className="text-white bg-[--secondary-color] font-bold rounded-full text-xs py-1 px-3">${item.price ? item.price.toFixed(2) : "0.00"} USD</div>
          </div>

          <button
            className="bg-[--primary-color] w-[90%] mt-auto py-2 px-4 mx-auto border-none rounded-full flex items-center justify-center gap-2 text-white text-sm font-medium relative shadow-lg shadow-gray-900/20 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:shadow-gray-900/30 active:scale-95 group"
            onClick={onButtonClick}
          >
            {Icon && (React.isValidElement(Icon) ? Icon : <Icon className="w-4 h-4 fill-white z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-[4px]" />)}
            {buttonText}
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
