import React from "react";
import Image from "../../../images/Image.jpg";
const Card = ({ name }) => {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <a href="#">
        <img class="rounded-t-lg" src={Image} alt="" />
      </a>
      <div class="p-5 ">
        <h1 className="header-text text-3xl text-center ">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
