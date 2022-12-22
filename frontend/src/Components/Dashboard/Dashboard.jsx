import React from "react";
import SmallTable from "../Order/SmallTable";
// import TableHeader from "../Order/TableHeader";
import Buttons from "./Buttons";
import Charts from "./Charts";
import CustomerReview from "./CustomerReview";
import SmallCalender from "./SmallCalender";

const Dashboard = () => {
  function btnCliked1(params) {
    alert("button clicked1");
  }
  function btnCliked2(params) {
    alert("button clicked2");
  }
  function btnCliked3(params) {
    alert("button clicked3");
  }
  function btnCliked4(params) {
    alert("button clicked4");
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
        <div className="py-10 px-6 flex justify-between">
          <SmallCalender />
          <CustomerReview />
        </div>
        <div className="py-4 flex justify-between">
          <Charts width={550} height={360} />
          <SmallTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
