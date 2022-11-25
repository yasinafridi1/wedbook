import React from "react";
import Charts from "../Dashboard/Charts";
import BarCharts from "../Dashboard/BarCharts";
import { useState } from "react";
import Buttons from "../Dashboard/Buttons";
const LineCharts = () => {
  const [chart, setChart] = useState(true);
  return (
    <>
      <>
        <div className="w-[100vw] h-[100vh] px-12">
          <div className="flex gap-6 justify-around">
            <Buttons
              name="Order this month"
              order="10"
              onClick={() => setChart(false)}
            />
            <Buttons name="Total order" order="150" onClick={()=>setChart(true)}/>
          </div>
          <div className="py-10 flex">
            {chart ? (
              <Charts width={800} height={300} />
            ) : (
              <BarCharts width={800} height={300} />
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default LineCharts;
