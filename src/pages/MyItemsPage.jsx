import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSadTear, FaTrashAlt, FaPlus } from "react-icons/fa";
import itemApiRequests from "../services/itemApiRequests";
import { useUserContext } from "../contexts/UserContext";
import MyItemCard from "../components/MyItemCard";
import Toast from "../components/Toast";

const MyItemsPage = () => {
  const { user } = useUserContext();
  const [userItems, setUserItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [toastConfig, setToastConfig] = useState({
    show: false,
    message: "",
    type: null,
  });

  const showToast = useCallback((message, type) => {
    setToastConfig({ show: true, message, type });
    setTimeout(
      () => setToastConfig({ show: false, message: "", type: null }),
      3000
    );
  }, []);

  const location = useLocation();

  useEffect(() => {
    const fetchUserItems = async (userId) => {
      setIsLoading(true);
      setError("");
      try {
        const response = await itemApiRequests.getUsersItems(userId);
        if (response && response.items && response.items.length > 0) {
          setUserItems(response.items);
        } else {
          setUserItems([]);
        }
      } catch (error) {
        setError(
          "Failed to fetch items: " +
            (error.message || "Something went wrong. Please try again later")
        );
        setUserItems([]);
      }
      setIsLoading(false);
    };

    if (location.state?.isRedirected) {
      showToast("Item created successfully", "success");
    }

    fetchUserItems(user._id);
  }, [user]);

  const removeAllItems = async () => {
    // Implement the logic to remove all items
    console.log("Removing all items");
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

  if (userItems.length === 0) {
    return (
      <div className="bg-base-100 rounded-lg shadow-md p-6 text-center max-w-md mx-auto mt-10">
        <h2 className="text-3xl font-bold mb-4">My Items</h2>
        <FaSadTear className="mx-auto w-24 h-24 text-gray-400 mb-4" />
        <p className="text-xl font-semibold mb-4 text-[--secondary-color]">
          You haven't listed any items yet
        </p>
        <p className="text-gray-600 mb-6 font-bold text-[--secondary-color]">
          Start adding items to your collection or create new listings.
        </p>
        <Link
          to="/add-item"
          className="btn bg-[--primary-color] text-[--secondary-color] font-bold hover:bg-opacity-80 transition-all duration-300"
        >
          <FaPlus className="mr-2" />
          Add New Item
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-base-100 rounded-lg shadow-md p-4 sm:p-6 max-w-7xl mx-auto mt-10">
      {toastConfig.show && (
        <Toast message={toastConfig.message} type={toastConfig.type} />
      )}

      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        My Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {userItems.map((item) => (
          <MyItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={removeAllItems}
          className="btn bg-red-600 text-white font-bold hover:bg-red-700 transition-all duration-300"
        >
          <FaTrashAlt size={16} className="mr-2" />
          Remove All Items
        </button>
      </div>
    </div>
  );
};

export default MyItemsPage;
