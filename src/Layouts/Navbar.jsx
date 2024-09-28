import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";

import { useUserContext } from "../contexts/UserContext";
import localStorageServices from "../services/localStorageServices";
import authApiRequests from "../services/authApiRequests";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useUserContext();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleLogout = async () => {
    await authApiRequests.logout();
    setUser(null);
    localStorageServices.clearTokensAndUser();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[var(--primary-color)] text-white py-2 hidden md:flex">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="flex flex-row space-x-4">
            <span className="text-[11px] md:text-sm">
              Call Us: +1 213 974-5898
            </span>
            <span className="text-[11px] md:text-sm">
              Email:{" "}
              <a href="mailto:toystore@template.com" className="underline">
                ToyzCity@template.com
              </a>
            </span>
          </div>
          <div className="flex space-x-4 mt-0 md:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar bg-white shadow-lg relative">
        <div className="container mx-auto flex justify-between items-baseline">
          <NavLink to="/" className="flex items-center me-4">
            <p className="text-2xl font-bold">ToyzCity</p>
          </NavLink>

          <div className="hidden md:flex space-x-4 flex-grow">
            <NavLink to="/shop" className="nav-link hover:underline">
              Shop
            </NavLink>
            <NavLink to="/delivery" className="nav-link hover:underline">
              Delivery
            </NavLink>
            <NavLink to="/about" className="nav-link hover:underline">
              About
            </NavLink>
            <NavLink to="/contact-us" className="nav-link hover:underline">
              Contact Us
            </NavLink>
          </div>

          <div className="flex items-center space-x-2">
            {loading ? (
              <span className="loading loading-bars loading-md"></span>
            ) : !user ? (
              <>
                <NavLink
                  to="/login"
                  className="nav-link hover:underline hidden md:inline-flex"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="nav-link hover:underline hidden md:inline-flex"
                >
                  Register
                </NavLink>
              </>
            ) : (
              <div className="space-x-4 hidden md:flex flex-grow">
                <p className="hidden md:inline text-[var(--primary-color)]">
                  Welcome,&nbsp;
                  <span className="text-[var(--secondary-color)] font-semibold">
                    {user.name}
                  </span>
                </p>

                <NavLink to="/sell-item" className="nav-link hover:underline">
                  Sell a toy
                </NavLink>

                <NavLink to="/my-account" className="nav-link hover:underline">
                  My Account
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="nav-link hover:underline hidden md:inline-flex"
                >
                  Logout
                </button>
              </div>
            )}

            <NavLink
              to="/wishlist"
              className="flex items-center relative p-2 rounded-md"
            >
              <div className="absolute top-[-7px] right-[-1px] flex flex-col items-center">
                <div className="flex justify-center space-x-1 mb-[-2px]">
                  <div className="bg-[var(--primary-color)] rounded-full w-2 h-2"></div>
                  <div className="bg-[var(--primary-color)] rounded-full w-2 h-2"></div>
                </div>
                <div className="bg-[var(--primary-color)] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </div>
              </div>
              <BsBagHeartFill className="text-xl" />{" "}
            </NavLink>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md hover:bg-green-100 transition"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="flex flex-col pt-4 absolute w-[30%] top-full right-0 bg-base-200 shadow-lg md:hidden z-50">
            {user && (
              <>
                <p className="text-[var(--primary-color)]">
                  Welcome,&nbsp;
                  <span className="text-[var(--secondary-color)] font-semibold">
                    {user.name}
                  </span>
                </p>
                <NavLink to="/sell-item" className="nav-link hover:underline">
                  Sell a toy
                </NavLink>

                <NavLink to="/my-account" className="nav-link hover:underline">
                  My Account
                </NavLink>
              </>
            )}
            <ul className="menu w-full">
              {!user ? (
                <>
                  <li>
                    <NavLink
                      to="/register"
                      onClick={toggleMobileMenu}
                      className="w-full py-3 px-4 hover:bg-base-300"
                    >
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      onClick={toggleMobileMenu}
                      className="w-full py-3 px-4 hover:bg-base-300"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              ) : null}

              <li>
                <NavLink
                  to="/shop"
                  onClick={toggleMobileMenu}
                  className="w-full py-3 px-4 hover:bg-base-300"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/delivery"
                  onClick={toggleMobileMenu}
                  className="w-full py-3 px-4 hover:bg-base-300"
                >
                  Delivery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={toggleMobileMenu}
                  className="w-full py-3 px-4 hover:bg-base-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  onClick={toggleMobileMenu}
                  className="w-full py-3 px-4 hover:bg-base-300"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wishlist"
                  onClick={toggleMobileMenu}
                  className="w-full py-3 px-4 hover:bg-base-300"
                >
                  Wishlist
                </NavLink>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                      handleLogout();
                    }}
                    className="w-full py-3 px-4 hover:bg-base-300"
                  >
                    Logout
                  </button>
                </li>
              ) : null}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
