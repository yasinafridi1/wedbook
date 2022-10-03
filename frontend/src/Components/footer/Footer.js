import React from "react";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import "./footer.css";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <Aboutus />
      <Contactus />
      <footer className="px-6 flex justify-between items-center w-full py-3 bg-primary">
        <p className="font-semibold">© {year} WedBook </p>
        <p className="font-semibold">Terms & conditions | Privacy Policy</p>
      </footer>
    </>
  );
};

export default Footer;
