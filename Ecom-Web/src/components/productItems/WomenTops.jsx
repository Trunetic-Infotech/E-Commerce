import React from "react";

import img1 from "../../assets/WomenTops/top-1.png";
import img2 from "../../assets/WomenTops/top-2.png";
import img3 from "../../assets/WomenTops/top-3.png";
import img4 from "../../assets/WomenTops/top-4.png";
import img5 from "../../assets/WomenTops/top-5.png";
import img6 from "../../assets/WomenTops/top-6.png";
import img7 from "../../assets/WomenTops/top-7.png";
import img8 from "../../assets/WomenTops/top-8.png";
import img9 from "../../assets/WomenTops/top-9.png";
import img10 from "../../assets/WomenTops/top-10.png";
import img11 from "../../assets/WomenTops/top-11.png";
import img12 from "../../assets/WomenTops/top-12.png";
import img13 from "../../assets/WomenTops/top-13.png";
import img14 from "../../assets/WomenTops/top-14.png";
import img15 from "../../assets/WomenTops/top-15.png";
import img16 from "../../assets/WomenTops/top-16.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const topsData = [
  {
    img: img1,
    label: "Floral Ruffle Top",
    price: "₹1,099",
    description: "Soft floral top with delicate ruffle details.",
  },
  {
    img: img2,
    label: "Sleeveless Peplum Top",
    price: "₹1,299",
    description: "Elegant peplum cut with a flattering waistline.",
  },
  {
    img: img3,
    label: "Cotton Crop Tee",
    price: "₹899",
    description: "Breathable cotton crop tee for daily casual wear.",
  },
  {
    img: img4,
    label: "Lace Trim Blouse",
    price: "₹1,499",
    description: "Classy blouse with fine lace detailing.",
  },
  {
    img: img5,
    label: "Off-Shoulder Party Top",
    price: "₹1,599",
    description: "Chic off-shoulder top for nights out.",
  },
  {
    img: img6,
    label: "Button-Down V-Neck",
    price: "₹1,299",
    description: "Smart V-neck top with a trendy button front.",
  },
  {
    img: img7,
    label: "Boho Tassel Tunic",
    price: "₹1,199",
    description: "Relaxed bohemian tunic with tassel hem.",
  },
  {
    img: img8,
    label: "Polka Dot Chiffon Top",
    price: "₹1,399",
    description: "Lightweight chiffon top with retro polka dots.",
  },
  {
    img: img9,
    label: "Puff Sleeve Blouse",
    price: "₹1,199",
    description: "Trendy puff sleeve design with a fitted waist.",
  },
  {
    img: img10,
    label: "Printed Casual Top",
    price: "₹999",
    description: "Bold printed top ideal for day outings.",
  },
  {
    img: img11,
    label: "Solid Turtleneck Tee",
    price: "₹1,049",
    description: "Stretchy turtleneck for cozy layering.",
  },
  {
    img: img12,
    label: "Wrap Style Crepe Top",
    price: "₹1,349",
    description: "Crepe fabric with flattering wrap fit.",
  },
  {
    img: img13,
    label: "Denim Shirt Style Top",
    price: "₹1,499",
    description: "Denim finish with shirt-style buttons.",
  },
  {
    img: img14,
    label: "Mesh Sleeve Party Top",
    price: "₹1,699",
    description: "Stylish mesh-sleeved top for party looks.",
  },
  {
    img: img15,
    label: "Frill Sleeve Blouse",
    price: "₹1,299",
    description: "Graceful frill sleeves and light texture.",
  },
  {
    img: img16,
    label: "Layered Georgette Top",
    price: "₹1,899",
    description: "Flowy layered georgette fabric for elegance.",
  },
];

function WomenTops() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container px-4 py-10 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          👚 Trendy & Elegant Women's Tops
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {topsData.map((item, index) => (
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

export default WomenTops;
