import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./AdminRoutes";
import VendorRoutes from "./VendorRoutes";
import CustomerRoutes from "./CustomerRoutes";
import { auth } from "./redux/action/authActions";
import { logout } from "./redux/action/authActions";



function App() {
  let userRole = "customer";
  const dispatch = useDispatch();
  useEffect(() => {
    const data = window.localStorage.getItem('user');
    dispatch(auth(JSON.parse(data)));
    if (!data) {
      dispatch(logout());
    }
  }, []);

  const user = useSelector((state) => state.userInfo.user);
  if (user.payload) {
    userRole = user.payload.role;
  } else {
    userRole = "customer";
  }


  return (
    <>
      {userRole == "admin" ? (
        <AdminRoutes />
      ) : userRole === "vendor" ? (
        <VendorRoutes />
      ) : (
        <CustomerRoutes />
      )}
    </>
  );
}

export default App;
