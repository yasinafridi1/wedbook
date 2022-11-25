import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
// import Dashboard from "../../Components/Dashboard/Dashboard";
const Profile = () => {
  return (
    <>
      <div className="flex w-full h-full justify-between">
        <div>
          <Sidebar />
          <h1>Profile</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
