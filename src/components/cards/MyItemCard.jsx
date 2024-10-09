import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa";
import ConfirmationModal from "../modals/ConfirmationModal";

const MyItemCard = ({ item, onToggleSoldState, onEditClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const timeAgo = formatDistanceToNow(parseISO(item.createdAt), {
    addSuffix: true,
  });

  const handleToggleClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    onToggleSoldState();
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.thumbnail || "/placeholder-thumbnail.jpg"}
        alt={item.name}
        className="w-full h-40 sm:h-48 object-fill rounded-lg shadow-md"
      />
      <div className="p-3 sm:p-4">
        <h3 className="text-[--secondary-color] sm:text-lg font-semibold mb-1 sm:mb-2 truncate ">
          {item.name}
        </h3>
        <p className="text-lg sm:text-xl font-bold text-[--secondary-color] mb-1 sm:mb-2">
          ${item.price.toFixed(2)}
        </p>
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-medium text-gray-600">
            Condition: <span className="font-bold">{item.condition}</span>
          </p>
          <p className="text-xs sm:text-sm font-medium text-gray-600">
            Listed: <span className="font-bold">{timeAgo}</span>
          </p>
          <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-4">
            Available for swap:{" "}
            <span className="font-bold">
              {item.isAvailableForSwap ? "Yes" : "No"}
            </span>
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          <Link
            to={`/items/${item._id}`}
            className="btn btn-sm bg-[--primary-color] text-[--secondary-color] font-bold text-xs sm:text-[10px] flex-1 min-w-[100px]"
          >
            View Details
          </Link>
          {location.pathname === "/my-items" && (
            <button
              className="btn btn-sm bg-green-600 text-white px-2 hover:text-[--secondary-color] sm:px-3 flex-1 min-w-[100px] "
              aria-label="Edit item"
              onClick={() => onEditClick(item)}
            >
              <FaEdit className="text-xs sm:text-sm " />
            </button>
          )}

          <button
            onClick={handleToggleClick}
            className="btn btn-sm bg-red-500 text-white text-xs hover:text-[--secondary-color] sm:text-sm whitespace-nowrap px-2 sm:px-3 flex-1 min-w-[100px]"
            aria-label="Toggle sold state"
            disabled={isLoading}
          >
            {isLoading
              ? "Processing..."
              : item.sold
              ? "List for sale"
              : "Mark as sold"}
          </button>
        </div>
      </div>

      <ConfirmationModal
        show={showModal}
        message={`Are you sure you want to ${
          item.sold ? "list this item for sale" : "mark this item as sold"
        }?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default MyItemCard;
