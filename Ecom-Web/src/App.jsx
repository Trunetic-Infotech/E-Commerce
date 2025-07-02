// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Clothes from "./components/productItems/Clothes";
import Headphone from "./components/productItems/Headphone";
import MenFootwear from "./components/productItems/MenFootwear";
import SellerRegister from "./SellerRegister";
import AboutUs from "./footerpages/AboutUs";
import ContactUs from "./footerpages/ContactUs";
import FAQ from "./footerpages/FAQ";
import Careers from "./footerpages/Careers";
import Payments from "./footerpages/Payments";
import Shipping from "./footerpages/Shipping";
import Returns from "./footerpages/Returns";
import Privacy from "./footerpages/Privacy";
import TermsOfUse from "./footerpages/TermsOfUse";
import Sitemap from "./footerpages/Sitemap";
import Security from "./footerpages/Security";
import GrievanceRedressal from "./footerpages/GrievanceRedressal";
import CorporateInformation from "./footerpages/CorporateInformation";
import ReportInfringement from "./footerpages/ReportInfringement";
import OpencartStories from "./footerpages/OpencartStories";
import Press from "./footerpages/Press";
import ReturnPolicy from "./footerpages/ReturnPolicy";
import Banner from "./components/home/Banner";
import HomeCarousel from "./components/home/HomeCarousel";
import Carts from "./components/home/Carts";
import DiscountCarts from "./components/home/DiscountCart";
import Footer from "./components/Footer";
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/headphone" element={<Headphone />} />
        <Route path="/men-footwear" element={<MenFootwear />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/cancellation-&-returns" element={<Returns />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/security" element={<Security />} />
        <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
        <Route path="/corporate-information" element={<CorporateInformation />} />
        <Route path="/report-infringement" element={<ReportInfringement />} />
        <Route path="/opencart-stories" element={<OpencartStories />} />
        <Route path="/press" element={<Press />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="Banner" element={<Banner />} />
        <Route path="Home Carousel" element={<HomeCarousel />} />
        <Route path="Carts" element={<Carts />} />
        <Route path="Discount Carts" element={<DiscountCarts />} />
        <Route path="Footer" element={<Footer />} />
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
  );
}

export default App;
