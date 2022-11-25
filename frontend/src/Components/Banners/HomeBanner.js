import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppButton from "../forms/AppButton";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="w-1/2 pl-12">
        <h6 className="text-primary font-semibold">
          Once in a lifetime moment...
        </h6>
        <h1 className="text-2xl font-medium">
          Start your Journey <br /> to the perfect <br /> wedding
        </h1>
      </div>
      <div className="w-1/2 pl-10">
        <h1 className="text-xl font-normal pb-4 text-menu-home text-justify ml-12 w-3/5 mt-6">
          Convenient search for vendors in Peshawar with portfolios, price and
          reviews collected in one place
        </h1>
        <div className="ml-12 font-bold inline-block text-white px-4 py-2 bg-primary rounded-br-2xl  transition-all duration-500 ease-in-out hover:bg-teal-700">
          <a href="#services">Get Started</a>
        </div>
        {/* <AppButton
          onClick={() => navigate("/details", { state: { user: "tehmedd" } })}
          bg={"bg-blue-400"}
        >
          Get Started
        </AppButton> */}
        {/* <Link to={"/venues"}>login</Link> */}
      </div>
    </div>
  );
};

export default HomeBanner;
