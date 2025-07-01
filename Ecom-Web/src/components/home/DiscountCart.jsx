import React from "react";
import img1 from "../../assets/Discount-Shirts.png";
import img2 from "../../assets/MenBoxer.png";
import img3 from "../../assets/MensSlipper.png";
import img4 from "../../assets/Women-Saree.png";
import img5 from "../../assets/ArmsSleevs.png";
import img6 from "../../assets/Torches.png";
import img7 from "../../assets/DiscountShoes.png";
import img8 from "../../assets/BagPack.png";
import img9 from "../../assets/Plants.png";
import img10 from "../../assets/DryFruits.png";
import img11 from "../../assets/Wall-Clock.png";
import img12 from "../../assets/Nets.png";

const groupedCarts = [
  {
    title: "Season’s Top Picks",
    products: [
      {
        img: img1,
        label: "Casual Shirts",
        actualPrice: "₹999",
        offerPrice: "₹699",
        offer: "Min. 50% Off",
      },
      {
        img: img10,
        label: "Dry Fruit, Nut & Seed",
        actualPrice: "₹1,999",
        offerPrice: "₹999",
        offer: "Min. 50% Off",
      },
      {
        img: img4,
        label: "Women's Sarees",
        actualPrice: "₹2,499",
        offerPrice: "₹1,199",
        offer: "Special offer",
      },
      {
        img: img5,
        label: "Arm Sleeves",
        actualPrice: "₹399",
        offerPrice: "₹199",
        offer: "Min. 50% Off",
      },
    ],
  },
  {
    title: "Fashion's Top Deals",
    products: [
      {
        img: img2,
        label: "Men's Boxers",
        actualPrice: "₹799",
        offerPrice: "₹399",
        offer: "Min. 50% Off",
      },
      {
        img: img3,
        label: "Men’s Slippers & Flip Flops",
        actualPrice: "₹999",
        offerPrice: "₹299",
        offer: "Min. 70% Off",
      },
      {
        img: img7,
        label: "Men’s Casual Shoes",
        actualPrice: "₹4,999",
        offerPrice: "₹1,499",
        offer: "Min. 70% Off",
      },
      {
        img: img8,
        label: "Backpacks",
        actualPrice: "₹2,499",
        offerPrice: "₹749",
        offer: "Min. 70% Off",
      },
    ],
  },
  {
    title: "Home Decor & Furnishings",
    products: [
      {
        img: img11,
        label: "Wall Clocks",
        actualPrice: "₹1,599",
        offerPrice: "₹799",
        offer: "Min. 50% Off",
      },
      {
        img: img6,
        label: "Torches",
        actualPrice: "₹1,499",
        offerPrice: "₹749",
        offer: "Special offer",
      },
      {
        img: img12,
        label: "Mosquito Nets",
        actualPrice: "₹1,999",
        offerPrice: "₹999",
        offer: "Min. 50% Off",
      },
      {
        img: img9,
        label: "Plants Saplings",
        actualPrice: "₹899",
        offerPrice: "₹449",
        offer: "Min. 50% Off",
      },
    ],
  },
];

export default function DiscountCarts() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groupedCarts.map((group, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{group.title}</h2>
              <button className="text-blue-600 text-xl">{">"}</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {group.products.map((product, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-lg p-2 hover:shadow-md transition"
                >
                  <img
                    src={product.img}
                    alt={product.label}
                    className="w-full h-[120px] object-contain mb-2"
                  />
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.label}
                  </h3>
                  <div className="text-sm mt-1">
                    <span className="text-gray-500 line-through mr-2">
                      {product.actualPrice}
                    </span>
                    <span className="font-bold text-green-700">
                      {product.offerPrice}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-semibold mt-1 ${
                      product.offer.includes("Special")
                        ? "text-green-600"
                        : "text-green-700"
                    }`}
                  >
                    {product.offer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
