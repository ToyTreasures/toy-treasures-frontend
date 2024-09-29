import { Link } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyItemCard = ({ item }) => {
  // const timeAgo = formatDistanceToNow(parseISO(item.createdAt), {
  //   addSuffix: true,
  // });

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.thumbnail || "/placeholder-thumbnail.jpg"}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <p className="text-xl font-bold text-[--secondary-color] mb-2">
          ${item.price.toFixed(2)}
        </p>
        <p className="text-sm font-medium text-gray-600 mb-1">
          Condition: <span className="font-bold">{item.condition}</span>
        </p>
        <p className="text-sm font-medium text-gray-600 mb-2">
          Listed: <span className="font-bold">{item.createdAt} </span>
        </p>
        <p className="text-sm font-medium text-gray-600 mb-4">
          Available for swap:{" "}
          <span className="font-bold">
            {item.isAvailableForSwap ? "Yes" : "No"}
          </span>
        </p>
        <div className="flex justify-between">
          <Link
            to={`/items/${item._id}`}
            className="btn btn-sm bg-[--primary-color] text-[--secondary-color] font-bold"
          >
            View Details
          </Link>
          <div>
            <button
              onClick={() => {
                /* Implement edit functionality */
              }}
              className="btn btn-sm bg-blue-500 text-white mr-2"
              aria-label="Edit item"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => {
                /* Implement delete functionality */
              }}
              className="btn btn-sm bg-red-500 text-white"
              aria-label="Delete item"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyItemCard;
