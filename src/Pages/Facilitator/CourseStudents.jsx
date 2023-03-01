import React from "react";
import FacilitatorNav from "../../Components/FacilitatorNav";

const CourseStudents = () => {
  return (
    <>
      <FacilitatorNav />
      <section className="profile-container">
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Student Name</th>
              <th className="courses-table-data">Program</th>
              <th className="courses-table-data">Score</th>
              <th className="courses-table-data"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Student Name">
                Olaleye Timilehin
              </td>
              <td className="courses-table-data" data-label="Program">
                Software Engineering
              </td>
              <td className="courses-table-data" data-label="Score">
                <input type="text" className="table-input"/>
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">Upload Score</button>
              </td>
            </tr>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Student Name">
                Fatoyinbo Victory
              </td>
              <td className="courses-table-data" data-label="Program">
                Computer Science
              </td>
              <td className="courses-table-data" data-label="Score">
                <input type="text" className="table-input"/>
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">Upload Score</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default CourseStudents;
