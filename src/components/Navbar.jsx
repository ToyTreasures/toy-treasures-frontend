import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
// import { useContext, useEffect } from "react";
import logo from "../assets/HomeComponent/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  //   if (loggedInUser) {
  //     setUser({ ...loggedInUser });
  //   }
  // }, [setUser]);

  // const handleLogout = () => {
  //   setUser(null);
  //   localStorage.removeItem("loggedInUser");
  // };

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
            {/* <img src={logo} alt="ToyStore Logo" className="h-16 w-auto" />{" "} */}
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
            <NavLink to="/contacts" className="nav-link hover:underline">
              Contacts
            </NavLink>
          </div>

          <div className="flex items-center space-x-2">
            <NavLink
              to="/cart"
              className="flex items-center relative p-2 rounded-md"
            >
              <span className="absolute top-[-1px] right-[-8px] bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
              <FaShoppingCart className="text-xl" />
            </NavLink>
            {/* {user ? (
              <>
                <span className="hidden md:inline">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-primary hidden md:inline-flex">
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn btn-secondary hidden md:inline-flex">
                  Sign Up
                </NavLink>
              </>
            )} */}
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
          <div className="absolute w-[30%] top-full right-0 bg-base-200 shadow-lg md:hidden z-50">
            <ul className="menu w-full">
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
                  to="/contacts"
                  onClick={toggleMobileMenu}
                  className="w-full py-3 px-4 hover:bg-base-300"
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cart"
                  onClick={toggleMobileMenu}
                  className="w-full py-3 px-4 hover:bg-base-300"
                >
                  Cart
                </NavLink>
              </li>
              {/* {user ? (
                <>
                  <li>
                    <span className="w-full py-3 px-4">Welcome, {user.name}</span>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="w-full py-3 px-4 hover:bg-base-300">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login" onClick={toggleMobileMenu} className="w-full py-3 px-4 hover:bg-base-300">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup" onClick={toggleMobileMenu} className="w-full py-3 px-4 hover:bg-base-300">
                      Sign Up
                    </NavLink>
                  </li>
                </>
              )} */}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
