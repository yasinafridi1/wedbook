import React from "react";
import GridCard from "./GridCard";

const Grid = () => {
  return (
    <div className="p-10 gap-x-4 w-full place-items-center grid grid-cols-1 xsm:grid-cols-3  xsm:gap-x-4 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-2  gap-y-14 items-center transition-all ease-out duration-700">
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <GridCard Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
    </div>
  );
};

export default Grid;
