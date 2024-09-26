import UserItemCard from "../../components/UserItemCard";
import { useEffect, useState } from "react";
import itemApiRequests from "../../services/itemApiRequests";
import { useOutletContext } from "react-router-dom";

const UserItems = () => {
  const { user } = useOutletContext();
  const [userItems, setUserItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUserItems = async (userId) => {
    setLoading(true);
    setError("");
    try {
      const response = await itemApiRequests.getUsersItems(userId);

      if (response && response.items && response.items.length > 0) {
        setUserItems(response.items);
      } else {
        setUserItems([]);
      }
    } catch (err) {
      setError(
        "Failed to fetch items: " +
          (err.message || "Something wen wrong, Please try again later")
      );
      setUserItems([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user && user._id) {
      fetchUserItems(user._id);
    }
  }, [user]);
  return (
    <>
      <div className="overflow-y-scroll max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-full">
        <h1 className="text-2xl font-bold mb-6">My Items</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {userItems.length > 0 ? (
              userItems.map((item, index) => (
                <UserItemCard item={item} key={index} />
              ))
            ) : (
              <h1 className="text-2xl font-bold mb-6 text-center">
                You didn't list any item yet!
              </h1>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default UserItems;
