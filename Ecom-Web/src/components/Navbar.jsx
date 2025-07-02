import React from "react";
import { FaOpencart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";

function Navbar() {
  return (
    <>
      <div className="w-full h-[90px] bg-[#020097] sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="w-full h-[90px] flex items-center justify-between">
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
            <div className="flex items-center gap-[15px]">
              <div>
                <div className="flex gap-[10px] px-[20px] py-[8px] rounded-xl cursor-pointer hover:bg-blue-200 transition-colors duration-300">
                  <FaUserPlus className="font-bold text-2xl text-[#fff]" />
                  <h2 className="text-[#fff] font-bold">Login</h2>
                </div>
              </div>
              <div>
                <div className="flex gap-[10px] px-[10px] py-[8px] w-[50px] rounded-[100%] items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors duration-300">
                  <BsCart4 className="font-bold text-2xl text-[#fff]" />
                </div>
              </div>
              <div>
                <div className="flex gap-[10px] px-[20px] py-[8px] rounded-xl cursor-pointer hover:bg-blue-200 transition-colors duration-300">
                  <GiShop className="font-bold text-2xl text-[#fff]" />
                  <h2 className="text-[#fff] font-bold">Become a seller</h2>
                </div>
              </div>
              <div>
                <IoIosNotifications className="font-bold text-3xl text-[#fff]" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
