import React from "react";

import img1 from "../../assets/WomenFootwear/wf-1.png";
import img2 from "../../assets/WomenFootwear/wf-2.png";
import img3 from "../../assets/WomenFootwear/wf-3.png";
import img4 from "../../assets/WomenFootwear/wf-4.png";
import img5 from "../../assets/WomenFootwear/wf-5.png";
import img6 from "../../assets/WomenFootwear/wf-6.png";
import img7 from "../../assets/WomenFootwear/wf-7.png";
import img8 from "../../assets/WomenFootwear/wf-8.png";
import img9 from "../../assets/WomenFootwear/wf-9.png";
import img10 from "../../assets/WomenFootwear/wf-10.png";
import img11 from "../../assets/WomenFootwear/wf-11.png";
import img12 from "../../assets/WomenFootwear/wf-12.png";
import img13 from "../../assets/WomenFootwear/wf-13.png";
import img14 from "../../assets/WomenFootwear/wf-14.png";
import img15 from "../../assets/WomenFootwear/wf-15.png";
import img16 from "../../assets/WomenFootwear/wf-16.png";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const footwearData = [
  {
    img: img1,
    label: "Strappy Flat Sandals",
    price: "₹899",
    description: "Casual everyday flats with ankle straps.",
  },
  {
    img: img2,
    label: "Block Heel Pumps",
    price: "₹1,499",
    description: "Comfortable block heels for office or party.",
  },
  {
    img: img3,
    label: "Woven Slide Sandals",
    price: "₹799",
    description: "Trendy slides with woven strap detail.",
  },
  {
    img: img4,
    label: "Glitter Party Heels",
    price: "₹1,899",
    description: "Sparkling heels perfect for festive nights.",
  },
  {
    img: img5,
    label: "Casual Sneakers",
    price: "₹1,299",
    description: "Comfy lace-up sneakers with soft sole.",
  },
  {
    img: img6,
    label: "Ethnic Mojaris",
    price: "₹999",
    description: "Traditional mojaris with embroidery work.",
  },
  {
    img: img7,
    label: "Platform Slip-Ons",
    price: "₹1,399",
    description: "Effortless platform style for quick outings.",
  },
  {
    img: img8,
    label: "Transparent Heeled Sandals",
    price: "₹1,799",
    description: "Minimalist see-through heel design.",
  },
  {
    img: img9,
    label: "Knit Running Shoes",
    price: "₹1,699",
    description: "Lightweight and breathable running shoes.",
  },
  {
    img: img10,
    label: "Loafer Ballerinas",
    price: "₹1,199",
    description: "Fusion of loafers and ballet flats.",
  },
  {
    img: img11,
    label: "Embellished Kolhapuri Flats",
    price: "₹1,099",
    description: "Classic kolhapuris with added sparkle.",
  },
  {
    img: img12,
    label: "Wedge Sandals",
    price: "₹1,599",
    description: "Elevated comfort with wedge soles.",
  },
  {
    img: img13,
    label: "Chunky Sole Trainers",
    price: "₹1,899",
    description: "Bold trainers with chunky sole design.",
  },
  {
    img: img14,
    label: "Pearl Strap Sandals",
    price: "₹1,349",
    description: "Elegant sandals with pearl detailing.",
  },
  {
    img: img15,
    label: "Faux Fur Slides",
    price: "₹949",
    description: "Cozy indoor slides with fur top.",
  },
  {
    img: img16,
    label: "Cross-Strap Gladiators",
    price: "₹1,299",
    description: "Chic gladiator sandals with buckled straps.",
  },
];

function WomenFootwear() {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          👡 Elegant Women's Footwear Collection
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Under ₹1,000", "₹1,000 - ₹1,500", "Above ₹1,500"].map(
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

export default WomenFootwear;
