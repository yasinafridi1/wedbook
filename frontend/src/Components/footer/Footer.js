import React from "react";
import Banner from "../Banners/Banner";
import Testimonial from "../Banners/Testimonial";
import About from "./About";
import Contact from "./Contact";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <About />
      <Banner/>
      <Testimonial/>
      <Contact />
      <footer className="px-6 flex justify-between items-center w-full py-3 bg-primary">
        <p className="font-semibold">© {year} WedBook </p>
        <p className="font-semibold">Terms & conditions | Privacy Policy</p>
      </footer>
    </>
  );
};

export default Footer;
