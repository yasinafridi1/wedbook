import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./vendorPage/Home";
import Orders from "./vendorPage/Orders";
import Revenue from "./vendorPage/Revenue";
import Profile from "./vendorPage/Profile";
import Services from "./vendorPage/Services";
import Feedbacks from "./vendorPage/Feedbacks";

const VendorPageRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
      </Routes>
    </>
  );
};

export default VendorPageRouting;