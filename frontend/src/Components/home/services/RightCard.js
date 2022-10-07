import React from "react";

const RightCard = ({ name }) => {
  return (
    <div
      className={`${
        name == "Catering" ? "bg-catering" : "bg-cook"
      } section h-52`}
    >
      <div className="wrapper h-full w-full flex justify-between items-center">
        <div className="Rimage h-full overflow-hidden">
          <a href="#">
            <img
              className="w-full h-full"
              src={`${process.env.PUBLIC_URL}/images/venues.jpg`}
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
    </div>
  );
};

export default RightCard;
