import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneEye } from "react-icons/ai";
import { useUserContext } from "../../contexts/UserContext";
import wishlistServices from "../../services/wishlistServices";

const getConditionColor = (condition) => {
  switch (condition) {
    case "new":
      return "bg-green-500";
    case "gentle":
      return "bg-yellow-500";
    case "used":
      return "bg-red-500";
  }
};

const ItemCard = ({ item }) => {
  const { user, wishlist, setWishlist, userContextLoading } = useUserContext();
  const [inWishlist, setInWishlist] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (wishlist?.items.length > 0) {
      setInWishlist(wishlist.items.some((i) => i._id === item._id));
    }
  }, []);

  const handleAddToOrRemoveFromWishlist = async () => {
    try {
      if (inWishlist) {
        wishlistServices.removeItemFromWishlist(
          item._id,
          wishlist,
          setWishlist
        );
      } else {
        wishlistServices.addItemToWishlist(item, wishlist, setWishlist);
      }
      setInWishlist(!inWishlist);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="transform transition-all duration-500 hover:scale-105 bg-white rounded-lg shadow-md overflow-hidden w-full h-[450px] flex flex-col">
      <div className="flex flex-col h-full">
        <div className="p-4 flex flex-col h-full">
          <div className="h-6 mb-4">
            <span
              className={`relative inline-block px-3 py-1 text-xs font-semibold text-white ${getConditionColor(
                item.condition
              )} rounded-md overflow-hidden`}
            >
              {item.condition}
            </span>
          </div>

          <div className="relative w-full h-48 mb-4 flex-shrink-0">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-[90%] mx-auto p-2 h-full flex items-center object-cover transition-opacity duration-300"
            />
          </div>

          <h6 className="text-lg font-semibold line-clamp-2 text-center h-10 overflow-hidden">
            <Link to={`/items/${item._id}`}>{item.name}</Link>
          </h6>

          <div className="flex flex-col items-center justify-center gap-2 mb-4 h-16">
            <div className="h-8 flex items-center justify-center">
              {item.isAvailableForSwap && (
                <span className="text-sm px-2 py-1 rounded-lg text-[--primary-color] border border-[--primary-color] animate-text-shimmer bg-gradient-to-r from-[--primary-color] via-[--secondary-color] to-[--primary-color] bg-[length:200%_100%] bg-clip-text text-transparent">
                  Available For Swap
                </span>
              )}
            </div>
            <div className="text-white bg-[--secondary-color] font-bold rounded-full text-xs py-1 px-3">
              ${item.price ? item.price.toFixed(2) : "0.00"} USD
            </div>
          </div>

          {user && (
            <button
              className="bg-[--primary-color] w-[90%] mt-auto py-2 px-4 mx-auto border-none rounded-full flex items-center justify-center gap-2 text-white text-sm font-medium relative shadow-lg shadow-gray-900/20 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden hover:shadow-gray-900/30 active:scale-95 group"
              onClick={handleAddToOrRemoveFromWishlist}
              disabled={userContextLoading}
            >
              <AiTwotoneEye className="w-4 h-4 fill-white z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-[4px]" />
              {userContextLoading
                ? "Loading..."
                : inWishlist
                ? "Remove from "
                : "Add to "}
              Wishlist
            </button>
          )}
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
