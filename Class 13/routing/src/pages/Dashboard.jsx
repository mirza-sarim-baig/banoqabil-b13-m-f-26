import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full p-5">
        <Navbar />
        <div className="mt-6 shadow-md shadow-olive-200 rounded-md p-5">
          <Outlet />
          {/* <h1>kasjdflkjasdlkfj</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
