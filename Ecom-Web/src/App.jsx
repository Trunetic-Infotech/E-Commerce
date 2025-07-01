import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Banner from "./components/home/Banner";
import HomeCarousel from "./components/home/HomeCarousel";
import Carts from "./components/home/Carts";
import DiscountCarts from "./components/home/DiscountCart";
import Footer from "./components/Footer";
import Clothes from "./components/productItems/Clothes";
import Headphone from "./components/productItems/Headphone";
import MenFootwear from "./components/productItems/MenFootwear";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="Banner" element={<Banner />} />
          <Route path="Home Carousel" element={<HomeCarousel />} />
          <Route path="Carts" element={<Carts />} />
          <Route path="Discount Carts" element={<DiscountCarts />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="Clothes" element={<Clothes />} />
          <Route path="Headphone" element={<Headphone />} />
          <Route path="MenFootwear" element={<MenFootwear />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
