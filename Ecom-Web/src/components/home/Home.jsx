import React, { useState } from "react";
import Navbar from "../Navbar";
import HomeCarousel from "./HomeCarousel";
import Banner from "./Banner";
import Carts from "./Carts";
import DiscountCarts from "./DiscountCart";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <HomeCarousel />
      <Carts />
      <DiscountCarts />
      <Footer />
    </>
  );
}

export default Home;
