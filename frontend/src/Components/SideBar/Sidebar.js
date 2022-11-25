import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import "../../pages/vendorPage/Vendor.css";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../Data/SidebarData"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <>
      <div className="flex justify-between Adminshadow h-[50px] w-[100vw]">
        <div className="text-2xl flex items-center pl-4">
          <FaBars onClick={() => setSideBar(!sidebar)} />
        </div>
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-10">Jan Wedding Hall</h1>
        </div>
        <div className="flex justify-center items-center pr-4">
          <span className="text-xl text-[#4ddb84]">
          <BiBell/>
          </span>
          <button className="py-[2px] px-2 text-white bg-[#4ddb84] mr-3 ml-4 text-[14px] font-semibold">
            logout
          </button>
        </div>
      </div>
      <nav
        className={`${
          sidebar
            ? "nav-menu active z-50 bg-[#4ddb84]"
            : "nav-menu z-50 bg-[#4ddb84]"
        } `}
      >
        <div className="text-2xl flex justify-end p-3">
          <AiOutlineClose onClick={() => setSideBar(!sidebar)} />
        </div>
        <div className="w-full flex flex-col pl-6">
          {SidebarData.map((item, index) => (
            <NavLink to={item.path} key={index} className="flex items-center">
              <span className="flex py-4 pr-2">{item.icon}</span>
              <span className="font-bold">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
