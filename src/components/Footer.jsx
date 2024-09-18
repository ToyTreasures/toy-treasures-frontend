// src/components/Footer.jsx
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="footer-left">
        <a href="/" className="footer-brand text-xl font-bold">
          ToyStore
        </a>
      </div>
      <div className="footer-nav flex space-x-4">
        <a href="/" className="footer-link">
          Home
        </a>
        <a href="/catalog" className="footer-link">
          Catalog
        </a>
        <a href="/delivery" className="footer-link">
          Delivery
        </a>
        <a href="/about" className="footer-link">
          About
        </a>
        <a href="/contacts" className="footer-link">
          Contacts
        </a>
      </div>
      <div className="footer-social flex space-x-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FaInstagram />
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FaPinterest />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
