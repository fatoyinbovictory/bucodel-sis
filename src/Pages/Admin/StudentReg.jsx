import React from "react";
import AdminNav from "../../Components/AdminNav";

const StudentReg = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Semester Registration</h1>
        <ul className="personal-info-list">
          <li className="personal-info-row">
            <p className="personal-info-title">Name</p>
            <p className="personal-info">Victory Fatoyinbo Oluwatayo</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Matric Number</p>
            <p className="personal-info">19/1865</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Email</p>
            <p className="personal-info">vicfatoyinbo@gmail.com</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Phone Number</p>
            <p className="personal-info">08129324940</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Program</p>
            <p className="personal-info">Software Engineering</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Semester</p>
            <p className="personal-info">2023/2024 1st Semester</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Courses Selected</p>
            <p className="personal-info">Internet Technologies</p>
            <p className="personal-info">Internet Technologies</p>
            <p className="personal-info">Internet Technologies</p>
            <p className="personal-info">Internet Technologies</p>
          </li>
          </ul>
          <button className="btn-medium">Approve</button>
          <button className="btn-medium red">Deny</button>
      </section>
    </>
  );
};

export default StudentReg;
