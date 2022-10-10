import React from "react";
import LeftCard from "../cards/LeftCard";
import RightCard from "../cards/RightCard";
import './services.css';

const Services = () => {
  return (
    <div>
      <section className="pt-5 px-16 pb-8 flex justify-between items-center border-cyan-300">
        <div>
          <h1 className="text-3xl font-extrabold text-secular text-gray-500">Services</h1>
        </div>
        <div className="text-lg font-bold text-white py-2 bg-primary px-4 hover:bg-teal-700 rounded-tr-2xl transition ease-in-out duration-500">
          <button>Become a Provider</button>
        </div>
      </section>
      <div className="p-10 gap-x-4 w-full place-items-center grid grid-cols-1 xsm:grid-cols-2  xsm:gap-x-4 xl:grid-cols-2 2xl:grid-cols-4 xl:gap-x-2  gap-y-14 items-center transition-all ease-out duration-700">
        <LeftCard name="Venues" />
        <RightCard name="Catering" />
        <LeftCard name="Decorator" />
        <RightCard name="Cooks" />
      </div>
    </div>
  );
};

export default Services;
