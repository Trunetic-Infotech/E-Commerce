import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/shoes.png";
import image2 from "../../assets/Shirts/Tshirt.png";
import image3 from "../../assets/Electronics.png";
import image4 from "../../assets/Grocery.png";
import image5 from "../../assets/smartWatch.png";
import image6 from "../../assets/airpodes.png";
import image7 from "../../assets/Projector.png";
import image8 from "../../assets/Dekstop.png";
import image9 from "../../assets/SoftToys.png";
import image10 from "../../assets/ElectricCycle.png";
import image11 from "../../assets/Washing Machine.png";
import image12 from "../../assets/Chairs.png";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const items = [
    { img: image1, label: "Shoes", price: "Starting From ₹699" },
    { img: image2, label: "T-Shirts", price: "Starting From ₹299" },
    { img: image3, label: "Electronics", price: "Starting From ₹9999" },
    { img: image4, label: "Grocery", price: "Starting From ₹15" },
    { img: image5, label: "Smart Watch", price: "Starting From ₹999" },
    { img: image6, label: "AirPods", price: "Starting From ₹1299" },
    { img: image7, label: "Projector", price: "Starting From ₹2599" },
    { img: image8, label: "Desktop", price: "Starting From ₹7999" },
    { img: image9, label: "Soft Toys", price: "Starting From ₹499" },
    { img: image10, label: "Electric Cycle", price: "Starting From ₹29999" },
    { img: image11, label: "Washing Machine", price: "Starting From ₹6999" },
    { img: image12, label: "Office Chairs", price: "Starting From ₹2999" },
  ];

  return (
    <>
      <div>
        <div className="px-6 py-8 bg-gradient-to-b from-blue-50 to-white rounded-xl">
          <h1 className="font-bold text-[36px] md:text-[30px]  text-blue-800  uppercase tracking-wide">
            Top Selling Items
          </h1>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="px-2 py-[20px]">
                <div className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-[180px] object-contain mb-4 rounded-lg"
                  />
                  <p className="text-lg font-semibold text-gray-700 mb-1">
                    {item.label}
                  </p>
                  <p className="text-md font-bold text-indigo-600">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
