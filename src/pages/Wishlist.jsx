import { useState, useEffect } from "react";
import { FaTimes, FaSadTear, FaInfoCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import wishlistApiRequests from "../services/wishlistApiRequests";
import BreadCrumbs from "../components/BreadCrumbs";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWishlistItems = async () => {
      setIsLoading(true);
      try {
        const response = await wishlistApiRequests.getWishlist();
        setWishlistItems(response.wishlist.items);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWishlistItems();
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      await wishlistApiRequests.removeItemFromWishlist(id);
      setWishlistItems(wishlistItems.filter((item) => item._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const clearWishlist = async () => {
    try {
      await wishlistApiRequests.clearWishlist();
      setWishlistItems([]);
    } catch (error) {
      setError(error.message);
    }
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="bg-base-100 rounded-lg shadow-md p-6 text-center max-w-md mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>
        <FaSadTear className="mx-auto w-24 h-24 text-gray-400 mb-4" />
        <p className="text-xl font-semibold mb-4 text-[--secondary-color]">
          Your wishlist is empty
        </p>
        <p className="text-gray-600 mb-6 font-bold text-[--secondary-color]">
          You don't have any products in your wishlist yet. You'll find a lot of
          interesting products on our "Shop" page.
        </p>
        <Link
          to="/shop"
          className="btn bg-[--primary-color] text-[--secondary-color] font-bold hover:bg-opacity-80 transition-all duration-300"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full md:w-11/12 mx-auto py-8">
        <BreadCrumbs currentPage={"Wishlist"} />
      </div>
      <div className="bg-base-100 rounded-lg shadow-md p-4 sm:p-6 max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
          My Wishlist
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {wishlistItems.map((item) => (
            <div
              key={item._id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
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
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
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
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={clearWishlist}
            className="btn bg-red-600 text-white font-bold hover:bg-red-700 transition-all duration-300"
          >
            <FaTrashAlt size={16} className="mr-2" />
            Remove All Items from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
