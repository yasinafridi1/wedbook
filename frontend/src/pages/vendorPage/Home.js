import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import Dashboard from "../../Components/Dashboard/Dashboard";
const Home = () => {
  return (
    <>
      <div className="flex w-full h-full justify-between">
        <div>
        <Sidebar />
        <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Home;