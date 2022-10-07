import React from "react";
import "./venues.css";
const Search = () => {
  return (
    <div className="w-full flex justify-between items-center pt-24 pb-5">
      <div className="flex justify-center items-center">
        <span className="text-xl font-medium">City</span>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <select
              className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
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
          className="inputs px-8 flex justify-center items-center w-36 h-8 mr-20"
          type="text"
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default Search;
