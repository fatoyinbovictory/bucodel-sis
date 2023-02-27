import React from "react";
import StudentNav from "../../Components/StudentNav";

const SpecificResult = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">2023/2024 1st Sem</h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Course</th>
              <th className="courses-table-data">Course Code</th>
              <th className="courses-table-data">Credit Units</th>
              <th className="courses-table-data">Score</th>
              <th className="courses-table-data">Grade</th>
              <th className="courses-table-data">Grade Points Recieved</th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Course">
                Internet Technologies
              </td>
              <td className="courses-table-data" data-label="Course Code">
                SENG401
              </td>
              <td className="courses-table-data" data-label="Credit Units">
                3
              </td>
              <td className="courses-table-data" data-label="Score">
                88
              </td>
              <td className="courses-table-data" data-label="Grade">
                A
              </td>
              <td className="courses-table-data" data-label="Grade Points Recieved">
                15
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default SpecificResult;
