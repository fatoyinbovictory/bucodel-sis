import React from "react";
import { Link } from "react-router-dom";
import StudentNav from "../../Components/StudentNav";

const Results = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Results</h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Semester</th>
              <th className="courses-table-data">Level</th>
              <th className="courses-table-data">Sem. Credit Hrs</th>
              <th className="courses-table-data">GPA</th>
              <th className="courses-table-data">C.GPA</th>
              <th className="courses-table-data"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Semester">
                2023/2024 - 1st Sem.
              </td>
              <td className="courses-table-data" data-label="Level">
                100
              </td>
              <td className="courses-table-data" data-label="Sem. Credit Hrs">
                18
              </td>
              <td className="courses-table-data" data-label="GPA">
                4.2
              </td>
              <td className="courses-table-data" data-label="C.GPA">
                4.2
              </td>
              <td className="courses-table-data" data-label="">
                {/* <button className="courses-table-button">More</button> */}
                <Link to="2023-2024-1">
                  <button className="courses-table-button">More</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Results;
