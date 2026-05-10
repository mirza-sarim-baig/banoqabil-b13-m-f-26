import React from "react";
import StudentCard from "./StudentCard";
import "./ContentArea.css";

const MainArea = () => {
  const students = [
    {
      id: 1,
      name: "Ayesha Khan",
      email: "ayesha.khan@email.com",
      course: "Web Development",
      score: 85,
      status: "active",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Ali Ahmed",
      email: "ali.ahmed@email.com",
      course: "Mobile Development",
      score: 78,
      status: "active",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Zainab Ali",
      email: "zainab.ali@email.com",
      course: "UI/UX Design",
      score: 92,
      status: "completed",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Hassan Raza",
      email: "hassan.raza@email.com",
      course: "Data Science",
      score: 65,
      status: "inactive",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Fatima Malik",
      email: "fatima.malik@email.com",
      course: "Cloud Computing",
      score: 88,
      status: "active",
      image:
        "https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Muhammad Saeed",
      email: "m.saeed@email.com",
      course: "AI & Machine Learning",
      score: 91,
      status: "completed",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="content-area">
      <div className="content-header">
        <h2>Student Performance Dashboard</h2>
        <p className="subtitle">Track and manage student progress</p>
      </div>

      <div className="cards-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            email={student.email}
            course={student.course}
            score={student.score}
            status={student.status}
            image={student.image}
          />
        ))}
      </div>
    </section>
  );
};

export default MainArea;
