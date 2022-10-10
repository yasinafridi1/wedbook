import React from "react";

const HomeBanner = () => {
  return (
    <div className="flex justify-center items-center w-full pt-24">
      <div className="w-1/2 pl-12">
        <h6 className="text-primary font-semibold">Once in a lifetime moment...</h6>
        <h1 className="text-2xl font-medium">
          Start your Journey <br /> to the perfect <br /> wedding
        </h1>
      </div>
      <div className="w-1/2 pl-10">
        <h1 className="text-xl font-normal pb-4 text-menu text-justify ml-12 w-3/5 mt-6">
          Convenient search for vendors in Peshawar with
          portfolios, price and reviews collected in one place
        </h1>
        <div className="ml-12 font-bold inline-block text-white px-4 py-2 bg-primary rounded-br-2xl  transition-all duration-500 ease-in-out hover:bg-teal-700">
          <a href="#services">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
