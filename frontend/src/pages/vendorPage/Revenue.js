import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import LineCharts from "../../Components/Revenue/LineCharts";
const Revenue = () => {
  return (
    <>
      <div className="flex w-full h-full justify-between">
        <div>
          <Sidebar />
          <LineCharts />
        </div>
      </div>
    </>
  );
};

export default Revenue;
