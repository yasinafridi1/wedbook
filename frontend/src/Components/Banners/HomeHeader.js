import React from "react";
import "../../pages/home/home.css";
import Register from "./Register";
const HomeHeader = () => {
  return (
    <>
      <div className="w-[100vw] h-[90vh] relative flex justify-center">
        <div className="w-full h-[80%] header flex justify-center items-center flex-col">
          <h1 className="text-white font-extrabold text-5xl text-secular">
            WedBook
          </h1>
          <span className="text-white text-center text-2xl text-secular">
            Your Personal Wedding Planner <br />
            Start your Journey to the perfect <br />
            wedding
          </span>
        </div>

        <div className="w-[80%] flex justify-between px-5 items-center bg-color-register absolute top-[450px] h-[100px]">
          <Register />
          <div className="w-[2px] h-[70%] Line" />
          <Register />
          <div className="w-[0.5px] h-[70%] Line" />
          <Register />
          <div className="w-[0.5px] h-[70%] Line" />
          <Register />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
