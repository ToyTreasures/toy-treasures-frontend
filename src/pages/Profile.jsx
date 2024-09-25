import { Link, NavLink, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import localStorageServices from "../services/localStorageServices";

const ProfilePage = () => {
  const { user, setUser } = useUserContext();

  const handleLogout = () => {
    setUser(null);
    localStorageServices.logout();
  };

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
                  { to: "/my-account/dashboard", label: "Dashboard" },
                  { to: "/my-account/user-items", label: "My Items" },
                  { to: "/my-account/swap-requests", label: "Swap Requests" },
                  {
                    to: "/my-account/account-details",
                    label: "Account details",
                  },
                  { to: "/my-account/wishlist", label: "Wishlist" },
                ].map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-2 px-4 font-bold rounded transition duration-150 ease-in-out bg-[--primary-color] hover:bg-[--secondary-color] hover:bg-gray-200 hover:text-[--secondary-color] ${
                        isActive ? "bg-gray-200" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <button
                  onClick={handleLogout}
                  className="block w-full text-start py-2 px-4 font-bold rounded transition duration-150 ease-in-out  bg-[--primary-color]  hover:bg-[--secondary-color] hover:bg-red-400 hover:text-[--secondary-color]"
                >
                  Logout
                </button>
              </nav>
            </div>
            <div className="md:w-3/4 p-6 bg-[--secondary-color] text-white">
              <Outlet context={{ user, setUser, handleLogout }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
