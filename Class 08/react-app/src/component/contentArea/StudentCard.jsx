import React from "react";
import "./StudentCard.css";

const StudentCard = ({ name, email, course, score, status, image }) => {
  return (
    <div className={`student-card ${status}`}>
      <div className="card-header">
        <img src={image} alt={name} className="student-image" />
        <div className="status-badge">{status}</div>
      </div>

      <div className="card-body">
        <h3 className="student-name">{name}</h3>
        <p className="student-course">{course}</p>

        <div className="info-section">
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Score:</span>
            <span className="info-value score">{score}%</span>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${score}%` }}></div>
        </div>

        <button className="view-btn">View Profile</button>
      </div>
    </div>
  );
};

export default StudentCard;
