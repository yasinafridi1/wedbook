import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "./pages/vendorPage/Orders";
// import Home from "./pages/vendorPage/Home";
import Feedbacks from "./pages/vendorPage/Feedbacks";
import Home from "./pages/home/Home";
import Venues from "./Components/venues/Venues";
import Vendor from "./pages/vendorPage/Vendor";
// import Revenue from "./pages/vendorPage/Revenue";
// import VendorPageRouting from "./pages/VendorPageRouting";
import HomeHeader from "./Components/Banners/HomeHeader";
import Banner from "./Components/Banners/Banner";
import Testimonial from "./Components/Banners/Testimonial";
function App() {

  return (
    <>
      {/* <HomeHeader/>
    <Banner/>
    <Testimonial/> */}
      {/* <Router>
      <VendorPageRouting/> */}
      {/* <Feedbacks/> */}
      {/* <Revenue/> */}
      {/* <Orders/> */}
      {/* <Home /> */}
      {/* </Router> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/venues" element={<Venues />} />
        </Routes>
        <Routes>
          <Route path="/venues/hall1" element={<Vendor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
