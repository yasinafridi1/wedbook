import React from "react";

const Rating = () => {
  return (
    <>
      <div className="width flex flex-col h-32 my-8 bg-slate-50 p-3 font-semibold">
        <div className="flex justify-between w-full pb-3">
          <h1 className="text-xl font-bold">Venues</h1>
          <span>⭐4.3(5 reviews)</span>
        </div>
        <div className="flex justify-between w-full pb-3">
          <h1>Location</h1>
          <a
            className="font-bold inline-block text-white px-4 bg-green-500"
            href="/"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-between w-full">
          <h4>Area Avaliable: 200 - 350</h4>
          <h4>Separate section: male & Female</h4>
        </div>
      </div>
    </>
  );
};

export default Rating;
