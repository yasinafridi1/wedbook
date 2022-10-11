import React from "react";

const ListCard = ({ data }) => {
  return (
    // hero div
    <div className="w-3/4 listCard rounded-lg flex mx-32 bg-slate-50">
      <div className="w-1/3 h-full">
        <img
          className="w-full h-full overflow-hidden rounded-l-lg"
          src={data.image}
          alt="image not found"
        />
      </div>

      <div className="w-2/3 h-full p-4">
        {/* // TITLE */}
        <div className="w-full flex justify-between  font-bold text-xl">
          <h2>{data.name}</h2>
          <span className="text-sm font-semibold">⭐ {data.rating}</span>
        </div>
        {/* // Location */}
        <div className="text-sm pt-4">
          <i className="fa-sharp fa-solid fa-location-dot pr-2"></i>
          <span>{data.location}</span>
        </div>
        {/* Discrp */}
        <div className="listViewtextDiv">
          <p className="pt-2 ">
            {data.about}
          </p>
        </div>
        {/* Price and read more */}
        <div className="w-full flex justify-between mt-6">
          <h1 className="font-bold">
            Price/day: <span className="text-primary">{data.price}</span>
          </h1>
          <a
            className="font-bold inline-block text-white px-4 py-1 bg-primary hover:bg-teal-400"
            href={data.path}
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
