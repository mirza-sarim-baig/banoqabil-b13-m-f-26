import React from "react";
import { useParams } from "react-router";

const StudentDetail = () => {
  const id = useParams();
  console.log("id", id);

  return <div>StudentDetail</div>;
};

export default StudentDetail;
