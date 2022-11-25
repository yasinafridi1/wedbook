import React from "react";
import img from "../../images/card/three.jpg";
import { Link } from "react-router-dom";

const LeftCard = ({ name }) => {
  return (
    <Link to={'/venues'}
      className={`${name == "Venues" ? "bg-venues" : "bg-decoration"
        } cards`}
    >
      <div className="w-[60%] flex justify-end items-center">
        <div className="text-right pr-5 pl-3">
          <h1 className="text-ubunto text-primary text-2xl">{name}</h1>
          <p className="font-semibold text-gray-300">Book the best for you</p>
        </div>
      </div>
      <img className="card-left-image" src={img} alt="" />
    </Link>
  );
};

export default LeftCard;
