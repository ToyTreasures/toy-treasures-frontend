import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/HomeComponent/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#a5c926]  text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="footer-left">
          <Link to="/">
            <img src={logo} alt="ToyStore Logo" className="h-48 w-48" />{" "}
          </Link>
        </div>

        <div className="footer-nav flex space-x-6">
          <Link to="/" className="footer-link hover:underline">
            Home
          </Link>
          <Link to="/shop" className="footer-link hover:underline">
            Shop
          </Link>
          <Link to="/delivery" className="footer-link hover:underline">
            Delivery
          </Link>
          <Link to="/about" className="footer-link hover:underline">
            About
          </Link>
          <Link to="/contacts" className="footer-link hover:underline">
            Contacts
          </Link>
        </div>

        <div className="footer-social flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaPinterest />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="border-t border-white flex flex-col lg:flex-row justify-between items-center mt-8 mr-4 ml-4 pt-6 pb-8">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} ToyStore. All rights reserved.
        </div>

        <div className="text-sm flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
          <div>
            Powered by{" "}
            <a
              href="https://github.com/ToyTreasures"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Group E
            </a>
          </div>
          <div className="hidden lg:block">|</div>
          <Link to="/terms-of-service" className="underline">
            Terms of Service
          </Link>
          <div className="hidden lg:block">|</div>
          <Link to="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
