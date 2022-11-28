import React from "react";
import "../../pages/Customer/home.css";
import Register from "./Register";
const HomeHeader = () => {
  return (
    <>
      <div className="w-[100vw] h-[90vh] relative flex justify-center mt-3">
        <div className="w-full h-[80%] header flex justify-center items-center flex-col">
          <h1 className="text-4xl text-ubunto text-slate-100">
            WedBook
          </h1>
          <span className="text-center text-xl font-semibold mt-2 text-slate-200">
            Your Personal Wedding Planner <br />
            Start your Journey to the perfect <br />
            wedding
          </span>
        </div>

        <div className="w-[80%] flex justify-between px-5 items-center bg-primary banner-register h-[100px]">
          <Register />
          <div className="w-[2px] h-[70%] Line" />
          <Register />
          <div className="w-[2px] h-[70%] Line" />
          <Register />
          <div className="w-[2px] h-[70%] Line" />
          <Register />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
