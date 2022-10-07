import React from "react";
import "./venues.css";
// import Image from "../../images/one.jpg";
const Card2 = ({ Image }) => {
  return (
    // hero div
    <div className="w-3/4 listCard rounded-lg flex mx-32 bg-slate-300">
      <div className="w-1/3 h-full">
        <img
          className="w-full h-full overflow-hidden rounded-l-lg"
          src={Image}
          alt="image not found"
        />
      </div>

      <div className="w-2/3 h-full p-4">
        {/* // TITLE */}
        <div className="w-full flex justify-between  font-bold text-xl">
          <h2>Venue</h2>
          <span>⭐ 4.3 (32 reviews)</span>
        </div>
        {/* // Location */}
        <div className="text-sm pt-4">
          <i className="fa-sharp fa-solid fa-location-dot pr-2"></i>
          <span>Location Bilor plaza Peshawar</span>
        </div>
        {/* Discrp */}
        <div className="listViewtextDiv">
          <p className="pt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            veniam laborum vel expedita rerum sit omnis placeat, nesciunt nam
            sunt.
          </p>
        </div>
        {/* Price and read more */}
        <div className="w-full flex justify-between mt-6">
          <h1 className="font-bold">
            Price/day: <span className="text-green-400">1000</span>
          </h1>
          <a
            className="font-bold inline-block text-white px-4 py-1 bg-green-500"
            href="/"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card2;
