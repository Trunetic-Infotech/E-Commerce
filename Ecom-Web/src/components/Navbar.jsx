import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { GiShop } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set false to simulate logged-out state
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-[90px] bg-[#020097] relative">
      <div className="container">
        <nav className="w-full h-[90px] flex items-center justify-between">
          {/* Logo and Search */}
          <div className="flex items-center gap-[70px]">
            <div className="flex items-center gap-[10px]">
              <h1 className="text-[#fff] font-bold text-3xl">OPENCART</h1>
              <FaOpencart className="text-[#fff] font-bold text-5xl" />
            </div>
            <div className="flex bg-[#fff] items-center w-[400px] px-[10px] rounded-[10px]">
              <IoSearch className="font-bold text-2xl" />
              <input
                className="px-[10px] py-[10px] w-[400px] border-none outline-none focus:outline-none focus:ring-0"
                name="text"
                type="text"
                placeholder="Search for more products"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-[15px] relative">
            <Link
              to="/login"
              className="flex gap-[10px] px-[20px] py-[8px] rounded-xl cursor-pointer hover:bg-blue-200 transition-colors duration-300 items-center"
            >
              <FaUserPlus className="font-bold text-2xl text-[#fff]" />
              <h2 className="text-[#fff] font-bold">Login</h2>
            </Link>

            <Link
              to="/seller-register"
              className="flex gap-[10px] px-[20px] py-[8px] rounded-xl cursor-pointer hover:bg-blue-200 transition-colors duration-300 items-center"
            >
              <GiShop className="text-2xl text-white" />
              <h2 className="text-white font-bold">Become a Seller</h2>
            </Link>

            {/* Profile Icon and Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <CgProfile className="font-bold text-3xl text-[#fff]" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  {/* User Profile */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (isLoggedIn) {
                        navigate("/user-profile");
                        setDropdownOpen(false);
                      } else {
                        alert("Please log in to view your profile.");
                      }
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    User Profile
                  </button>

                  {/* Dashboard */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (isLoggedIn) {
                        navigate("/dashboard");
                        setDropdownOpen(false);
                      } else {
                        alert("Please log in to access the dashboard.");
                      }
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    Dashboard
                  </button>

                  {/* Logout */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (isLoggedIn) {
                        setIsLoggedIn(false); // replace with real logout
                        setDropdownOpen(false);
                        alert("You have been logged out.");
                        navigate("/"); // optional: navigate to home after logout
                      } else {
                        alert("You are not logged in.");
                      }
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-blue-100"
                  >
                    Logout
                  </button>
                </div>

              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
