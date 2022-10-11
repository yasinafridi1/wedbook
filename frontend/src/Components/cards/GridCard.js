import React from "react";
const GridCard = ({ data }) => {
  return (
    <div className="mx-4 max-w-sm bg-slate-50 rounded-lg gridCard">
      <img className="rounded-t-lg h-56 w-full" src={data.image} alt="Vendor banner" />
      <div className="flex justify-between items-center px-4 pt-4">
        <span className="font-semibold text-xl">{data.name}</span>
        <span className="text-sm font-semibold">⭐{data.rating}</span>
      </div>
      <div className="text-sm px-4 pt-3">
        <i className="fa-sharp fa-solid fa-location-dot pr-2"></i>
        <span className="text-sm text-gray-500">{data.location}</span>
      </div>

      <div className="flex justify-between items-center px-4 mb-4 pt-3 pb-2">
        <h1 className="font-bold">
          Price/day: <span className="text-primary">{data.price}</span>
        </h1>
        <a
          className="font-bold inline-block text-white px-6 py-1 bg-primary hover:bg-teal-400 transition ease-in-out duration-500"
          href={data.path}
        >
          Visit
        </a>
      </div>
    </div>
  );
};

export default GridCard;
