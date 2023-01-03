import { React, useState } from "react";
// import Home from "./pages/Customer/Home";
// import Venues from "./Components/venues/Venues";
// import Vendor from "./pages/vendorPage/Vendor";
import AdminRoutes from "./AdminRoutes";
import VendorRoutes from "./VendorRoutes";
import CustomerRoutes from "./CustomerRoutes";

// import VendorPageRouting from "./pages/VendorPageRouting";
function App() {
  const [user, setuser] = useState("vendor");

  return (
    <>
      {user == "admin" ? (
        <AdminRoutes />
      ) : user === "vendor" ? (
        <VendorRoutes />
      ) : (
        <CustomerRoutes />
      )}
    </>
  );
}

export default App;
