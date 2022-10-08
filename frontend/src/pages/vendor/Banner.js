import React from "react";
import "./Vendor.css";
const Banner = () => {
  return (
    <>
      <div className=" pt-16 pb-6 pl-11 text-lg font-semibold">
        <h1>Home</h1>
      </div>
      <div className="Banner_Image">
        <img
          className="w-full h-full"
          src={`${process.env.PUBLIC_URL}/images/card/one.jpg`}
          alt="Image"
        />
      </div>
    </>
  );
};

export default Banner;
