import React from "react";
import Image from "../../images/one.jpg";
const Card2 = () => {
  return (
    <div class="ml-24 mr-16 my-8 w-9/12 h-full bg-slate-300 rounded-lg border border-gray-200">
      <div className="h-full w-full flex justify-start items-start">
        <div className="w-1/3 h-full">
          <img
            className="w-full h-4/5 rounded-lg mt-4 mx-4 pb-6"
            src={Image}
            alt=""
          />
        </div>
        <div className="w-4/5 h-full ml-8 pt-3 flex justify-between items-start border-2 border-black">
          <div>
            <h1>
              <h1 className="text-2xl font-bold pl-3">Venues</h1>
            </h1>
          </div>
          <div>
            <span className="pr-8 font-bold">⭐4.3(32 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
