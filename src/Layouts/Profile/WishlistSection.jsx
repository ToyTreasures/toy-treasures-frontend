import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaShoppingCart, FaSadTear } from "react-icons/fa";
import BackgroundImage from "../../assets/story-bg.jpg";

const WishlistPreview = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating fetch from an API for testing
    const staticWishlistItems = [
      {
        id: 1,
        title: "Toy Car",
        image: BackgroundImage,
        price: 19.99,
      },
      {
        id: 2,
        title: "Building Blocks",
        image: BackgroundImage,
        price: 29.99,
      },
      {
        id: 3,
        title: "Dollhouse",
        image: BackgroundImage,
        price: 49.99,
      },
    ];

    setWishlistItems(staticWishlistItems);
    setIsLoading(false);
  }, []);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    console.log(`Added ${item.title} to cart`);
    // Implement actual add to cart functionality here
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="bg-base-100 rounded-lg shadow-md p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>
        <FaSadTear className="mx-auto w-24 h-24 text-gray-400 mb-4" />
        <p className="text-xl font-semibold mb-4  text-[--secondary-color]">
          Your wishlist is empty
        </p>
        <p className="text-gray-600 mb-6 font-bold  text-[--secondary-color]">
          You don't have any products in your wishlist yet. You'll find a lot of
          interesting products on our "Shop" page.
        </p>
        <Link
          to="/shop"
          className="btn bg-[--primary-color] text-[--secondary-color] font-bold"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist Preview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-2 left-2 bg-red-700 text-white rounded-full p-1 transition-transform transform hover:scale-110 hover:bg-red-800 focus:outline-none"
              aria-label="Remove from wishlist"
            >
              <FaTimes size={20} />
            </button>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-[--secondary-color] mb-4 ">
                ${item.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(item)}
                className="btn btn-sm w-full flex items-center font-bold justify-center bg-[--primary-color] text-[--secondary-color] "
              >
                <FaShoppingCart size={16} className="mr-2 " />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/wishlist"
        className="btn btn-ghost font-bold bg-[--primary-color] text-[--secondary-color]  w-full"
      >
        View All Wishlist Items
      </Link>
    </div>
  );
};

export default WishlistPreview;
