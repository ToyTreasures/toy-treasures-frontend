import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 h-full  py-14 ">
      <div className="container mx-auto px-4 max-w-7xl ">
        <div className="bg-white rounded-lg shadow-md overflow-hidden ">
          <div className="md:flex  ">
            <div className="md:w-1/4  p-6 bg-[--secondary-color]  border-r border-gray-200  ">
              <h3 className="text-2xl font-bold mb-6 text-white ">
                My Account
              </h3>
              <nav
                className="space-y-2 text-[--secondary-color]"
                aria-label="Account pages"
              >
                {[
                  { to: "/my-account", label: "Dashboard" },
                  { to: "/my-account/orders", label: "Orders" },
                  { to: "/my-account/edit-address", label: "Addresses" },
                  { to: "/my-account/edit-account", label: "Account details" },
                  { to: "/wishlist", label: "Wishlist" },
                  { to: "/my-account/logout", label: "Logout" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block py-2 px-4 font-bold rounded transition duration-150 ease-in-out  bg-[--primary-color]  hover:text-white hover:bg-[--secondary-color] hover:bg-gray-200 hover:text-[--secondary-color]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="md:w-3/4 p-6 bg-[--secondary-color] text-white">
              <div className="mb-6">
                <p className="text-lg mb-2">
                  Hello <strong>mohamed-9432</strong> (not{" "}
                  <strong>mohamed-9432</strong>?{" "}
                  <Link to="/logout" className="text-white hover:underline">
                    Log out
                  </Link>
                  )
                </p>
                <p className=" text-white ">
                  From your account dashboard you can view your{" "}
                  <Link
                    to="/my-account/orders"
                    className=" text-white font-bold  hover:underline"
                  >
                    recent orders
                  </Link>
                  , manage your{" "}
                  <Link
                    to="/my-account/edit-address"
                    className=" text-white font-bold  hover:underline"
                  >
                    shipping and billing addresses
                  </Link>
                  , and{" "}
                  <Link
                    to="/my-account/edit-account"
                    className=" text-white  font-bold  font-boldhover:underline"
                  >
                    edit your password and account details
                  </Link>
                  .
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { to: "/my-account", label: "Dashboard", icon: "🏠" },
                  { to: "/my-account/orders", label: "Orders", icon: "📦" },
                  {
                    to: "/my-account/edit-address",
                    label: "Addresses",
                    icon: "🏡",
                  },
                  {
                    to: "/my-account/edit-account",
                    label: "Account details",
                    icon: "👤",
                  },
                  { to: "/wishlist", label: "Wishlist", icon: "❤️" },
                  { to: "/my-account/logout", label: "Logout", icon: "🚪" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="flex flex-col items-center p-4  rounded-lg shadow-sm text-center transition duration-150 ease-in-out bg-[--primary-color] text-[--secondary-color]  hover:text-white hover:bg-[--secondary-color] hover:bg-gray-200 hover:shadow-md"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="font-bold">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
