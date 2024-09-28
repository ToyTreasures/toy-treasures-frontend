import React from "react";
import { Link, useOutletContext } from "react-router-dom";

const UserDashboard = () => {
  const { user } = useOutletContext();

  return (
    <>
      <div className="mb-6">
        <p className="text-lg mb-2">
          Hello <strong>{user.name}</strong>
        </p>
        <p className=" text-white ">
          From your account dashboard you can view your{" "}
          <Link
            to="/my-account/my-items"
            className=" text-white font-bold  hover:underline"
          >
            your items list
          </Link>
          , manage your{" "}
          <Link
            to="/my-account/edit-address"
            className=" text-white font-bold  hover:underline"
          >
            swap requests on you items
          </Link>
          , and{" "}
          <Link
            to="/my-account/edit-account"
            className=" text-white  font-bold  font-boldhover:underline"
          >
            Edit your account information
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { to: "/my-account/my-items", label: "My Items", icon: "📦" },
          {
            to: "/my-account/swap-requests",
            label: "Swap Requests",
            icon: "🤝",
          },
          {
            to: "/my-account/edit-account",
            label: "Edit Account",
            icon: "🙎‍♂️",
          },
          { to: "/my-account/wishlist", label: "Wishlist", icon: "❤️" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex flex-col items-center p-4  rounded-lg shadow-sm text-center transition duration-150 ease-in-out bg-[--primary-color] text-[--secondary-color]  hover:bg-[--secondary-color] hover:bg-gray-200 hover:shadow-md"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="font-bold">{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserDashboard;
