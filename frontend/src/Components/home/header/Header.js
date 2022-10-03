import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = () => {
  return (
    <header>
      <Navbar />
      <Banner />
      {/* <Slider /> */}
    </header>
  );
};

export default Header;
