import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profileData } from "../constants/portfolioData";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const handleMobileView = () => {
    setMobileView((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between px-8 h-20">
      {/* name  */}
      <div>
        <h1 className="font-bold text-2xl tracking-tight">
          {profileData.name}
        </h1>
      </div>
      {/* mobile view  */}
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleMobileView}
        >
          <Menu size={24} />
        </button>
        {mobileView && (
          <ul className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg font-medium">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/home">
                Home
              </Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
      {/* desktop view  */}
      <div className="hidden md:flex space-x-8">
        <ul className="flex space-x-2 text-lg font-medium">
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link className="text-blue-600" to="/">
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link to="/">About</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
