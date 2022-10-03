import React from "react";
const Card = ({ Image }) => {
  return (
    <div class="mx-4 max-w-sm bg-slate-300 rounded-lg border border-gray-200">
      <a href="#">
        <img class="rounded-t-lg w-full" src={Image} alt="" />
      </a>
      <div className="flex justify-between items-center px-4 pt-4">
        <span className="font-bold text-2xl">Venue</span>
        <span>⭐4.3(32 reviews)</span>
      </div>
      <div className="text-sm px-6 pt-4">
        <i className="fa-sharp fa-solid fa-location-dot pr-2"></i>
        <span>Location Bilor plaza Peshawar</span>
      </div>

      <div className="flex justify-between items-center px-4 mb-4 pt-4 pb-2">
        <h1 className="font-bold">
          Price/day: <span className="text-green-400">1000</span>
        </h1>

        <a
          className="font-bold inline-block text-white px-6 py-1 bg-green-500"
          href="/"
        >
          Visit
        </a>
      </div>
    </div>
  );
};

export default Card;
