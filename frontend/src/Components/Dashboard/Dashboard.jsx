import React from "react";
import BarCharts from "./BarCharts";
import Buttons from "./Buttons";
import Charts from "./Charts";

const Dashboard = () => {
  function btnCliked1(params) {
    alert('button clicked1');
  }
  function btnCliked2(params) {
    alert('button clicked2');
  }
  function btnCliked3(params) {
    alert('button clicked3');
  }
  function btnCliked4(params) {
    alert('button clicked4');
  }
  return (
    <>
      <div className="w-[100vw] h-[100vh] px-12">
        <div className="flex gap-6 justify-around">
          <Buttons onClick={btnCliked1} name="Happy Customer" order="100" />
          <Buttons onClick={btnCliked2} name="Total Orders" order="150" />
          <Buttons onClick={btnCliked3} name="Monthly Revenue" order="350K" />
          <Buttons onClick={btnCliked4} name="Orders Request" order="15" />
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
