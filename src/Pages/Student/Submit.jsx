import React from "react";
import StudentNav from "../../Components/StudentNav";

const Submit = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Review & Submit</h1>
        <ul className="timetable-list">
          <li className="timetable-data">
            Selected Semester: 2023/2024 1st Semester
          </li>
          <li className="timetable-data">Number of Courses Selected: 8</li>
          <li className="timetable-data">Total Credit Units: 22</li>
        </ul>
        <button className="btn-medium">Submit</button>
      </section>
    </>
  );
};

export default Submit;
