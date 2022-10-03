import React from "react";
import Aboutus from "../footer/Aboutus";
import Contactus from "../footer/Contactus";
import Navbar from "../home/header/Navbar";
import Grid from "./Grid";
import Hall from "./Hall";
import Search from "./Search";

const Venues = () => {
  return (
    <div id="venues">
      <Navbar />
      <Search />
      <Hall />
      <Grid />
      <Aboutus />
      <Contactus />
    </div>
  );
};

export default Venues;
