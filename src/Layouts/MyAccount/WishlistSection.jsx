import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";
import WishlistItemCard from "../../components/cards/WishlistItemCard";
import { useUserContext } from "../../contexts/UserContext";

const WishlistSection = () => {
  const { wishlist, userContextLoading } = useUserContext();

  if (userContextLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (wishlist?.items.length === 0) {
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

  const limitedWishlistItems = wishlist?.items.slice(0, 3);

  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist Preview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {limitedWishlistItems?.map((item) => (
          <WishlistItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center h-full">
        <Link
          to="/wishlist"
          className="btn btn-ghost font-bold bg-[--primary-color] text-[--secondary-color] w-auto"
        >
          View All Wishlist Items
        </Link>
      </div>
    </div>
  );
};

export default WishlistSection;
