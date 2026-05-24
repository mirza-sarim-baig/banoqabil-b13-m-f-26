import React from "react";
import { Link, Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <ul className="tab-navbar">
        <li>
          <Link to="students" className="tab-link">
            Students
          </Link>
        </li>

        <li>
          <Link to="admins" className="tab-link">
            Admins
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default Home;
