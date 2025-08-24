// src/components/Navbar.tsx
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedInPage = location.pathname === "/dashboard";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-white text-xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          MasjidMunchies
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedInPage ? (
            <button
              onClick={() => navigate("/")}
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
            >
              Start Journey
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          {isLoggedInPage ? (
            <button
              onClick={() => navigate("/")}
              className="w-full text-left text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="w-full text-left text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
            >
              Start Journey
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
