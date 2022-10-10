import React, { useState } from "react";
import Grid from "./Grid";
import List from "./List";
import { BiListUl } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";


const Filters = () => {
  const [grid, setGrid] = useState(true);
  return (
    <div className="py-24">
      <div className="px-8 flex justify-between w-full">
        <div>
          <label className="pl-8 pr-3 font-semibold text-lg" htmlFor="city">
            City
          </label>
          <select name="city" id="city" className="inputs pl-2 text-xs">
            <option value="dalazak">Dalazak</option>
            <option value="charsadda">Charsadda</option>
            <option value="warsak">Warsak</option>
          </select>
        </div>
        <div>
          <label className="pl-8 pr-3 font-semibold text-lg" htmlFor="rating">
            Rating
          </label>
          <select name="rating" id="rating" className="inputs pl-2 text-xs">
            <option value="dalazak">All Ratings </option>
            <option value="charsadda">Rated 4+</option>
            <option value="warsak">Rated 4.5+</option>
          </select>
        </div>
        <div>
          <label className="pl-8 pr-3 font-semibold text-lg" htmlFor="budget">
            Budget
          </label>
          <select name="budget" id="budget" className="inputs pl-2 text-xs">
            <option value="above_50k">Above then 50k</option>
            <option value="equal_100k">Equal to 100k</option>
            <option value="above_100k">Above then 100k</option>
          </select>
        </div>
        <div>
          <label className="pl-4 pr-3 font-semibold text-lg" htmlFor="space">
            Space
          </label>
          <select name="space" id="space" className="inputs px-2 mr-2 text-xs">
            <option value="less_250">less then 500</option>
            <option value="equal_1000">Equal to 1000</option>
            <option value="above_1000">Above then 1000</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between w-full pt-8 px-10">
        <div className="pl-3">
          <h1 className="text-3xl font-bold">Banquet Halls</h1>
          <h6 className="text-sm font-semibold text-teal-600">Book, Book and Book</h6>
        </div>
        <div>
          <div className="flex justify-center items-center w-full ">
            <BiListUl className="listIcon"
              onClick={() => setGrid(false)} />
            <BsFillGridFill className="gridIcon"
              onClick={() => setGrid(true)} />
            <input
              className="inputs pl-2 flex justify-center items-center w-48 h-8"
              type="text"
              placeholder="Search venues"
            />
            <i className="fa-solid fa-magnifying-glass iconDiv"></i>
          </div>
        </div>
      </div>
      {grid ? <Grid /> : <List />}
    </div>
  );
};

export default Filters;
