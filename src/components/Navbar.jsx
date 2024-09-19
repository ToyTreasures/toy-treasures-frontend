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
    <header>
      <div className="bg-[#a5c926] text-white py-2">
        <div className="container mx-auto flex flex-col md:flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <span>Call Us: +1 213 974-5898</span>
            <span>
              Email:{" "}
              <a href="mailto:toystore@template.com" className="underline">
                toystore@template.com
              </a>
            </span>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <nav className="navbar bg-base-100 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4">
          <NavLink to="/" className="text-xl font-bold">
            ToyStore
          </NavLink>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
            <NavLink to="/delivery" className="nav-link">
              Delivery
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contacts" className="nav-link">
              Contacts
            </NavLink>
            <NavLink to="/cart" className="btn btn-ghost">
              <FaShoppingCart />
            </NavLink>
            {/* {user ? (
              <>
                <span className="btn btn-ghost">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-primary">
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn btn-secondary">
                  Sign Up
                </NavLink>
              </>
            )} */}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="btn btn-ghost">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav
            role="navigation"
            className="nav-menu w-nav-menu md:hidden bg-base-100 shadow-lg"
            style={{
              transition: "all 400ms",
              transform: "translateY(0px) translateX(0px)",
            }}
            data-nav-menu-open=""
          >
            <NavLink to="/catalog" className="nav-link w-nav-link w--nav-link-open block px-4 py-2">
              Catalog
            </NavLink>
            <NavLink
              to="/delivery"
              className="nav-link w-nav-link w--nav-link-open block px-4 py-2"
            >
              Delivery
            </NavLink>
            <NavLink to="/about" className="nav-link w-nav-link w--nav-link-open block px-4 py-2">
              About
            </NavLink>
            <NavLink
              to="/contacts"
              className="nav-link w-nav-link w--nav-link-open block px-4 py-2"
            >
              Contacts
            </NavLink>
            <NavLink to="/cart" className="nav-link w-nav-link w--nav-link-open block px-4 py-2">
              Cart
            </NavLink>
            {/* {user ? (
              <>
                <span className="nav-link w-nav-link w--nav-link-open block px-4 py-2">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="nav-link w-nav-link w--nav-link-open block px-4 py-2">
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="nav-link w-nav-link w--nav-link-open block px-4 py-2">
                  Login
                </NavLink>
                <NavLink to="/signup" className="nav-link w-nav-link w--nav-link-open block px-4 py-2">
                  Sign Up
                </NavLink>
              </>
            )} */}
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
