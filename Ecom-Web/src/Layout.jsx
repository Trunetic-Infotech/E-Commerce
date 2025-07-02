// src/Layout.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* renders the current page */}
      <Footer />
    </>
  );
};

export default Layout;
