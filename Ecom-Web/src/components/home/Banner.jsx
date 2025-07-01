import React, { useState, useEffect } from "react";
import lg1 from "../../assets/Banner-Tshirts.png";
import lg2 from "../../assets/Banner-Shoes.png";
import lg3 from "../../assets/Banner-Gold.png";

const images = [lg1, lg2, lg3];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [length]);

  return (
    <>
      <div className="container">
        <div className="max-w-screen-xl mx-auto px-4 py-10">
          <div className=" flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-100 to-white rounded-2xl shadow-lg p-8 transition-all duration-500">
            {/* Left Section */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-blue-600 text-xl font-semibold uppercase tracking-wide mb-2">
                #Big Fashion Sale
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Limited Time Offer! <br className="hidden md:block" /> Up To 50%
                OFF!
              </h1>
              <p className="text-lg text-gray-700 mb-6 font-bold">
                Redefine Your Everyday Style
              </p>
              <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition">
                Shop Now
              </button>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2">
              <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-full h-auto rounded-xl object-cover transition duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
