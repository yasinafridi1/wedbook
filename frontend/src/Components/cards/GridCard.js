import React from "react";
const GridCard = ({ data }) => {
  return (
    <div className="mx-4 max-w-sm bg-slate-300 rounded-lg border border-gray-200">
      <img className="rounded-t-lg w-full" src={data.image} alt="Vendor banner" />
      <div className="flex justify-between items-center px-4 pt-4">
        <span className="font-bold text-2xl">{data.name}</span>
        <span>⭐{data.rating}({data.reviewCount})</span>
      </div>
      <div className="text-sm px-6 pt-4">
        <i className="fa-sharp fa-solid fa-location-dot pr-2"></i>
        <span>{data.location}</span>
      </div>

      <div className="flex justify-between items-center px-4 mb-4 pt-4 pb-2">
        <h1 className="font-bold">
          Price/day: <span className="text-green-400">{data.price}</span>
        </h1>
        <a
          className="font-bold inline-block text-white px-6 py-1 bg-green-500"
          href={data.path}
        >
          Visit
        </a>
      </div>
    </div>
  );
};

export default GridCard;
