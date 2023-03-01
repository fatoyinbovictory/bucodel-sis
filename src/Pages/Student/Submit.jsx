import React from "react";
import StudentNav from "../../Components/StudentNav";

const Submit = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Review & Submit</h1>
        <ul className="personal-info-list">
          <li className="personal-info-row">
            <p className="personal-info-title">Selected Semester</p>
            <p className="personal-info">2023/2024 1st Semester</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Number of Courses Selected</p>
            <p className="personal-info">8</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Total Credit Units</p>
            <p className="personal-info">22</p>
          </li>
        </ul>
        <button className="btn-medium">Submit</button>
      </section>
    </>
  );
};

export default Submit;
