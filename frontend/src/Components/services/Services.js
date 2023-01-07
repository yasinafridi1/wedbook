import React from "react";
import LeftCard from "../cards/LeftCard";
import RightCard from "../cards/RightCard";
import './services.css';

const Services = () => {
  return (
    <div id="services">
      <section className="pt-7 px-14 flex justify-between items-center border-cyan-300">
        <div>
          <h1 className="text-3xl font-extrabold text-ubunto text-gray-500">Main Services</h1>
        </div>
        <div className="text-lg text-white text-ubunto  py-1 bg-primary px-4 hover:bg-teal-700 rounded-tr-2xl transition ease-in-out duration-500">
          <button>Become a Provider</button>
        </div>
      </section>
      <div className="grid grid-cols-2 place-content-center gap-x-2 gap-y-2 w-[91%] mx-auto mt-4 mb-10">
        <LeftCard name="Venues" />
        <RightCard name="Catering" />
        <LeftCard name="Decorator" />
        <RightCard name="Cooks" />
      </div>
    </div>
  );
};

export default Services;
