import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

import img1 from "../../assets/Casual-Shirts.png";
import img2 from "../../assets/headphones/HeadPhone.png";
import img3 from "../../assets/MensSlipper.png";
import img4 from "../../assets/Woman-Top.png";
import img5 from "../../assets/Casual-Jeans.png";
import img6 from "../../assets/Phones.png";
import img7 from "../../assets/Monitor.png";
import img8 from "../../assets/Smart-Watch.png";
import img9 from "../../assets/Women-Footwear.png";
import img10 from "../../assets/DryFruits.png";
import img11 from "../../assets/Wall-Clock.png";
import img12 from "../../assets/BadSheets.png";

function Carts() {
  const cartsData = [
    {
      img: img1,
      label: "Casual Shirt",
      price: "₹699",
      btn: "Shop Now",
      path: "/clothes",
    },
    {
      img: img2,
      label: "Wireless Headphones",
      price: "₹1,499",
      btn: "Shop Now",
      path: "/Headphone",
    },
    {
      img: img3,
      label: "Men's Slipper & Flip Flops",
      price: "₹299",
      btn: "Shop Now",
      path: "/MenFootwear",
    },
    {
      img: img4,
      label: "Tops For Women",
      price: "₹599",
      btn: "Shop Now",
      path: "/WomenTops",
    },
    {
      img: img5,
      label: "Casual Jeans",
      price: "₹999",
      btn: "Shop Now",
      path: "/MenJeans",
    },
    {
      img: img6,
      label: "Apple iPhone 16",
      price: "₹89,999",
      btn: "Shop Now",
      path: "/Phones",
    },
    {
      img: img7,
      label: "ASUS ROG Strix",
      price: "₹1,29,999",
      btn: "Shop Now",
      path: "/Monitor",
    },
    {
      img: img8,
      label: "Polar Pacer Pro",
      price: "₹24,999",
      btn: "Shop Now",
      path: "/Watches",
    },
    {
      img: img9,
      label: "Women's Flat Sandal",
      price: "₹499",
      btn: "Shop Now",
      path: "/WomenFootwear",
    },
    {
      img: img10,
      label: "Dry Fruits & Nuts",
      price: "₹1,199",
      btn: "Shop Now",
      path: "/DryFruits",
    },
    {
      img: img11,
      label: "Wall Clock",
      price: "₹799",
      btn: "Shop Now",
      path: "/WallWatches",
    },
    {
      img: img12,
      label: "Bed Sheets",
      price: "₹1,099",
      btn: "Shop Now",
      path: "/BedSheets",
    },
  ];

  return (
    <div className="container">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cartsData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-100 to-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-[220px] object-contain mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {item.label}
              </h2>
              <p className="text-base text-green-700 font-bold mb-1">
                {item.price}
              </p>

              <div className="flex flex-col gap-3 mt-4">
                <Link
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  Explore Now
                </Link>

                <Link
                  to="/Shopnow"
                  state={{
                    product: {
                      img: item.img,
                      label: item.label,
                      price: item.price,
                    },
                  }}
                  className="inline-block text-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition duration-300 shadow-md"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carts;
