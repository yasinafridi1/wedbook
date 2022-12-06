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
      <div className="flex justify-between Adminshadow h-[50px] w-[100vw] bg-white">
        <div className="text-2xl flex items-center pl-4 w-[20%]">
          <FaBars onClick={() => setSideBar(!sidebar)} />
        </div>
        <div className="flex justify-start items-center w-[80%]">
          <h1 className="text-2xl font-bold ml-10 text-dancing text-primary">Jan's Wedding Hall</h1>
        </div>
        <div className="flex justify-center items-center pr-4">
          <span className="text-primary text-2xl">
            <BiBell />
          </span>
          <button className="py-[2px] px-2 text-white bg-primary mr-3 ml-4 text-md font-bold border border-teal-500 transition-all ease-in-out duration-500 hover:bg-white hover:text-teal-500">
            Logout
          </button>
        </div>
      </div>
      <nav
        className={`${sidebar
          ? "nav-menu active z-50 bg-primary"
          : "nav-menu z-50 bg-primary"
          } `}
      >
        <div className="text-2xl flex justify-end p-3">
          <AiOutlineClose className="text-2xl text-white" onClick={() => setSideBar(!sidebar)} />
        </div>
        <div className="w-full flex flex-col pl-10">
          {SidebarData.map((item, index) => (
            <NavLink to={item.path} key={index} className="flex items-center">
              <span className="flex py-4 pr-3 text-2xl text-slate-200">{item.icon}</span>
              <span className="text-xl font-bold text-ubunto text-slate-200">{item.title}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
