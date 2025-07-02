import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Shopnnow() {
  const location = useLocation();
  const product = location.state?.product;

  const colorOptions = [
    { id: 1, color: "#7f1d1d" },
    { id: 2, color: "#1e3a8a" },
    { id: 3, color: "#047857" },
    { id: 4, color: "#f59e0b" },
    { id: 5, color: "#000000" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-10 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Product Image */}
            <div className="bg-gray-100 p-6 rounded-xl flex items-center justify-center">
              <img
                src={product?.img}
                alt={product?.label}
                className="max-h-[450px] w-auto object-contain"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product?.label}
              </h1>
              <p className="text-xl font-semibold text-green-700 mb-1">
                {product?.price}
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                This premium formal shirt is designed for comfort and style.
                Crafted from breathable cotton fabric, it offers all-day
                freshness and ease. The regular fit and button-down collar
                ensure a classic yet modern look. Perfect for office, meetings,
                or casual events. Available in a variety of bold and subtle
                colors. Easily pairs with both jeans and trousers. A must-have
                staple in any gentleman's wardrobe.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="text-gray-300 text-lg">⭐</span>
                <span className="ml-2 text-sm text-gray-600">
                  (3,000+ ratings)
                </span>
              </div>

              {/* Color Selector */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Color</h3>
                <div className="flex gap-3">
                  {colorOptions.map((color) => (
                    <div
                      key={color.id}
                      className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-indigo-500"
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Size</h3>
                <div className="flex gap-3 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border rounded-lg text-sm hover:bg-indigo-100 transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mb-6">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold shadow">
                  ADD TO CART
                </button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold shadow">
                  BUY NOW
                </button>
              </div>

              {/* Offers */}
              <div className="border-t pt-4 space-y-2 text-sm text-gray-700">
                <p>
                  <span className="text-green-600 font-medium">
                    Special Price
                  </span>
                  Get extra 20% off upto ₹30 on 20 item(s)
                </p>
                <p>
                  <span className="text-green-600 font-medium">Bank Offer</span>{" "}
                  5% cashback on Flipkart Axis Bank Credit Card
                </p>
                <p>
                  <span className="text-green-600 font-medium">Bank Offer</span>{" "}
                  10% off up to ₹1,500 on BOB Card EMI Transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shopnnow;
