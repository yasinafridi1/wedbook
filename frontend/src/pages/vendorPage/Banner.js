import React from "react";
import "./Vendor.css";
import img1 from "../../images/card/two.jpg";
const Banner = () => {
  return (
    <>
      <div className=" pt-16 pb-6 pl-11 text-lg font-semibold">
        <h1>Home</h1>
      </div>
      <div className="Banner_Image">
        <img
          className="w-full h-full"
          src={img1}
          alt="Image"
        />
      </div>
    </>
  );
};

export default Banner;
