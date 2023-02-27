import React from "react";
import StudentNav from "../../Components/StudentNav";

const Courselist = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">
          Courselist for Software Engineering
        </h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Course</th>
              <th className="courses-table-data">Course Code</th>
              <th className="courses-table-data">Credit Units</th>
              <th className="courses-table-data">Facilitator</th>
              <th className="courses-table-data"></th>
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
              <td className="courses-table-data" data-label="Facilitator">
                Enoch Ayodele
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">Select Course</button>
              </td>
            </tr>
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
              <td className="courses-table-data" data-label="Facilitator">
                Enoch Ayodele
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">Select Course</button>
              </td>
            </tr>
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
              <td className="courses-table-data" data-label="Facilitator">
                Enoch Ayodele
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">Select Course</button>
              </td>
            </tr>
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
              <td className="courses-table-data" data-label="Facilitator">
                Enoch Ayodele
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">Select Course</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Courselist;
