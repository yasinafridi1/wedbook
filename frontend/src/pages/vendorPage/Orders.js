import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import TableHeader from "../../Components/Order/TableHeader";

const Orders = () => {
  return (
    <>
      <div className="flex w-full h-full justify-between">
        <div>
          <Sidebar />
          <TableHeader/>
        </div>
      </div>
    </>
  );
};

export default Orders;