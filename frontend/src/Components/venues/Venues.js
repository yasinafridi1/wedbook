import React from "react";
import Navbar from "../navbar/Navbar";
import Filters from "./Filters";
import Footer from "../footer/Footer";
import "./venues.css";

const Venues = () => {
  return (
    <>
      <Navbar />
      <Filters />
      <Footer />
    </>
  );
};

export default Venues;
