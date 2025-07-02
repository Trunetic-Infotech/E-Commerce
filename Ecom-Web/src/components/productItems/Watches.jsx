import React from "react";

import img1 from "../../assets/Watches/w-1.png";
import img2 from "../../assets/Watches/w-2.png";
import img3 from "../../assets/Watches/w-3.png";
import img4 from "../../assets/Watches/w-4.png";
import img5 from "../../assets/Watches/w-5.png";
import img6 from "../../assets/Watches/w-6.png";
import img7 from "../../assets/Watches/w-7.png";
import img8 from "../../assets/Watches/w-8.png";
import img9 from "../../assets/Watches/w-9.png";
import img10 from "../../assets/Watches/w-10.png";
import img11 from "../../assets/Watches/w-11.png";
import img12 from "../../assets/Watches/w-12.png";
import img13 from "../../assets/Watches/w-13.png";
import img14 from "../../assets/Watches/w-14.png";
import img15 from "../../assets/Watches/w-15.png";
import img16 from "../../assets/Watches/w-16.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const watchData = [
  {
    img: img1,
    label: "Fossil Gen 5 Smartwatch",
    price: "₹14,999",
    description: "Stylish and powerful smartwatch with Google Wear OS.",
  },
  {
    img: img2,
    label: "Titan Neo Analog Watch",
    price: "₹2,499",
    description: "Classic analog design with water-resistant build.",
  },
  {
    img: img3,
    label: "Fire-Boltt Ninja Call Pro",
    price: "₹1,999",
    description: "Bluetooth calling smartwatch with fitness tracking.",
  },
  {
    img: img4,
    label: "Boat Wave Lite",
    price: "₹1,299",
    description: "Affordable smartwatch with heart rate monitoring.",
  },
  {
    img: img5,
    label: "Casio G-Shock Digital",
    price: "₹6,999",
    description: "Shock-resistant digital watch for active lifestyle.",
  },
  {
    img: img6,
    label: "Samsung Galaxy Watch 6",
    price: "₹18,999",
    description: "AMOLED display and advanced health features.",
  },
  {
    img: img7,
    label: "Noise ColorFit Pro 4",
    price: "₹2,799",
    description: "Vibrant display with multiple sports modes.",
  },
  {
    img: img8,
    label: "Timex Expedition Chronograph",
    price: "₹4,999",
    description: "Rugged chronograph design for adventure lovers.",
  },
  {
    img: img9,
    label: "Fire-Boltt Invincible Plus",
    price: "₹3,299",
    description: "Voice assistant, calling, and AMOLED screen.",
  },
  {
    img: img10,
    label: "Apple Watch SE 2nd Gen",
    price: "₹29,999",
    description: "Feature-packed with crash detection and fitness app.",
  },
  {
    img: img11,
    label: "Fastrack Reflex Beat",
    price: "₹1,499",
    description: "Slim fitness band with stylish look.",
  },
  {
    img: img12,
    label: "Garmin Venu Sq 2",
    price: "₹21,499",
    description: "GPS-enabled fitness tracking and AMOLED display.",
  },
  {
    img: img13,
    label: "Sonata Super Fibre",
    price: "₹899",
    description: "Durable and affordable everyday watch.",
  },
  {
    img: img14,
    label: "Honor Choice Smartwatch",
    price: "₹3,499",
    description: "Long battery life and customizable watch faces.",
  },
  {
    img: img15,
    label: "Amazfit GTS 4 Mini",
    price: "₹6,499",
    description: "Lightweight build and smart health monitoring.",
  },
  {
    img: img16,
    label: "NoiseFit Halo",
    price: "₹3,199",
    description: 'Premium finish with 1.43" AMOLED display.',
  },
];

function Watches() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          ⌚ Trending Smart & Analog Watches
        </h2>

        {/* Price Range Filter UI Only */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Under ₹2,000", "₹2,000 - ₹10,000", "Above ₹10,000"].map(
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
          {watchData.map((item, index) => (
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

export default Watches;
