import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profileData } from "../constants/portfolioData";
import { Menu } from "lucide-react";
import { animate } from "framer-motion";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    animate(window.scrollY, y, {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  }
};

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const handleMobileView = () => setMobileView((prev) => !prev);
  const handleCloseMobile = () => setMobileView(false);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    scrollToSection(id);
    handleCloseMobile();
  };

  return (
    <nav className="flex items-center justify-between px-8 h-20 relative z-20 bg-white">
      <div>
        <h1 className="font-bold text-2xl tracking-tight">
          {profileData.name}
        </h1>
      </div>
      {/* mobile view */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleMobileView}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        {mobileView && (
          <ul className="absolute right-0 top-16 w-56 mt-2 bg-white rounded-md shadow-lg font-medium">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/" onClick={handleCloseMobile}>
                Home
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#about" onClick={handleNavClick("about")}>
                About
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#projects" onClick={handleNavClick("projects")}>
                Projects
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#journey" onClick={handleNavClick("journey")}>
                Journey
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#education" onClick={handleNavClick("education")}>
                Education
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#contact" onClick={handleNavClick("contact")}>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
      {/* desktop view */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex space-x-2 text-lg font-medium">
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link className="text-blue-600" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#about" onClick={handleNavClick("about")}>About</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#projects" onClick={handleNavClick("projects")}>Projects</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#journey" onClick={handleNavClick("journey")}>Journey</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#education" onClick={handleNavClick("education")}>Education</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#contact" onClick={handleNavClick("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;