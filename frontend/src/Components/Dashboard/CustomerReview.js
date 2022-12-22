import React from "react";
import ReviewData from "../Data/ReviewData";
const CustomerReview = () => {
  console.log(ReviewData);
  return (
    <>
      <div className="w-[250px] h-[300px] bg-white Box">
        <h1 className="font-extrabold text-secular text-2xl py-2 pl-2 border-b border-gray-300">
          Recent Customers
        </h1>
        {ReviewData.map((item) => {
          return (
            <div className="flex py-2 border-b border-gray-300">
              <div>
                <img
                  className="w-[40px] h-[40px] ml-2 Review bg-blue-500"
                  src={item.photo}
                />
              </div>

              <div className="flex flex-col pl-3">
                <h1 className="text-md font-bold">{item.name}</h1>
                <span className="text-xs">{item.email}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CustomerReview;
