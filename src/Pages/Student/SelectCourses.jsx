import React from "react";
import { Link } from "react-router-dom";
import StudentNav from "../../Components/StudentNav";

const SelectCourses = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Select Courses</h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Programs</th>
              <th className="courses-table-data"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Programs">
                Software Engineering
              </td>
              <td className="courses-table-data" data-label="">
                <Link to="courselist">
                  <button className="courses-table-button">Open Courses</button>
                </Link>
              </td>
            </tr>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Programs">
                Computer Science
              </td>
              <td className="courses-table-data" data-label="">
                <Link to="courselist">
                  <button className="courses-table-button">Open Courses</button>
                </Link>
              </td>
            </tr>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Programs">
                Accounting
              </td>
              <td className="courses-table-data" data-label="">
                <Link to="courselist">
                  <button className="courses-table-button">Open Courses</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default SelectCourses;
