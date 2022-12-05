import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/vendorPage/Home";
import Orders from "./pages/vendorPage/Orders";
import Revenue from "./pages/vendorPage/Revenue";
import Profile from "./pages/vendorPage/Profile";
import Services from "./pages/vendorPage/Services";
import Feedbacks from "./pages/vendorPage/Feedbacks";
const VendorRoutes = () => {
    return (
        <>

      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/order" element={<Orders />} />
            </Routes>
            <Routes>
                <Route path="/revenue" element={<Revenue />} />
            </Routes>
            <Routes>
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Routes>
                <Route path="/services" element={<Services />} />
            </Routes>
            <Routes>
                <Route path="/feedbacks" element={<Feedbacks />} />
            </Routes>
        </Router>
        </>
    );
}

export default VendorRoutes;
