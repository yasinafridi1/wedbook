import React from "react";
import Buttons from "../Dashboard/Buttons";
import RatingCard from "./RatingCard";

const Feedback = () => {
  return (
    <>
          <div className="flex px-12 gap-6 justify-around">
         <Buttons name="Feedbacks" order="Below 3"/>
         <Buttons name="Feedbacks" order="Above 3"/>
         <Buttons name="Feedbacks" order="All"/>
          </div>
          <div className="py-10 px-12 flex justify-center flex-col gap-5">
            <RatingCard/>
          </div>
    </>
  );
};

export default Feedback;