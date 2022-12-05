import React from "react";
import BarCharts from "./BarCharts";
import Buttons from "./Buttons";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] px-12">
        <div className="flex gap-6 justify-around">
          <Buttons name="Happy Customer" order="100"  />
          <Buttons name="Total Orders" order="150" />
          <Buttons name="Monthly Revenue" order="350K" />
          <Buttons name="Orders Request" order="15" />
        </div>
        <div className="py-10 flex">
          <Charts width={410} height={300} />
          <BarCharts width={410} height={300} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
