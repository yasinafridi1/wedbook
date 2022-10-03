import React from "react";
import Card from "./Card";

const Grid = () => {
  return (
    <div className="p-10 gap-x-4 w-full place-items-center grid grid-cols-1 xsm:grid-cols-3  xsm:gap-x-4 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-2  gap-y-14 items-center transition-all ease-out duration-700">
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      <Card Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
      {/* <Card Image={image} />
      <Card Image={image} />
      <Card Image={image} />
      <Card Image={image} />
      <Card Image={image} />
      <Card Image={image} />
      <Card Image={image} />
      <Card Image={image} />
      <Card Image={image} /> */}
    </div>
  );
};

export default Grid;
