import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSadTear, FaPlus } from "react-icons/fa";
import itemApiRequests from "../services/apiRequests/itemApiRequests";
import { useUserContext } from "../contexts/UserContext";
import MyItemCard from "../components/cards/MyItemCard";
import { useToast, TOAST_TYPES } from "../hooks/useToast";
import BreadCrumbs from "../components/BreadCrumbs";
import EditItemModal from "../components/modals/EditItemModal";

const MyItemsPage = () => {
  const { user } = useUserContext();
  const [userItems, setUserItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const { showToast, ToastContainer } = useToast();
  const location = useLocation();

  const fetchUserItems = useCallback(
    async (userId) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await itemApiRequests.getUsersItems(userId);
        setUserItems(response?.items || []);
      } catch (error) {
        const errorMessage =
          error.message || "Something went wrong. Please try again later";
        setError(`Failed to fetch items: ${errorMessage}`);
        showToast(errorMessage, TOAST_TYPES.ERROR);
      } finally {
        setIsLoading(false);
      }
    },
    [showToast]
  );

  useEffect(() => {
    if (location.state?.isRedirected) {
      showToast("Item added successfully", TOAST_TYPES.SUCCESS);
    }
    fetchUserItems(user._id);
  }, [user._id, showToast, location.state, fetchUserItems]);

  const handleEditClick = useCallback((item) => {
    setItemToEdit(item);
    setIsEditModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsEditModalOpen(false);
    setItemToEdit(null);
  }, []);

  const handleItemUpdated = useCallback(
    (updatedItem) => {
      setUserItems((prevItems) =>
        prevItems.map((item) =>
          item._id === updatedItem._id ? updatedItem : item
        )
      );
      showToast("Item updated successfully", TOAST_TYPES.SUCCESS);
    },
    [showToast]
  );

  const handleToggleSoldState = useCallback(
    async (itemId) => {
      setUserItems((prevItems) =>
        prevItems.map((item) =>
          item._id === itemId ? { ...item, sold: !item.sold } : item
        )
      );

      try {
        await itemApiRequests.toggleSoldState(itemId);
        const updatedItem = userItems.find((item) => item._id === itemId);
        showToast(
          updatedItem.sold ? "Item listed as available" : "Item marked as sold",
          TOAST_TYPES.INFO
        );
      } catch (error) {
        setUserItems((prevItems) =>
          prevItems.map((item) =>
            item._id === itemId ? { ...item, sold: !item.sold } : item
          )
        );
        showToast("An error occurred. Please try again", TOAST_TYPES.ERROR);
      }
    },
    [userItems, showToast]
  );

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
          to="/sell-item"
          className="btn bg-[--primary-color] text-[--secondary-color] font-bold hover:bg-opacity-80 transition-all duration-300"
        >
          <FaPlus className="mr-2" />
          Add New Item
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full md:w-11/12 mx-auto py-8">
        <BreadCrumbs currentPage="My Items" />
      </div>
      <div className="bg-base-100 rounded-lg shadow-md p-4 sm:p-6 max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
          My Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {userItems.map((item) => (
            <MyItemCard
              key={item._id}
              item={item}
              onToggleSoldState={() => handleToggleSoldState(item._id)}
              onEditClick={handleEditClick}
            />
          ))}
        </div>
      </div>
      {isEditModalOpen && (
        <EditItemModal
          item={itemToEdit}
          onClose={handleCloseModal}
          onItemUpdated={handleItemUpdated}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default MyItemsPage;
