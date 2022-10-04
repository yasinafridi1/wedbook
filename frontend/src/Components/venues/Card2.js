import React from "react";
// import Image from "../../images/one.jpg";
const Card2 = ({ Image }) => {
  return (
    <div class="w-3/4 h-full mx-32 bg-slate-300 border border-gray-200">
      <div className="h-full w-full flex justify-between items-center">
        <div className="h-full w-1/3">
          <img className="w-full h-full" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card2;
