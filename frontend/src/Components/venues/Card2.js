import React from "react";
// import Image from "../../images/one.jpg";
const Card2 = ({ Image }) => {
  return (
    // hero div
    <div class="w-3/4 h-auto flex mx-32 bg-slate-300 border border-black">
      <div className="w-1/3 h-full">
        <img className="w-full h-full" src={Image} alt="image not found" />
      </div>

      <div className="w-2/3">
        {/* // TITLE */}
        <div className="w-full flex justify-between bg-yellow-100">
          <h2>Venue</h2>
          <span>⭐ 4.3 (32 reviews)</span>
        </div>
        {/* // Location */}
        <div className="text-sm px-6 pt-4">
          <i className="fa-sharp fa-solid fa-location-dot pr-2"></i>
          <span>Location Bilor plaza Peshawar</span>
        </div>
        {/* Discrp */}
        <p className="px-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          explicabo fugit velit? Sunt, ex iste deleniti ipsam, qui praesentium
          optio, recusandae nihil iusto sequi quibusdam!
        </p>
        {/* Price and read more */}
        <div className="w-full px-4 flex justify-between">
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
