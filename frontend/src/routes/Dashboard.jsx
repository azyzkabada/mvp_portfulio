import React from "react";
import AdminNavbar from "../components/AdminBar.jsx";

//
const Dashboard = ({ handelDep }) => {
  console.log(handelDep);
  return (
    <>
    
      <AdminNavbar handelDep={handelDep} />
    </>
  );
};

export default Dashboard;
