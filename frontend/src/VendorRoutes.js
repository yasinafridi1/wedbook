import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
                    <Route path="/" element={<Orders />} />
                    <Route path="/order" element={<Orders />} />
                    <Route path="/revenue" element={<Revenue />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/feedbacks" element={<Feedbacks />} />
                </Routes>
            </Router>
        </>
    );
}

export default VendorRoutes;
