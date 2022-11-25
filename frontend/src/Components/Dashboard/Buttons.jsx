import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import "../../pages/vendorPage/Vendor.css";
const Buttons = ({name,order,onClick}) => {
  return (
    <section
    onClick={onClick}
     className="flex w-[170px] h-[100px] cardshadow mt-6 hover:bg-[#48c277]">
      <div className="w-full h-full flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl pb-2">{order}</h1>
          <span className="text-xs font-semibold">{name}</span>
        </div>
        {/* <div className="font-bold text-5xl flex items-center mr-4">
         {icon}
        </div> */}
      </div>
    </section>
  );
};

export default Buttons;
