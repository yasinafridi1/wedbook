import React from "react";
import TableBody from "./TableBody";
import { OrderData } from "../Data/OrderData";

const SmallTable = () => {
  return (
    <div className="py-1 px-2 flex justify-center w-[100vw] h-[320px]">
      <table className="table-auto bg-white order-table border-green-500 border">
        <thead className="border border-green-500 bg-green-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-sm">OrderId</th>
            <th className="px-4 py-2 text-left text-sm">CustomerName</th>
            <th className="px-4 py-2 text-left text-sm">Contact</th>
            <th className="px-4 py-2 text-left text-sm">From</th>
            <th className="px-4 py-2 text-left text-sm">To</th>
            <th className="px-4 py-2 text-left text-sm">Price</th>
          </tr>
        </thead>
        <tbody>
          {OrderData.map((data, Index) => {
            return <TableBody data={data} Index={Index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SmallTable;
