import React from "react";
import Navbar from "../navbar/Navbar";
import Filters from "./Filters";
import Footer from "../footer/Footer";
import "./venues.css";

const Venues = () => {
  return (
    <div id="venues">
      <Navbar />
      <Filters />
      <Footer />
    </div>
  );
};

export default Venues;
