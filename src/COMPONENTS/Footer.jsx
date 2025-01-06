import { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import footerLogo from "../../public/assets/favIcon.png";

const Footer = () => {
  const { theme } = useContext(AuthContext);

  return (
    <footer className={`bg-gray-900 text-gray-200 py-24 ${theme}`}>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and About */}
        <div>
          <div>
            <img src={footerLogo} alt="" />
          </div>
          <h2 className="text-3xl font-bold text-orange-500">Gauge Gamer</h2>
          <p className="mt-4 text-sm">
            Explore and share honest game reviews with our passionate community.
            Your next adventure awaits!
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <Link to="/">
              <li className="cursor-pointer hover:text-orange-300">Home</li>
            </Link>
            <Link to="all-reviews">
              <li className="cursor-pointer hover:text-orange-300">
                All Reviews
              </li>
            </Link>
            <Link to="/add-reviews">
              <li className="cursor-pointer hover:text-orange-300">
                Add Review
              </li>
            </Link>
            <Link to="/my-reviews">
              <li className="cursor-pointer hover:text-orange-300">
                My Reviews
              </li>
            </Link>
            <Link to="/watchlist">
              <li className="cursor-pointer hover:text-orange-300">
                Game WatchList
              </li>
            </Link>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-3">
            Connect With Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@chillgamer.com</li>
            <li>Phone: +880 123 456 789</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <button
              className="p-3 bg-gray-800 hover:bg-orange-500 rounded-full transition-all"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white" />
            </button>
            <button
              className="p-3 bg-gray-800 hover:bg-orange-500 rounded-full transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white" />
            </button>
            <button
              className="p-3 bg-gray-800 hover:bg-orange-500 rounded-full transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.{" "}
        <Link className="text-bold text-cyan-400">FNH NAF</Link>
      </div>
    </footer>
  );
};

export default Footer;
