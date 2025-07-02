import React from "react";

import img1 from "../../assets/Casual-Shirts.png";
import img2 from "../../assets/Shirts/shirt-01.png";
import img3 from "../../assets/Shirts/shirt-02.png";
import img4 from "../../assets/Shirts/shirt-03.png";
import img5 from "../../assets/Shirts/shirt-04.png";
import img6 from "../../assets/Shirts/shirt-05.png";
import img7 from "../../assets/Shirts/shirt-06.png";
import img8 from "../../assets/Shirts/shirt-07.png";
import img9 from "../../assets/Shirts/shirt-08.png";
import img10 from "../../assets/Shirts/shirt-09.png";
import img11 from "../../assets/Shirts/shirt-10.png";
import img12 from "../../assets/Shirts/shirt-11.png";
import img13 from "../../assets/Shirts/shirt-12.png";
import img14 from "../../assets/Shirts/shirt-13.png";
import img15 from "../../assets/Shirts/shirt-14.png";
import img16 from "../../assets/Shirts/shirt-15.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Carts() {
  const cartsData = [
    {
      img: img1,
      label: "Cotton Blend Shirt",
      price: "₹849",
      description: "Lightweight cotton-blend shirt for effortless comfort.",
    },
    {
      img: img2,
      label: "Slim Fit Check Shirt",
      price: "₹999",
      description: "Stylish checks with a sharp slim fit for daily style.",
    },
    {
      img: img3,
      label: "Printed Full Sleeve Shirt",
      price: "₹1,199",
      description: "Vibrant full-sleeve shirt with bold modern prints.",
    },
    {
      img: img4,
      label: "Denim Washed Shirt",
      price: "₹1,399",
      description: "Faded denim shirt perfect for rugged urban style.",
    },
    {
      img: img5,
      label: "Striped Casual Shirt",
      price: "₹1,099",
      description: "Casual shirt with vertical stripes for a sleek fit.",
    },
    {
      img: img6,
      label: "Solid Formal Shirt",
      price: "₹949",
      description: "Crisp solid color ideal for office & formal events.",
    },
    {
      img: img7,
      label: "Classic Oxford Shirt",
      price: "₹1,299",
      description: "Oxford weave shirt offering durability and class.",
    },
    {
      img: img8,
      label: "Linen Summer Shirt",
      price: "₹1,599",
      description: "Breathable linen fabric for summer-ready wear.",
    },
    {
      img: img9,
      label: "Half Sleeve Polo Shirt",
      price: "₹799",
      description: "Comfortable polo shirt with a timeless design.",
    },
    {
      img: img10,
      label: "Designer Casual Shirt",
      price: "₹1,799",
      description: "Stand out in this unique designer statement piece.",
    },
    {
      img: img11,
      label: "Mandarin Collar Shirt",
      price: "₹1,049",
      description: "Minimalistic shirt with a trendy Mandarin collar.",
    },
    {
      img: img12,
      label: "Flannel Winter Shirt",
      price: "₹1,649",
      description: "Thick flannel material to keep you warm and stylish.",
    },
    {
      img: img13,
      label: "Urban Plaid Shirt",
      price: "₹1,449",
      description: "Classic plaid design with a modern city vibe.",
    },
    {
      img: img14,
      label: "Tropical Print Shirt",
      price: "₹1,199",
      description: "Bright tropical patterns perfect for vacation days.",
    },
    {
      img: img15,
      label: "Dual-Tone Party Shirt",
      price: "₹1,599",
      description: "Two-toned modern shirt made for night outs.",
    },
    {
      img: img16,
      label: "Heritage Khadi Shirt",
      price: "₹1,349",
      description: "Eco-friendly khadi fabric with ethnic elegance.",
    },
  ];

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          👕 Trending Shirts Collection
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cartsData.map((item, index) => (
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

export default Carts;
