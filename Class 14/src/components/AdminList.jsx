import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminCard from "./AdminCard";

const AdminList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios automatically returns response.data parsed as an object
        const response = await axios.get("https://fakestoreapi.com/users");
        setData(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className="my-5 flex flex-wrap gap-10 justify-center">
      {data.map((user) => (
        <AdminCard user={user} />
      ))}
    </div>
  );
};

export default AdminList;
