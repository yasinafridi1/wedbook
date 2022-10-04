import React from "react";
import Card2 from "./Card2";
const List = () => {
  return (
    <div className="py-12 gap-x-0 w-full grid grid-cols-1 xsm:grid-cols-1  xsm:gap-x-0 xl:grid-cols-1 2xl:grid-cols-1 xl:gap-x-0  gap-y-0 items-center transition-all ease-out duration-700">
      <Card2 Image={`${process.env.PUBLIC_URL}/images/card/one.jpg`} />
    </div>
  );
};

export default List;
