import React from "react";

const Hall = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="pl-16 pt-6">
        <h1 className="text-3xl font-bold">Banquet Halls</h1>
        <h6 className="text-md text-green-500">Book, Book and Book</h6>
      </div>
      <div className="pr-16 flex justify-center items-center">
        <i className="fa-solid fa-list px-4 text-3xl transition-all ease-in-out duration-300 hover:text-green-500"></i>
        <i className="fa-solid fa-list pr-4 text-3xl transition-all ease-in-out duration-300 hover:text-green-500"></i>
        <input
          className="inputs px-4 flex justify-center items-center w-48 h-8"
          type="text"
          placeholder="Search venues"
        />

        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Hall;
