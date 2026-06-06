import React from "react";
import { Link, Outlet } from "react-router";

const Students = () => {
  const students = [
    {
      id: 1,
      name: "Ali Khan",
      age: 20,
      gender: "Male",
      course: "React JS",
      city: "Karachi",
      isActive: true,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      name: "Sara Ahmed",
      age: 22,
      gender: "Female",
      course: "Next JS",
      city: "Lahore",
      isActive: true,
      skills: ["React", "Firebase"],
    },
    {
      id: 3,
      name: "Ahmed Raza",
      age: 19,
      gender: "Male",
      course: "MERN Stack",
      city: "Islamabad",
      isActive: false,
      skills: ["Node JS", "MongoDB"],
    },
    {
      id: 4,
      name: "Fatima Noor",
      age: 21,
      gender: "Female",
      course: "React JS",
      city: "Karachi",
      isActive: true,
      skills: ["HTML", "CSS", "React"],
    },
    {
      id: 5,
      name: "Usman Tariq",
      age: 23,
      gender: "Male",
      course: "Full Stack",
      city: "Faisalabad",
      isActive: false,
      skills: ["JavaScript", "Express JS"],
    },
  ];
  return (
    <>
      <h1>Students</h1>
      <Link to="1">Std1</Link>
      <Link to="2">Std2</Link>
      <Link to="3">Std3</Link>
      <Outlet />
    </>
  );
};

export default Students;
