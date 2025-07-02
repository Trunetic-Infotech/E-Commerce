import React from "react";

import img1 from "../../assets/BedSheets/bad-1.png";
import img2 from "../../assets/BedSheets/bad-2.png";
import img3 from "../../assets/BedSheets/bad-3.png";
import img4 from "../../assets/BedSheets/bad-4.png";
import img5 from "../../assets/BedSheets/bad-5.png";
import img6 from "../../assets/BedSheets/bad-6.png";
import img7 from "../../assets/BedSheets/bad-7.png";
import img8 from "../../assets/BedSheets/bad-8.png";
import img9 from "../../assets/BedSheets/bad-9.png";
import img10 from "../../assets/BedSheets/bad-10.png";
import img11 from "../../assets/BedSheets/bad-11.png";
import img12 from "../../assets/BedSheets/bad-12.png";
import img13 from "../../assets/BedSheets/bad-13.png";
import img14 from "../../assets/BedSheets/bad-14.png";
import img15 from "../../assets/BedSheets/bad-15.png";
import img16 from "../../assets/BedSheets/bad-16.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const bedSheetData = [
  {
    img: img1,
    label: "Floral Cotton Bed Sheet",
    price: "₹899",
    description: "Soft and breathable cotton with elegant floral prints.",
  },
  {
    img: img2,
    label: "Geometric Print King Size",
    price: "₹1,299",
    description: "Modern patterns in fade-resistant fabric.",
  },
  {
    img: img3,
    label: "Striped Double Bed Sheet",
    price: "₹1,099",
    description: "Classic stripes with 2 pillow covers included.",
  },
  {
    img: img4,
    label: "Abstract Microfiber Sheet",
    price: "₹749",
    description: "Quick-dry microfiber ideal for daily use.",
  },
  {
    img: img5,
    label: "Traditional Jaipuri Print",
    price: "₹1,399",
    description: "Authentic Jaipuri style with vibrant colors.",
  },
  {
    img: img6,
    label: "Silk Touch Bed Sheet Set",
    price: "₹1,799",
    description: "Luxury silk-like feel for a premium look.",
  },
  {
    img: img7,
    label: "Kids Cartoon Bed Sheet",
    price: "₹599",
    description: "Fun and playful designs for children's room.",
  },
  {
    img: img8,
    label: "Pastel Plain Bed Sheet",
    price: "₹699",
    description: "Simple pastel hues to match minimal decor.",
  },
  {
    img: img9,
    label: "Reversible Printed Sheet",
    price: "₹1,099",
    description: "Two-in-one design with reversible patterns.",
  },
  {
    img: img10,
    label: "Luxury Satin Finish Sheet",
    price: "₹1,999",
    description: "Silky smooth texture for ultimate comfort.",
  },
  {
    img: img11,
    label: "Polka Dot Double Bed Sheet",
    price: "₹849",
    description: "Charming polka dot pattern for everyday style.",
  },
  {
    img: img12,
    label: "Fitted Bed Sheet with Elastic",
    price: "₹1,199",
    description: "Snug fit for mattresses up to 10 inches deep.",
  },
  {
    img: img13,
    label: "Tropical Leaf Printed Sheet",
    price: "₹1,299",
    description: "Lively leaf design brings a fresh vibe.",
  },
  {
    img: img14,
    label: "Checked Cotton Blend Sheet",
    price: "₹899",
    description: "Comfortable blend fabric with checkered pattern.",
  },
  {
    img: img15,
    label: "Luxury Jacquard Bed Sheet",
    price: "₹2,499",
    description: "Opulent jacquard weaving for a royal touch.",
  },
  {
    img: img16,
    label: "Ethnic Mandala Print Sheet",
    price: "₹999",
    description: "Mandala patterns with boho-inspired aesthetics.",
  },
];

function BedSheets() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🛏️ Comfortable & Stylish Bed Sheets Collection
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
          {bedSheetData.map((item, index) => (
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

export default BedSheets;

// w-full bg-indigo-600 text-white font-medium py-2 rounded-full hover:bg-indigo-700 transition
