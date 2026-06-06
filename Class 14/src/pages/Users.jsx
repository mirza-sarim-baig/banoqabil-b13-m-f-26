import React from "react";
import { Link, Outlet } from "react-router";

const Users = () => {
  return (
    <>
      {/* NAVBAR  */}
      <div className="flex justify-center gap-12 w-full  ">
        <Link
          to={""}
          className="shadow-md shadow-olive-200 hover:bg-olive-100 py-2 px-5 rounded-lg"
        >
          Teachers
        </Link>
        <Link
          to={"admin"}
          className="shadow-md shadow-olive-200 hover:bg-olive-100 py-2 px-5 rounded-lg"
        >
          Admins
        </Link>
        <Link
          to={"students"}
          className="shadow-md shadow-olive-200 hover:bg-olive-100 py-2 px-5 rounded-lg"
        >
          Students
        </Link>
      </div>
      {/* USERS CONTENT  */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Users;
