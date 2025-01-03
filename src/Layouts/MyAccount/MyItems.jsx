import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyItemCard from "../../components/cards/MyItemCard";
import itemApiRequests from "../../services/apiRequests/itemApiRequests";
import { useUserContext } from "../../contexts/UserContext";
import { useToast } from "../../hooks/useToast";

const MyItems = () => {
  const { user } = useUserContext();
  const [userItems, setUserItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { showToast, ToastContainer } = useToast();

  const fetchUserItems = useCallback(
    async (userId) => {
      setLoading(true);
      setErrorMessage("");
      try {
        const response = await itemApiRequests.getUsersItems(userId);
        if (response && response.items && response.items.length > 0) {
          setUserItems(response.items.slice(0, 3));
        } else {
          setUserItems([]);
        }
      } catch (error) {
        const errorMsg =
          "Failed to fetch items: " +
          (error.message || "Something went wrong. Please try again later");
        setErrorMessage(errorMsg);
        showToast(errorMsg, TOAST_TYPES.ERROR);
        setUserItems([]);
      } finally {
        setLoading(false);
      }
    },
    [showToast, itemApiRequests]
  );

  useEffect(() => {
    if (user && user._id) {
      fetchUserItems(user._id);
    }
  }, [user]);

  const handleToggleSoldState = async (itemId) => {
    setUserItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, sold: !item.sold } : item
      )
    );

    await itemApiRequests.toggleSoldState(itemId).catch(() => {
      setUserItems((prevItems) =>
        prevItems.map((item) =>
          item._id === itemId ? { ...item, sold: !item.sold } : item
        )
      );
    });
  };

  return (
    <div className="bg-base-100 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">My Items Preview</h2>
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : errorMessage ? (
        <div
          className="bg-red-200 border border-red-400 text-red-800 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {userItems.length > 0 ? (
              userItems.map((item) => (
                <MyItemCard
                  item={item}
                  key={item._id}
                  onToggleSoldState={() => {
                    handleToggleSoldState(item._id);
                  }}
                />
              ))
            ) : (
              <p className="col-span-3 text-center text-lg font-semibold text-gray-600">
                You haven't listed any items yet!
              </p>
            )}
          </div>
          <div className="flex justify-center items-center h-full">
            <Link
              to="/my-items"
              className="btn btn-ghost font-bold bg-[--primary-color] text-[--secondary-color] w-auto"
            >
              View All My Items
            </Link>{" "}
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyItems;
