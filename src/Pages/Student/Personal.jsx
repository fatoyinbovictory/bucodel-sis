import React from "react";
import StudentNav from "../../Components/StudentNav";

const Personal = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
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
            <p className="personal-info-title">Course</p>
            <p className="personal-info">Software Engineering</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Level</p>
            <p className="personal-info">400</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">C.GPA</p>
            <p className="personal-info">4.2</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Sex</p>
            <p className="personal-info">Male</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Nationality</p>
            <p className="personal-info">Nigeria</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Country of Residence</p>
            <p className="personal-info">Nigeria</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Address</p>
            <p className="personal-info">No.32 Test Address, Lekki, Lagos State</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Personal;
