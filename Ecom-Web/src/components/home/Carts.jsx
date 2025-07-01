import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

import img1 from "../../assets/Casual-Shirts.png";
import img2 from "../../assets/HeadPhone.png";
import img3 from "../../assets/MensSlipper.png";
import img4 from "../../assets/Woman-Top.png";
import img5 from "../../assets/Casual-Jeans.png";
import img6 from "../../assets/Phones.png";
import img7 from "../../assets/Monitor.png";
import img8 from "../../assets/Smart-Watch.png";
import img9 from "../../assets/Women-Footwear.png";
import img10 from "../../assets/DryFruits.png";
import img11 from "../../assets/Wall-Clock.png";
import img12 from "../../assets/BadSheets.png";

function Carts() {
  const cartsData = [
    {
      img: img1,
      label: "Casual Shirt",
      price: "₹699",
      btn: "Shop Now",
      path: "/clothes",
    },
    {
      img: img2,
      label: "Wireless Headphones",
      price: "₹1,499",
      btn: "Shop Now",
      path: "/Headphone",
    },
    {
      img: img3,
      label: "Men's Slipper & Flip Flops",
      price: "₹299",
      btn: "Shop Now",
      path: "/MenFootwear",
    },
    {
      img: img4,
      label: "Tops For Women",
      price: "₹599",
      btn: "Shop Now",
      path: "/womens-tops",
    },
    {
      img: img5,
      label: "Casual Jeans",
      price: "₹999",
      btn: "Shop Now",
      path: "/jeans",
    },
    {
      img: img6,
      label: "Apple iPhone 16",
      price: "₹89,999",
      btn: "Shop Now",
      path: "/phones",
    },
    {
      img: img7,
      label: "ASUS ROG Strix",
      price: "₹1,29,999",
      btn: "Shop Now",
      path: "/monitors",
    },
    {
      img: img8,
      label: "Polar Pacer Pro",
      price: "₹24,999",
      btn: "Shop Now",
      path: "/smart-watches",
    },
    {
      img: img9,
      label: "Women's Flat Sandal",
      price: "₹499",
      btn: "Shop Now",
      path: "/womens-footwear",
    },
    {
      img: img10,
      label: "Dry Fruits & Nuts",
      price: "₹1,199",
      btn: "Shop Now",
      path: "/dry-fruits",
    },
    {
      img: img11,
      label: "Wall Clock",
      price: "₹799",
      btn: "Shop Now",
      path: "/home-decor",
    },
    {
      img: img12,
      label: "Bed Sheets",
      price: "₹1,099",
      btn: "Shop Now",
      path: "/bed-sheets",
    },
  ];

  return (
    <div className="container">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cartsData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-100 to-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-[220px] object-contain mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {item.label}
              </h2>
              <p className="text-base text-green-700 font-bold mb-1">
                {item.price}
              </p>

              <Link
                to={item.path}
                className="text-blue-600 hover:underline text-sm mb-4 inline-block"
              >
                Explore Now
              </Link>

              <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                {item.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carts;
