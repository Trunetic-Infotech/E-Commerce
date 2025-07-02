import React, { useState } from "react";

import img1 from "../../assets/MenFootwear/footwear-1.png";
import img2 from "../../assets/MenFootwear/footwear-2.png";
import img3 from "../../assets/MenFootwear/footwear-3.png";
import img4 from "../../assets/MenFootwear/footwear-4.png";
import img5 from "../../assets/MenFootwear/footwear-5.png";
import img6 from "../../assets/MenFootwear/footwear-6.png";
import img7 from "../../assets/MenFootwear/footwear-7.png";
import img8 from "../../assets/MenFootwear/footwear-8.png";
import img9 from "../../assets/MenFootwear/footwear-9.png";
import img10 from "../../assets/MenFootwear/footwear-10.png";
import img11 from "../../assets/MenFootwear/footwear-11.png";
import img12 from "../../assets/MenFootwear/footwear-12.png";
import img13 from "../../assets/MenFootwear/footwear-13.png";
import img14 from "../../assets/MenFootwear/footwear-14.png";
import img15 from "../../assets/MenFootwear/footwear-15.png";
import img16 from "../../assets/MenFootwear/footwear-16.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const footwearData = [
  {
    img: img1,
    label: "Nike Air Max Alpha Trainers",
    price: "₹4,299",
    description: "Comfort-focused training shoes with excellent grip.",
    sizes: ["7", "8", "9", "10"],
  },
  {
    img: img2,
    label: "Adidas Lite Racer Sneakers",
    price: "₹3,799",
    description: "Lightweight sneakers with breathable mesh upper.",
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    img: img3,
    label: "Puma Smash V2 Low Tops",
    price: "₹3,299",
    description: "Classic casual shoes for daily wear.",
    sizes: ["6", "7", "8"],
  },
  {
    img: img4,
    label: "Bata Men’s Formal Slip-On",
    price: "₹1,999",
    description: "Elegant slip-on loafers for office & events.",
    sizes: ["7", "8", "9", "10"],
  },
  {
    img: img5,
    label: "Woodland Outdoor Leather Boots",
    price: "₹5,499",
    description: "Rugged leather boots for trekking and travel.",
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    img: img6,
    label: "Sparx Casual Sports Shoes",
    price: "₹1,299",
    description: "Affordable and sturdy daily wear shoes.",
    sizes: ["7", "8", "9"],
  },
  {
    img: img7,
    label: "Red Tape Running Shoes",
    price: "₹2,499",
    description: "Cushioned sole with breathable fabric upper.",
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    img: img8,
    label: "Campus Rodeo Sneakers",
    price: "₹1,799",
    description: "Stylish sneakers with anti-slip sole design.",
    sizes: ["6", "7", "8", "9"],
  },
  {
    img: img9,
    label: "Lee Cooper Leather Loafers",
    price: "₹2,199",
    description: "Polished finish ideal for formal occasions.",
    sizes: ["7", "8", "9", "10"],
  },
  {
    img: img10,
    label: "Relaxo Bahamas Flip Flops",
    price: "₹499",
    description: "Water-friendly flip flops for casual comfort.",
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    img: img11,
    label: "HRX Trainers by Hrithik Roshan",
    price: "₹2,899",
    description: "Performance shoes for gym & running.",
    sizes: ["6", "7", "8", "9"],
  },
  {
    img: img12,
    label: "US Polo Assn. Lace-Up Shoes",
    price: "₹3,199",
    description: "Heritage style shoes for smart-casual looks.",
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    img: img13,
    label: "Reebok Classic Leather",
    price: "₹4,499",
    description: "Timeless white leather shoes with retro vibe.",
    sizes: ["7", "8", "9", "10"],
  },
  {
    img: img14,
    label: "Nike Benassi Men’s Slides",
    price: "₹1,299",
    description: "Quick-dry comfort slides for pool & beach.",
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    img: img15,
    label: "Crocs Men’s Clogs",
    price: "₹2,599",
    description: "Ventilated comfort clogs perfect for all-day wear.",
    sizes: ["6", "7", "8", "9"],
  },
  {
    img: img16,
    label: "Campus Oxyfit Sports Shoes",
    price: "₹1,599",
    description: "Flexible, lightweight shoes for active lifestyle.",
    sizes: ["6", "7", "8", "9"],
  },
];

function MenFootwear() {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (index, value) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          👟 Stylish & Durable Men's Footwear
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {footwearData.map((item, index) => (
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
              <p className="text-md text-green-700 font-bold mb-2">
                {item.price}
              </p>

              {/* Size Dropdown */}
              <div className="mb-4">
                <label className="text-sm text-gray-700 font-medium mr-2">
                  Select Size:
                </label>
                <select
                  className="px-2 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={selectedSizes[index] || ""}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                >
                  <option value="">Select Size</option>
                  {item.sizes.map((size, i) => (
                    <option key={i} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

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

export default MenFootwear;
