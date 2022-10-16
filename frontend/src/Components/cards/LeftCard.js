import React from "react";
import img from "../../images/card/three.jpg";
import { Link } from "react-router-dom";

const LeftCard = ({ name }) => {
  return (
    <Link to={'/venues'}
      className={`${name == "Venues" ? "bg-venues" : "bg-decoration"
        } section h-52`}
    >
      <div className="wrapper h-full w-full flex justify-between items-center">
        <div className="pl-12">
          <h1 className="text-3xl text-primary text-alkalami">{name}</h1>
          <h6 className="pt-1 text-lg">
            Book the best venue <br /> banquet hall
          </h6>
        </div>
        <div className="image h-full overflow-hidden">
          <a href="#">
            <img
              className="w-full h-full"
              src={img}
              alt=""
            />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default LeftCard;
