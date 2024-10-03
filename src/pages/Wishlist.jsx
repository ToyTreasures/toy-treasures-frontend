import { useState } from "react";
import { FaSadTear, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import wishlistServices from "../services/wishlistServices";
import BreadCrumbs from "../components/BreadCrumbs";
import WishlistItemCard from "../components/cards/WishlistItemCard";
import { useUserContext } from "../contexts/UserContext";

const Wishlist = () => {
  const { wishlist, setWishlist, userContextLoading } = useUserContext();
  const [error, setError] = useState(null);

  const clearWishlist = async () => {
    try {
      await wishlistServices.emptyWishlist(wishlist, setWishlist);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  if (userContextLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (wishlist?.items.length === 0) {
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
          {wishlist.items.map((item) => (
            <WishlistItemCard key={item._id} item={item} />
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
