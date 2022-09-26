import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div>
      <h1 className="header-text text-3xl text-center my-5 mt-8">
        Select and enjoy 😄
      </h1>
      <div className="p-10 gap-x-4 w-full place-items-center grid grid-cols-1 xsm:grid-cols-2  xsm:gap-x-4 xl:grid-cols-2 2xl:grid-cols-4 xl:gap-x-4  gap-y-12 items-center transition-all ease-out duration-700">
        <Card name="Venues" />
        <Card name="catering" />
        <Card name="Cook" />
        <Card name="Decoration" />
      </div>
    </div>
  );
};

export default Services;
