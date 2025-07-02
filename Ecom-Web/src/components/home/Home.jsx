import React from "react";
import Banner from "./Banner";
import HomeCarousel from "./HomeCarousel";
import Carts from "./Carts";
import DiscountCart from "./DiscountCart";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeCarousel />
      <Carts />
      <DiscountCart />
      <Footer />
      
    </>
  );
};

export default Home;
