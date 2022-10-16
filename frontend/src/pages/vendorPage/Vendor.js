import React from "react";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import Gallery from "./Gallery";
import Space from "./Space";
const Vendor = () => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Space />
      <Gallery />
      <Footer />
    </div>
  );
};


export default Vendor;
