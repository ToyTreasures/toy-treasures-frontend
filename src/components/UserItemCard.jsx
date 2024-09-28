import { Link } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";

const UserItemCard = ({ item }) => {
  const timeAgo = formatDistanceToNow(parseISO(item.createdAt), {
    addSuffix: true,
  });

  return (
    <div className="flex flex-col p-4 rounded-lg border shadow-lg transition-transform duration-200 ease-in-out bg-[--primary-color] text-[--secondary-color] hover:bg-gray-300 hover:text-[--secondary-color]">
      <h2 className="text-2xl font-extrabold mb-2">{item.name}</h2>
      <span className="text-lg font-bold mb-1">${item.price}</span>
      <p className="text-sm font-medium text-gray-600 mb-1">
        Condition:
        <span className="font-bold text-[--secondary-color]">
          {" "}
          {item.condition}
        </span>
      </p>
      <p className="text-sm font-medium text-gray-600 mb-1">
        Listed:
        <span className="font-bold text-[--secondary-color]"> {timeAgo}</span>
      </p>
      <p className="text-sm font-medium text-gray-600 mb-1">
        Available for swap:
        <span className="font-bold text-[--secondary-color]">
          {" "}
          {item.isAvailableForSwap ? "Yes" : "No"}
        </span>
      </p>
      <Link to={`/items/${item._id}`} className="card-actions justify-end">
        <button className="btn btn-xs bg-[#f1ffe7] text-[--secondary-color] hover:bg-[#6290c3]">
          More Details
        </button>
      </Link>
    </div>
  );
};

export default UserItemCard;
