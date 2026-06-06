import React, { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import { useParams } from "react-router";
import axios from "axios";

const AdminDetails = () => {
  let userId = useParams().id;
  userId = Number(userId);

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios automatically returns response.data parsed as an object
        const response = await axios.get(
          `https://fakestoreapi.com/users/${userId}`,
        );
        setData(response.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    console.log("userData", data);
  }, [data]);

  if (!data?.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="my-5 flex flex-wrap gap-10 justify-center">
      <AdminCard user={data} />
    </div>
  );
};

export default AdminDetails;
