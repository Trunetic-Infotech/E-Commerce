import React, { useState } from "react";

import img1 from "../../assets/headphone-1.png";
import img2 from "../../assets/headphone-2.png";
import img3 from "../../assets/headphone-3.png";
import img4 from "../../assets/headphone-4.png";
import img5 from "../../assets/headphone-5.png";
import img6 from "../../assets/headphone-6.png";
import img7 from "../../assets/headphone-7.png";
import img8 from "../../assets/headphone-8.png";
import img9 from "../../assets/headphone-9.png";
import img10 from "../../assets/headphone-10.png";
import img11 from "../../assets/headphone-11.png";
import img12 from "../../assets/headphone-12.png";
import img13 from "../../assets/headphone-13.png";
import img14 from "../../assets/headphone-14.png";
import img15 from "../../assets/headphone-15.png";
import img16 from "../../assets/headphone-16.png";

function Headphone() {
  const [priceFilter, setPriceFilter] = useState("");

  const cartsData = [
    {
      img: img1,
      label: "Boult Z60 with 60Hr Battery",
      price: "₹1299",
      description: "Immersive audio with long-lasting 60-hour battery life.",
    },
    {
      img: img2,
      label: "boAt Rockerz 109 with Dual Pairing",
      price: "₹1399",
      description: "Dual Bluetooth pairing & deep bass for music lovers.",
    },
    {
      img: img3,
      label: "boAt Airdopes 161/163",
      price: "₹1699",
      description:
        "TWS earbuds with Insta Wake-N-Pair and Type-C fast charging.",
    },
    {
      img: img4,
      label: "HOPPUP Predator Xo1 Earbuds",
      price: "₹1249",
      description: "Compact gaming earbuds with ultra-low latency and ENC.",
    },
    {
      img: img5,
      label: "Boult Astra with Quad Mic ENC",
      price: "₹1599",
      description:
        "Advanced Quad Mic ENC for crystal clear calling experience.",
    },
    {
      img: img6,
      label: "P47 Wireless Gaming Headset",
      price: "₹849",
      description: "Ergonomic wireless headphones with stereo surround sound.",
    },
    {
      img: img7,
      label: "realme Buds T200 Lite",
      price: "₹1799",
      description:
        "Dynamic bass boost, ultra-lightweight & long battery backup.",
    },
    {
      img: img8,
      label: "Boult Astra ENC Edition",
      price: "₹1649",
      description: "Noise-cancelling earbuds with rich bass and ergonomic fit.",
    },
    {
      img: img9,
      label: "FRONY Wireless Gaming Headphones",
      price: "₹1099",
      description: "Over-ear wireless headphones optimized for gaming audio.",
    },
    {
      img: img10,
      label: "FRONY WI-981 P47 Headset",
      price: "₹1349",
      description: "Portable & foldable design with enhanced bass response.",
    },
    {
      img: img11,
      label: "Ziddjeet X288 ARU-1132 ENC",
      price: "₹1499",
      description: "Premium ENC headphones with dual-mic setup for clarity.",
    },
    {
      img: img12,
      label: "FRONY Sports Wireless Headphones",
      price: "₹1299",
      description: "Sporty design with sweat resistance and HD sound output.",
    },
    {
      img: img13,
      label: "FRONY X-Bass Gaming Headphones",
      price: "₹1499",
      description: "High-performance headset with X-Bass for gamers.",
    },
    {
      img: img14,
      label: "Aroma NB121 – 40H Playtime",
      price: "₹1199",
      description: "Enjoy 40 hours of playback with ergonomic earbuds.",
    },
    {
      img: img15,
      label: "Boult Mustang Torq 50H",
      price: "₹1699",
      description: "Bluetooth 5.3 with 50-hour battery and quick charging.",
    },
    {
      img: img16,
      label: "HOPPUP Xo6 Gaming Earbuds",
      price: "₹1599",
      description: "Lag-free gaming earbuds with RGB lights and ENC mic.",
    },
  ];

  // Filtering logic
  const filteredCarts = cartsData.filter((item) => {
    const numericPrice = parseInt(item.price.replace("₹", ""));
    if (priceFilter === "<1000") return numericPrice < 1000;
    if (priceFilter === "1000-1500")
      return numericPrice >= 1000 && numericPrice <= 1500;
    if (priceFilter === ">1500") return numericPrice > 1500;
    return true;
  });

  return (
    <div className="container px-4 py-10 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🎧 Top Trending Headphones & Earbuds
      </h2>

      {/* Price Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {[
          { label: "All", value: "" },
          { label: "< ₹1000", value: "<1000" },
          { label: "₹1000 - ₹1500", value: "1000-1500" },
          { label: "> ₹1500", value: ">1500" },
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => setPriceFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              priceFilter === filter.value
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCarts.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 rounded-3xl shadow-md p-5 hover:shadow-xl transition duration-300 border border-indigo-200"
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
            <button className="w-full bg-indigo-600 text-white font-medium py-2 rounded-full hover:bg-indigo-700 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Headphone;
