import React from "react";
import "./venues.css";
const Search = () => {
  return (
    <div className="w-full flex justify-between items-center pt-24 pb-5">
      <div className="flex justify-center items-center">
        <span className="text-xl font-medium">City</span>
        <input
          className="inputs px-4 flex justify-center items-center w-36 h-8"
          type="text"
          placeholder="Search here"
        />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-xl font-medium">Rating</span>
        <input
          className="inputs flex justify-center items-center w-36 h-8"
          type="text"
          placeholder="Search here"
        />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-xl font-medium">Budget</span>
        <input
          className="inputs flex justify-center items-center w-36 h-8"
          type="text"
          placeholder="Search here"
        />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-xl font-medium">Space</span>
        <input
          className="inputs flex justify-center items-center w-36 h-8 mr-20"
          type="text"
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default Search;
