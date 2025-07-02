import React from "react";

import img1 from "../../assets/MenJeans/jeans-1.png";
import img2 from "../../assets/MenJeans/jeans-2.png";
import img3 from "../../assets/MenJeans/jeans-3.png";
import img4 from "../../assets/MenJeans/jeans-4.png";
import img5 from "../../assets/MenJeans/jeans-5.png";
import img6 from "../../assets/MenJeans/jeans-6.png";
import img7 from "../../assets/MenJeans/jeans-7.png";
import img8 from "../../assets/MenJeans/jeans-8.png";
import img9 from "../../assets/MenJeans/jeans-9.png";
import img10 from "../../assets/MenJeans/jeans-10.png";
import img11 from "../../assets/MenJeans/jeans-11.png";
import img12 from "../../assets/MenJeans/jeans-12.png";
import img13 from "../../assets/MenJeans/jeans-13.png";
import img14 from "../../assets/MenJeans/jeans-14.png";
import img15 from "../../assets/MenJeans/jeans-15.png";
import img16 from "../../assets/MenJeans/jeans-16.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const jeansData = [
  {
    img: img1,
    label: "Slim Fit Stretch Jeans",
    price: "₹1,799",
    description: "Comfortable slim fit with stretchable denim fabric.",
  },
  {
    img: img2,
    label: "Tapered Fit Washed Jeans",
    price: "₹1,899",
    description: "Modern tapered design with washed-out finish.",
  },
  {
    img: img3,
    label: "Classic Straight Jeans",
    price: "₹1,699",
    description: "Traditional cut for timeless everyday wear.",
  },
  {
    img: img4,
    label: "Distressed Ripped Jeans",
    price: "₹2,199",
    description: "Urban-style jeans with ripped and faded details.",
  },
  {
    img: img5,
    label: "Regular Fit Blue Jeans",
    price: "₹1,599",
    description: "Versatile blue jeans with regular straight fit.",
  },
  {
    img: img6,
    label: "Black Slim Stretch Jeans",
    price: "₹1,999",
    description: "Sleek black jeans with added comfort stretch.",
  },
  {
    img: img7,
    label: "Faded Grey Narrow Jeans",
    price: "₹1,899",
    description: "Stylish grey fade for a modern wardrobe upgrade.",
  },
  {
    img: img8,
    label: "Heavy Wash Denim",
    price: "₹2,299",
    description: "Bold heavy-wash look with high durability.",
  },
  {
    img: img9,
    label: "Relaxed Fit Cotton Jeans",
    price: "₹1,499",
    description: "Soft cotton-blend jeans for all-day comfort.",
  },
  {
    img: img10,
    label: "Bootcut Classic Denim",
    price: "₹1,899",
    description: "Retro bootcut style for a relaxed vibe.",
  },
  {
    img: img11,
    label: "Ankle-Length Slim Jeans",
    price: "₹1,699",
    description: "Trendy ankle-cropped jeans for modern fashion.",
  },
  {
    img: img12,
    label: "Stone-Wash Denim Jeans",
    price: "₹2,099",
    description: "Textured stone-wash finish for vintage effect.",
  },
  {
    img: img13,
    label: "Cargo Pocket Jeans",
    price: "₹2,499",
    description: "Multi-pocket jeans with streetwear appeal.",
  },
  {
    img: img14,
    label: "Raw Denim Jeans",
    price: "₹2,799",
    description: "Unwashed raw denim for rugged, lasting wear.",
  },
  {
    img: img15,
    label: "Skinny Fit Stretch Jeans",
    price: "₹1,799",
    description: "Skin-hugging fit with maximum stretch comfort.",
  },
  {
    img: img16,
    label: "Mid-Rise Blue Jeans",
    price: "₹1,599",
    description: "Everyday mid-rise jeans in classic blue.",
  },
];

function MenJeans() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          👖 Premium Men's Jeans Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {jeansData.map((item, index) => (
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

export default MenJeans;
