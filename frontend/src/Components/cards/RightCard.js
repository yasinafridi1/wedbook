import React from "react";
import img from "../../images/card/one.jpg";
import { Link } from "react-router-dom";

const RightCard = ({ name }) => {
  return (
    <Link to={'/venues'}
      className={`${name == "Catering" ? "bg-catering" : "bg-cook"
        } section h-52`}
    >
      <div className="wrapper h-full w-full flex justify-between items-center">
        <div className="Rimage h-full overflow-hidden">
          <a href="#">
            <img
              className="w-full h-full"
              src={img}
              alt=""
            />
          </a>
        </div>
        <div className="pr-12">
          <h1 className="text-3xl text-primary text-alkalami">{name}</h1>
          <h6 className="pt-1 text-lg">
            Book the best venue <br /> banquet hall
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default RightCard;
