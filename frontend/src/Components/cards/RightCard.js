import React from "react";
import img from "../../images/card/one.jpg";
import { Link } from "react-router-dom";

const RightCard = ({ name }) => {
  return (
    <Link to={'/venues'}
      className={`${name == "Catering" ? "bg-catering" : "bg-cook"
        } cards`}
    >
      <img className="card-right-image" src={img} alt="" />
      <div className="w-[60%] flex justify-start items-center">
        <div className="pl-5 pr-5">
          <h1 className="text-ubunto text-primary text-2xl">{name}</h1>
          <p className="font-semibold text-gray-300">Book the best for you</p>
        </div>
      </div>
    </Link>
  );
};

export default RightCard;
