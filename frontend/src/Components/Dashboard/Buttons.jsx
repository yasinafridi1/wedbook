import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import "../../pages/vendorPage/Vendor.css";
const Buttons = ({name,order,onClick}) => {
  return (
    <section
    onClick={onClick}
     className="flex w-[250px] h-[80px] cardshadow mt-6">
      <div className="w-full h-full flex justify-between">
        <div className="flex flex-col justify-center pl-4">
          <span className="text-sm font-bold text-primary">{name}</span>
          <h1 className="font-bold text-4xl pt-1 text-secular text-primary">{order}</h1>

        </div>
        {/* <div className="font-bold text-5xl flex items-center mr-4">
         {icon}
        </div> */}
      </div>
    </section>
  );
};

export default Buttons;
