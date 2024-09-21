import { Link } from "react-router-dom";
import CoverImg from "../assets/hero-bg.jpg";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${CoverImg})` }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="mb-4">
          The page you are looking for doesnt exist or has been moved.
        </p>
        <Link to="/" className="btn bg-[#a5c926]">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
