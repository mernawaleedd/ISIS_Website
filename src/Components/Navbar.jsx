import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 h-18 p-16 flex justify-between items-center px-6 py-2 z-20 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md w-[90%] rounded-full"
          : "bg-transparent w-full"
      }`}
    >
      <img src={logo} alt="Logo" className="w-16 h-16 mt-2 object-contain" />
      <div
        className="md:hidden text-[#0E2F40] text-3xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-[#0E2F40] font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `cursor-pointer transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `cursor-pointer transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              `cursor-pointer transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
            }
          >
            News
          </NavLink>
        </li>
      </ul>

      <button className="hidden md:block px-4 py-2 bg-[#24698f] text-white rounded-3xl hover:bg-[#0E2F40] transition">
        Contact Us
      </button>

      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-4 shadow-md md:hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 cursor-pointer text-[#0E2F40] transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 cursor-pointer text-[#0E2F40] transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `py-2 cursor-pointer text-[#0E2F40] transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `py-2 cursor-pointer text-[#0E2F40] transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                `py-2 cursor-pointer text-[#0E2F40] transition ${isActive ? "text-[#24698F]" : "hover:text-[#24698F]"}`
              }
            >
              News
            </NavLink>
          </li>
          <button className="px-6 py-3 bg-[#24698F] text-white rounded-3xl transition-none">
            Contact Us
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
