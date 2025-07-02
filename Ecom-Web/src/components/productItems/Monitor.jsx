import React from "react";

import img1 from "../../assets/Monitor/m-1.png";
import img2 from "../../assets/Monitor/m-2.png";
import img3 from "../../assets/Monitor/m-3.png";
import img4 from "../../assets/Monitor/m-4.png";
import img5 from "../../assets/Monitor/m-5.png";
import img6 from "../../assets/Monitor/m-6.png";
import img7 from "../../assets/Monitor/m-7.png";
import img8 from "../../assets/Monitor/m-8.png";
import img9 from "../../assets/Monitor/m-9.png";
import img10 from "../../assets/Monitor/m-10.png";
import img11 from "../../assets/Monitor/m-11.png";
import img12 from "../../assets/Monitor/m-12.png";
import img13 from "../../assets/Monitor/m-13.png";
import img14 from "../../assets/Monitor/m-14.png";
import img15 from "../../assets/Monitor/m-15.png";
import img16 from "../../assets/Monitor/m-16.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const monitorData = [
  {
    img: img1,
    label: "Dell 24-inch FHD Monitor",
    price: "₹8,999",
    description: "IPS panel with slim bezels and vibrant colors.",
  },
  {
    img: img2,
    label: "LG 27-inch 4K UHD Monitor",
    price: "₹22,499",
    description: "Stunning 4K resolution with HDR support.",
  },
  {
    img: img3,
    label: "Samsung Curved LED Monitor",
    price: "₹17,999",
    description: "Immersive curved screen with wide color gamut.",
  },
  {
    img: img4,
    label: "Acer Nitro Gaming Monitor",
    price: "₹19,499",
    description: "144Hz refresh rate perfect for gaming.",
  },
  {
    img: img5,
    label: "BenQ Eye-Care Monitor",
    price: "₹12,999",
    description: "TÜV certified for reduced eye strain.",
  },
  {
    img: img6,
    label: "HP 22-inch LED Monitor",
    price: "₹9,499",
    description: "Compact full HD monitor for work and study.",
  },
  {
    img: img7,
    label: "ViewSonic ColorPro Monitor",
    price: "₹26,999",
    description: "Color-accurate display for creators.",
  },
  {
    img: img8,
    label: "MSI Gaming Monitor",
    price: "₹18,999",
    description: "Curved 144Hz monitor with low response time.",
  },
  {
    img: img9,
    label: "Lenovo 24-inch IPS Monitor",
    price: "₹10,999",
    description: "Full HD display with wide viewing angles.",
  },
  {
    img: img10,
    label: "Zebronics Slim Monitor",
    price: "₹6,999",
    description: "Budget-friendly monitor with HDMI & VGA.",
  },
  {
    img: img11,
    label: "Asus ProArt Display",
    price: "₹23,499",
    description: "Factory-calibrated for professional editing.",
  },
  {
    img: img12,
    label: "AOC Frameless Monitor",
    price: "₹14,499",
    description: "Minimal bezels and high-quality display.",
  },
  {
    img: img13,
    label: "Philips Full HD Monitor",
    price: "₹11,799",
    description: "Built-in speakers and anti-glare screen.",
  },
  {
    img: img14,
    label: "Gigabyte Gaming Monitor",
    price: "₹20,499",
    description: "G-SYNC compatible with fast refresh rate.",
  },
  {
    img: img15,
    label: "TCL Ultra HD Monitor",
    price: "₹15,999",
    description: "Crisp 4K display with HDR for vivid visuals.",
  },
  {
    img: img16,
    label: "InnoView Portable Monitor",
    price: "₹13,999",
    description: "USB-C portable screen for multitasking.",
  },
];

function Monitor() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🖥️ Best-Selling Computer Monitors
        </h2>

        {/* Price Range Filter UI Only */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Under ₹10,000", "₹10,000 - ₹20,000", "Above ₹20,000"].map(
            (range, index) => (
              <button
                key={index}
                className="px-4 py-2 border rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-indigo-100 transition"
              >
                {range}
              </button>
            )
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {monitorData.map((item, index) => (
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

export default Monitor;
