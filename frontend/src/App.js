import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Venues from "./Components/venues/Venues";
import Vendor from "./pages/vendorPage/Vendor";

function App() {
  return (
    <>
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
