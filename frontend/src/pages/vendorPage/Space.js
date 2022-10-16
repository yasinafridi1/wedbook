import React from "react";
import Banner from "./Banner";
import Detail from "./Detail";
import Provide from "./Provide";
import Rating from "./Rating";
import VendorServices from "./VendorServices";

const Space = () => {
  return (
    <div className="flex flex-row pl-11">
      <div>
        <Banner />
        <Rating />
        <Provide />
        <Detail />
      </div>
      {/* <div className="vendor_padding px-4">
        <VendorServices />
      </div> */}
    </div>
  );
};

export default Space;
