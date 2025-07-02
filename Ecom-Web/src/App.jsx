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
import WomenTops from "./components/productItems/WomenTops";
import MenJeans from "./components/productItems/MenJeans";
import Phones from "./components/productItems/Phones";
import Monitor from "./components/productItems/Monitor";
import Watches from "./components/productItems/Watches";
import WomenFootwear from "./components/productItems/WomenFootwear";
import DryFruits from "./components/productItems/DryFruits";
import WallWatches from "./components/productItems/WallWatches";
import BedSheets from "./components/productItems/BedSheets";
import Shopnnow from "./components/productItems/Shopnnow";

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
          <Route path="WomenTops" element={<WomenTops />} />
          <Route path="MenJeans" element={<MenJeans />} />
          <Route path="Phones" element={<Phones />} />
          <Route path="Monitor" element={<Monitor />} />
          <Route path="Watches" element={<Watches />} />
          <Route path="WomenFootwear" element={<WomenFootwear />} />
          <Route path="DryFruits" element={<DryFruits />} />
          <Route path="WallWatches" element={<WallWatches />} />
          <Route path="BedSheets" element={<BedSheets />} />
          <Route path="Shopnow" element={<Shopnnow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
