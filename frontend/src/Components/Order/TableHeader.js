import React from "react";
import Buttons from "../Dashboard/Buttons";
// import TableBody from "./TableBody";
// import { OrderData } from "../Data/OrderData";
import OrderCalendar from "./OrderCalendar";
const TableHeader = () => {
  return (
    <>
      <div className="flex px-12 gap-6 justify-around">
        <Buttons name="Request" order="3" />
        <Buttons name="Order of this month" order="10" />
        <Buttons name="All Order" order="35" />
      </div>
      <div><OrderCalendar/></div>
      {/* <div className="py-8 flex justify-center w-[100vw] h-[100vh]">
        <table className="table-auto mt-2 bg-white order-table">
          <thead className="border border-green-500 bg-green-500">
            <tr>
              <th className="px-4 py-2 text-left text-sm">OrderId</th>
              <th className="px-4 py-2 text-left text-sm">CustomerName</th>
              <th className="px-4 py-2 text-left text-sm">Contact</th>
              <th className="px-4 py-2 text-left text-sm">From</th>
              <th className="px-4 py-2 text-left text-sm">To</th>
              <th className="px-4 py-2 text-left text-sm">Price</th>
              <th className="px-4 py-2 text-left text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {OrderData.map((data, Index) => {
              return <TableBody data={data} Index={Index} />;
            })}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default TableHeader;
