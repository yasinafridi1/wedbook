import React from "react";
import Aboutus from "../footer/Aboutus";
import Contactus from "../footer/Contactus";
import Navbar from "../home/header/Navbar";
import Hall from "./Hall";
// import MultipleSelectCheckmarks from "./SearchBar";

const Venues = () => {
  return (
    <div id="venues">
      <Navbar />
      <Hall />
      <Aboutus />
      <Contactus />
    </div>
  );
};

export default Venues;
