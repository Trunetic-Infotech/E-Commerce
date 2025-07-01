import React, { useState } from "react";

import img1 from "../../assets/Casual-Shirts.png";
import img2 from "../../assets/shirt-01.png";
import img3 from "../../assets/shirt-02.png";
import img4 from "../../assets/shirt-03.png";
import img5 from "../../assets/shirt-04.png";
import img6 from "../../assets/shirt-05.png";
import img7 from "../../assets/shirt-06.png";
import img8 from "../../assets/shirt-07.png";
import img9 from "../../assets/shirt-08.png";
import img10 from "../../assets/shirt-09.png";
import img11 from "../../assets/shirt-10.png";
import img12 from "../../assets/shirt-11.png";
import img13 from "../../assets/shirt-12.png";
import img14 from "../../assets/shirt-13.png";
import img15 from "../../assets/shirt-14.png";
import img16 from "../../assets/shirt-15.png";

function Carts() {
  const cartsData = [
    {
      img: img1,
      label: "Cotton Blend Shirt",
      price: "₹849",
      sizes: ["S", "M", "L", "XL"],
      description: "Lightweight cotton-blend shirt for effortless comfort.",
    },
    {
      img: img2,
      label: "Slim Fit Check Shirt",
      price: "₹999",
      sizes: ["M", "L", "XL"],
      description: "Stylish checks with a sharp slim fit for daily style.",
    },
    {
      img: img3,
      label: "Printed Full Sleeve Shirt",
      price: "₹1,199",
      sizes: ["S", "M", "L"],
      description: "Vibrant full-sleeve shirt with bold modern prints.",
    },
    {
      img: img4,
      label: "Denim Washed Shirt",
      price: "₹1,399",
      sizes: ["L", "XL"],
      description: "Faded denim shirt perfect for rugged urban style.",
    },
    {
      img: img5,
      label: "Striped Casual Shirt",
      price: "₹1,099",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Casual shirt with vertical stripes for a sleek fit.",
    },
    {
      img: img6,
      label: "Solid Formal Shirt",
      price: "₹949",
      sizes: ["M", "L", "XL"],
      description: "Crisp solid color ideal for office & formal events.",
    },
    {
      img: img7,
      label: "Classic Oxford Shirt",
      price: "₹1,299",
      sizes: ["S", "M", "L", "XL"],
      description: "Oxford weave shirt offering durability and class.",
    },
    {
      img: img8,
      label: "Linen Summer Shirt",
      price: "₹1,599",
      sizes: ["M", "L"],
      description: "Breathable linen fabric for summer-ready wear.",
    },
    {
      img: img9,
      label: "Half Sleeve Polo Shirt",
      price: "₹799",
      sizes: ["S", "M", "L", "XL"],
      description: "Comfortable polo shirt with a timeless design.",
    },
    {
      img: img10,
      label: "Designer Casual Shirt",
      price: "₹1,799",
      sizes: ["M", "L", "XL", "XXL"],
      description: "Stand out in this unique designer statement piece.",
    },
    {
      img: img11,
      label: "Mandarin Collar Shirt",
      price: "₹1,049",
      sizes: ["S", "M", "L"],
      description: "Minimalistic shirt with a trendy Mandarin collar.",
    },
    {
      img: img12,
      label: "Flannel Winter Shirt",
      price: "₹1,649",
      sizes: ["L", "XL", "XXL"],
      description: "Thick flannel material to keep you warm and stylish.",
    },
    {
      img: img13,
      label: "Urban Plaid Shirt",
      price: "₹1,449",
      sizes: ["L", "XL", "XXL"],
      description: "Classic plaid design with a modern city vibe.",
    },
    {
      img: img14,
      label: "Tropical Print Shirt",
      price: "₹1,199",
      sizes: ["M", "L", "XL"],
      description: "Bright tropical patterns perfect for vacation days.",
    },
    {
      img: img15,
      label: "Dual-Tone Party Shirt",
      price: "₹1,599",
      sizes: ["L", "XL", "XXL"],
      description: "Two-toned modern shirt made for night outs.",
    },
    {
      img: img16,
      label: "Heritage Khadi Shirt",
      price: "₹1,349",
      sizes: ["L", "XL", "XXL"],
      description: "Eco-friendly khadi fabric with ethnic elegance.",
    },
  ];

  const [selectedSize, setSelectedSize] = useState("");

  const filteredCarts = selectedSize
    ? cartsData.filter((item) => item.sizes.includes(selectedSize))
    : cartsData;

  return (
    <div className="container px-4 py-10 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        👕 Trending Shirts Collection
      </h2>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {["", "S", "M", "L", "XL", "XXL"].map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selectedSize === size
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {size === "" ? "All Sizes" : size}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredCarts.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 rounded-3xl shadow-lg p-5 hover:shadow-xl transition duration-300 border border-indigo-200"
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
            <p className="text-md text-green-700 font-bold mb-1">
              {item.price}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              Sizes: {item.sizes.join(", ")}
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

export default Carts;
