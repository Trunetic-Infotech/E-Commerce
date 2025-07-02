import React from "react";

import img1 from "../../assets/WallWatches/wall-1.png";
import img2 from "../../assets/WallWatches/wall-2.png";
import img3 from "../../assets/WallWatches/wall-3.png";
import img4 from "../../assets/WallWatches/wall-4.png";
import img5 from "../../assets/WallWatches/wall-5.png";
import img6 from "../../assets/WallWatches/wall-6.png";
import img7 from "../../assets/WallWatches/wall-7.png";
import img8 from "../../assets/WallWatches/wall-8.png";
import img9 from "../../assets/WallWatches/wall-9.png";
import img10 from "../../assets/WallWatches/wall-10.png";
import img11 from "../../assets/WallWatches/wall-11.png";
import img12 from "../../assets/WallWatches/wall-12.png";
import img13 from "../../assets/WallWatches/wall-13.png";
import img14 from "../../assets/WallWatches/wall-14.png";
import img15 from "../../assets/WallWatches/wall-15.png";
import img16 from "../../assets/WallWatches/wall-16.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const wallClockData = [
  {
    img: img1,
    label: "Modern Minimalist Clock",
    price: "₹1,099",
    description: "Simple and sleek design for contemporary interiors.",
  },
  {
    img: img2,
    label: "Vintage Roman Wall Clock",
    price: "₹1,499",
    description: "Classic roman numeral dial with antique finish.",
  },
  {
    img: img3,
    label: "Silent Sweep Wooden Clock",
    price: "₹1,199",
    description: "Wooden frame with silent movement technology.",
  },
  {
    img: img4,
    label: "Metallic Gear Wall Clock",
    price: "₹2,499",
    description: "Industrial look with exposed gears and style.",
  },
  {
    img: img5,
    label: "Analog Decorative Clock",
    price: "₹899",
    description: "Perfect accent piece for any room setting.",
  },
  {
    img: img6,
    label: "Luxury Marble Wall Clock",
    price: "₹2,199",
    description: "Premium marble texture with golden hands.",
  },
  {
    img: img7,
    label: "Classic Wooden Pendulum Clock",
    price: "₹2,999",
    description: "Traditional design with moving pendulum.",
  },
  {
    img: img8,
    label: "Oversized Statement Clock",
    price: "₹3,499",
    description: "Large wall clock that becomes a focal point.",
  },
  {
    img: img9,
    label: "Rustic Farmhouse Clock",
    price: "₹1,299",
    description: "Rustic wooden look for cozy home decor.",
  },
  {
    img: img10,
    label: "Abstract Designer Clock",
    price: "₹2,599",
    description: "Unique artistic clock to elevate your space.",
  },
  {
    img: img11,
    label: "Silent Office Wall Clock",
    price: "₹749",
    description: "Minimalist and quiet—ideal for office or study.",
  },
  {
    img: img12,
    label: "Glow in the Dark Clock",
    price: "₹999",
    description: "Numbers glow at night for easy viewing.",
  },
  {
    img: img13,
    label: "Metal Frame Retro Clock",
    price: "₹1,599",
    description: "Vintage metal frame with bold white dial.",
  },
  {
    img: img14,
    label: "3D DIY Wall Clock",
    price: "₹849",
    description: "Creative do-it-yourself modern 3D clock kit.",
  },
  {
    img: img15,
    label: "Glass Face Decorative Clock",
    price: "₹1,899",
    description: "Elegant glass finish with high visibility.",
  },
  {
    img: img16,
    label: "Luxury Designer Wall Clock",
    price: "₹3,299",
    description: "Designer luxury piece with exclusive detailing.",
  },
];

function WallWatches() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🕰️ Stylish Wall Clocks Collection
        </h2>

        {/* Price Range Filter UI Only */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Under ₹1,000", "₹1,000 - ₹2,000", "Above ₹2,000"].map(
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
          {wallClockData.map((item, index) => (
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

export default WallWatches;
