import React from "react";
import StudentNav from "../../Components/StudentNav";

const SelectSem = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Select Semester</h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Available Semesters</th>
              <th className="courses-table-data">Duration</th>
              <th className="courses-table-data"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td
                className="courses-table-data"
                data-label="Available Semesters"
              >
                2023/2024 1st Semester
              </td>
              <td className="courses-table-data" data-label="Duration">
                20/08/2023 - 20/12/2023
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">Pick Semester</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default SelectSem;
