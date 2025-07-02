import React from "react";

import img1 from "../../assets/DryFruits/DryFruits-1.png";
import img2 from "../../assets/DryFruits/DryFruits-2.png";
import img3 from "../../assets/DryFruits/DryFruits-3.png";
import img4 from "../../assets/DryFruits/DryFruits-4.png";
import img5 from "../../assets/DryFruits/DryFruits-5.png";
import img6 from "../../assets/DryFruits/DryFruits-6.png";
import img7 from "../../assets/DryFruits/DryFruits-7.png";
import img8 from "../../assets/DryFruits/DryFruits-8.png";
import img9 from "../../assets/DryFruits/DryFruits-9.png";
import img10 from "../../assets/DryFruits/DryFruits-10.png";
import img11 from "../../assets/DryFruits/DryFruits-11.png";
import img12 from "../../assets/DryFruits/DryFruits-12.png";
import img13 from "../../assets/DryFruits/DryFruits-13.png";
import img14 from "../../assets/DryFruits/DryFruits-14.png";
import img15 from "../../assets/DryFruits/DryFruits-15.png";
import img16 from "../../assets/DryFruits/DryFruits-16.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const dryFruitData = [
  {
    img: img1,
    label: "Premium Almonds 500g",
    price: "₹499",
    description: "High-quality California almonds, rich in nutrients.",
  },
  {
    img: img2,
    label: "Kashmiri Walnuts 250g",
    price: "₹399",
    description: "Naturally sourced walnuts with brain-boosting benefits.",
  },
  {
    img: img3,
    label: "Afghan Anjeer (Figs) 250g",
    price: "₹449",
    description: "Dried figs packed with fiber and antioxidants.",
  },
  {
    img: img4,
    label: "Salted Pistachios 250g",
    price: "₹549",
    description: "Lightly salted and roasted for crunchy goodness.",
  },
  {
    img: img5,
    label: "Cashew Nuts W320 500g",
    price: "₹599",
    description: "Creamy cashews perfect for snacking or cooking.",
  },
  {
    img: img6,
    label: "Black Raisins 500g",
    price: "₹299",
    description: "Naturally sweet and rich in iron.",
  },
  {
    img: img7,
    label: "Dry Dates (Chuara) 500g",
    price: "₹249",
    description: "Boosts energy and improves digestion.",
  },
  {
    img: img8,
    label: "Brazil Nuts 250g",
    price: "₹799",
    description: "Rich in selenium, great for heart and thyroid.",
  },
  {
    img: img9,
    label: "Hazelnuts 250g",
    price: "₹699",
    description: "Nutty flavor, perfect for baking and snacking.",
  },
  {
    img: img10,
    label: "Chilgoza (Pine Nuts) 100g",
    price: "₹999",
    description: "Luxury nuts with rich flavor and healthy fats.",
  },
  {
    img: img11,
    label: "Golden Raisins 500g",
    price: "₹349",
    description: "Juicy golden raisins rich in natural sugar.",
  },
  {
    img: img12,
    label: "Dried Cranberries 200g",
    price: "₹299",
    description: "Tangy-sweet berries rich in antioxidants.",
  },
  {
    img: img13,
    label: "Dried Blueberries 150g",
    price: "₹399",
    description: "Delicious and healthy snack loaded with fiber.",
  },
  {
    img: img14,
    label: "Mix Dry Fruits 500g",
    price: "₹649",
    description: "Nutritious combo of almonds, cashews, and raisins.",
  },
  {
    img: img15,
    label: "Seedless Black Dates 500g",
    price: "₹299",
    description: "Soft, chewy, and rich in iron.",
  },
  {
    img: img16,
    label: "Dried Apricots 250g",
    price: "₹349",
    description: "Sun-dried apricots, rich in vitamin A and fiber.",
  },
];

function DryFruits() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          🥜 Premium Dry Fruits Selection
        </h2>

        {/* Price Range Filter UI Only */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Under ₹300", "₹300 - ₹600", "Above ₹600"].map(
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
          {dryFruitData.map((item, index) => (
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

export default DryFruits;
