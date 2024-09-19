import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#a5c926] pt-12 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Footer Left - Brand */}
        <div className="footer-left">
          <a href="/" className="text-2xl font-bold">
            ToyStore
          </a>
        </div>

        <div className="footer-nav flex space-x-6">
          <a href="/" className="footer-link hover:underline">
            Home
          </a>
          <a href="/catalog" className="footer-link hover:underline">
            Catalog
          </a>
          <a href="/delivery" className="footer-link hover:underline">
            Delivery
          </a>
          <a href="/about" className="footer-link hover:underline">
            About
          </a>
          <a href="/contacts" className="footer-link hover:underline">
            Contacts
          </a>
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
      </div>{" "}
      <div className="border-t borde-white  flex flex-col lg:flex-row justify-between items-center mt-12 mr-4 ml-4 pt-8 pb-8">
        {/* Copyright Notice */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} ToyStore. All rights reserved.
        </div>

        {/* Footer Links */}
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
          <a href="/terms-of-service" className="underline">
            Terms of Service
          </a>
          <div className="hidden lg:block">|</div>
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
