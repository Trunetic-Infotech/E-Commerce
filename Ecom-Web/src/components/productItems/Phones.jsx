import React from "react";

import img1 from "../../assets/Phones/phone-1.png";
import img2 from "../../assets/Phones/phone-2.png";
import img3 from "../../assets/Phones/phone-3.png";
import img4 from "../../assets/Phones/phone-4.png";
import img5 from "../../assets/Phones/phone-5.png";
import img6 from "../../assets/Phones/phone-6.png";
import img7 from "../../assets/Phones/phone-7.png";
import img8 from "../../assets/Phones/phone-8.png";
import img9 from "../../assets/Phones/phone-9.png";
import img10 from "../../assets/Phones/phone-10.png";
import img11 from "../../assets/Phones/phone-11.png";
import img12 from "../../assets/Phones/phone-12.png";
import img13 from "../../assets/Phones/phone-13.png";
import img14 from "../../assets/Phones/phone-14.png";
import img15 from "../../assets/Phones/phone-15.png";
import img16 from "../../assets/Phones/phone-16.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const phonesData = [
  {
    img: img1,
    label: "Samsung Galaxy A14",
    price: "₹13,999",
    description: "Affordable smartphone with AMOLED display.",
  },
  {
    img: img2,
    label: "Redmi Note 13 Pro",
    price: "₹17,999",
    description: "Powerful performance and long battery life.",
  },
  {
    img: img3,
    label: "Realme Narzo 60X",
    price: "₹12,499",
    description: "High-speed charging with stunning visuals.",
  },
  {
    img: img4,
    label: "iQOO Z9 5G",
    price: "₹19,999",
    description: "Blazing-fast 5G and gaming-ready processor.",
  },
  {
    img: img5,
    label: "Samsung Galaxy S21 FE",
    price: "₹32,999",
    description: "Flagship experience at a mid-range price.",
  },
  {
    img: img6,
    label: "iPhone 13",
    price: "₹58,999",
    description: "Apple's smooth and reliable experience.",
  },
  {
    img: img7,
    label: "Motorola Edge 40",
    price: "₹24,999",
    description: "Ultra-slim design with OLED display.",
  },
  {
    img: img8,
    label: "Nothing Phone 2a",
    price: "₹23,999",
    description: "Unique transparent design with solid specs.",
  },
  {
    img: img9,
    label: "POCO X6 Pro",
    price: "₹26,999",
    description: "Fast charging, AMOLED display, powerful chip.",
  },
  {
    img: img10,
    label: "OnePlus Nord CE4",
    price: "₹24,499",
    description: "Clean UI and fast OxygenOS experience.",
  },
  {
    img: img11,
    label: "Vivo V27 Pro",
    price: "₹38,999",
    description: "Premium camera setup and sleek build.",
  },
  {
    img: img12,
    label: "Infinix Zero 5G",
    price: "₹14,499",
    description: "Affordable 5G smartphone with clean UI.",
  },
  {
    img: img13,
    label: "Lava Agni 2",
    price: "₹10,999",
    description: "Made-in-India phone with competitive specs.",
  },
  {
    img: img14,
    label: "Micromax IN Note 2",
    price: "₹9,999",
    description: "Indian brand offering value for money.",
  },
  {
    img: img15,
    label: "iPhone 15 Pro Max",
    price: "₹1,39,900",
    description: "Top-tier flagship with unbeatable performance.",
  },
  {
    img: img16,
    label: "Google Pixel 8",
    price: "₹75,999",
    description: "Best-in-class camera with pure Android.",
  },
];

function Phones() {
  return (
    <>
      
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          📱 Latest Smartphone Deals
        </h2>

        {/* Price Filter UI Only */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="px-4 py-2 rounded-full text-sm font-medium border bg-indigo-600 text-white">
            All
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100">
            Below ₹15,000
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100">
            ₹15,000 - ₹30,000
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-100">
            Above ₹30,000
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {phonesData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-5 transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 border"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-[220px] object-contain mb-4 rounded-xl"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-md text-green-700 font-bold mb-4">
                {item.price}
              </p>
              <Link
                to="/Shopnow"
                state={{
                  product: {
                    img: item.img,
                    label: item.label,
                    price: item.price,
                  },
                }}
                className="inline-block w-full text-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition duration-300 shadow-md"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Phones;
