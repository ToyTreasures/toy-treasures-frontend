import { NavLink, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import localStorageServices from "../services/localStorageServices";
import authApiRequests from "../services/authApiRequests";
import BreadCrumbs from "../components/BreadCrumbs";

const MyAccount = () => {
  const { user, setUser } = useUserContext();

  const handleLogout = async () => {
    await authApiRequests.logout();
    setUser(null);
    localStorageServices.clearTokensAndUser();
  };

  return (
    <div className="bg-gray-100 h-full">
      <div className="w-full md:w-11/12 mx-auto py-8">
        <BreadCrumbs currentPage={"My Account"} />
      </div>
      <div className="container mx-auto px-4 max-w-7xl pt-6 pb-14">
        <div className="bg-white rounded-lg shadow-md overflow-hidden ">
          <div className="md:flex">
            <div className="md:w-1/4  p-6 bg-[--secondary-color]  border-r border-gray-200  ">
              <h3 className="text-2xl font-bold mb-6 text-white ">
                My Account
              </h3>
              <nav
                className="flex gap-2 flex-wrap justify-center  text-[--secondary-color]"
                aria-label="Account pages"
              >
                {[
                  { to: "/my-account/", label: "Dashboard" },
                  { to: "/my-account/my-items", label: "My Items" },
                  { to: "/my-account/swap-requests", label: "Swap Requests" },
                  {
                    to: "/my-account/edit-account",
                    label: "Edit Account",
                  },
                  { to: "/my-account/wishlist", label: "Wishlist" },
                ].map((item, index) => (
                  <div key={index} className="mb-4 md:w-full">
                    <NavLink
                      to={item.to}
                      end
                      className={({ isActive }) =>
                        `md:block py-2 px-4 font-bold rounded transition duration-150 ease-in-out bg-[--primary-color] hover:bg-[--secondary-color] hover:bg-gray-200 hover:text-[--secondary-color] ${
                          isActive ? "bg-gray-200" : ""
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </div>
                ))}
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

export default MyAccount;
