import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/astralogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Custom scroll function with offset for fixed header
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  // NavLink active style based on current hash
  const isActive = (hash) => {
    return window.location.hash === hash;
  };

  const activeStyle = "text-gray-300 font-medium text-lg";
  const normalStyle = "hover:text-gray-300 transition duration-300 text-lg";

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <HashLink
              to="/#home"
              scroll={scrollWithOffset}
              className="flex items-center"
            >
              <img src={logo} className="h-16 w-16 sm:w-24 sm:h-24" />
            </HashLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <HashLink
              to="/#home"
              scroll={scrollWithOffset}
              className={isActive("#home") ? activeStyle : normalStyle}
            >
              Home
            </HashLink>
            {/* <HashLink
              to="/#about"
              scroll={scrollWithOffset}
              className={isActive("#about") ? activeStyle : normalStyle}
            >
              About
            </HashLink> */}
            <HashLink
              to="/#about"
              scroll={scrollWithOffset}
              className={isActive("#services") ? activeStyle : normalStyle}
            >
              Services
            </HashLink>
            <NavLink
              to="/events"
              scroll={scrollWithOffset}
              className={isActive("#portfolio") ? activeStyle : normalStyle}
            >
              Events
            </NavLink>
            <HashLink
              to="/#contact"
              scroll={scrollWithOffset}
              className={isActive("#contact") ? activeStyle : normalStyle}
            >
              Contact
            </HashLink>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex space-x-5 items-center">
            <a
              href="https://www.facebook.com/productionastra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@astra.production"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300 text-xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.instagram.com/productionastra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-300 text-xl"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-gray-900`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
          <HashLink
            to="/#home"
            scroll={scrollWithOffset}
            onClick={toggleMenu}
            className={`block px-3 py-3 rounded-md text-lg ${
              isActive("#home")
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800"
            }`}
          >
            Home
          </HashLink>
          <HashLink
            to="/#about"
            scroll={scrollWithOffset}
            onClick={toggleMenu}
            className={`block px-3 py-3 rounded-md text-lg ${
              isActive("#about")
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800"
            }`}
          >
            About
          </HashLink>
          <HashLink
            to="/#services"
            scroll={scrollWithOffset}
            onClick={toggleMenu}
            className={`block px-3 py-3 rounded-md text-lg ${
              isActive("#services")
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800"
            }`}
          >
            Services
          </HashLink>
          <NavLink
            to="/events"
            scroll={scrollWithOffset}
            onClick={toggleMenu}
            className={`block px-3 py-3 rounded-md text-lg ${
              isActive("#portfolio")
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800"
            }`}
          >
            Events
          </NavLink>
          <HashLink
            to="/#contact"
            scroll={scrollWithOffset}
            onClick={toggleMenu}
            className={`block px-3 py-3 rounded-md text-lg ${
              isActive("#contact")
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800"
            }`}
          >
            Contact
          </HashLink>

          <div className="flex space-x-5 px-3 py-3 justify-center">
            <a
              href="https://facebook.com/productionastra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com/@astra.production"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com/productionastra/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
