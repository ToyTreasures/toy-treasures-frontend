import { Link } from "react-router-dom";
import { FaTimes, FaInfoCircle } from "react-icons/fa";
import wishlistServices from "../../services/wishlistServices";
import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";

const WishlistItemCard = ({ item }) => {
  const { wishlist, setWishlist } = useUserContext();
  const [error, setError] = useState("");

  const removeFromWishlist = async (id) => {
    try {
      await wishlistServices.removeItemFromWishlist(id, wishlist, setWishlist);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <button
        onClick={() => removeFromWishlist(item._id)}
        className="absolute top-2 left-2 bg-red-700 text-white rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-red-800 focus:outline-none"
        aria-label="Remove from wishlist"
      >
        <FaTimes size={16} />
      </button>
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[--secondary-color] mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 mb-3 text-sm">{item.description}</p>
        <p className="text-2xl font-bold text-[--secondary-color] mb-4">
          ${item.price}
        </p>
        <div className="flex flex-col gap-2">
          <Link
            to={`/items/${item._id}`}
            className="btn btn-sm flex items-center justify-center font-bold bg-[--secondary-color] text-[--primary-color] hover:bg-opacity-80 transition-all duration-300"
          >
            <FaInfoCircle size={16} className="mr-2" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistItemCard;
