import React from "react";
import StudentNav from "../../Components/StudentNav";

const Courses = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container table">
        <h1 className="landing-main-header-blue">Semester Courses</h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Course</th>
              <th className="courses-table-data">Course Code</th>
              <th className="courses-table-data">Facilitator</th>
              <th className="courses-table-data">Credit Units</th>
              <th className="courses-table-data">More</th>
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
              <td className="courses-table-data" data-label="Facilitator">
                Enoch Ayodele
              </td>
              <td className="courses-table-data" data-label="Credit Units">
                3
              </td>
              <td className="courses-table-data" data-label="More">
                <button className="courses-table-button">More</button>
              </td>
            </tr>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Course">
                Internet Technologies
              </td>
              <td className="courses-table-data" data-label="Course Code">
                SENG401
              </td>
              <td className="courses-table-data" data-label="Facilitator">
                Enoch Ayodele
              </td>
              <td className="courses-table-data" data-label="Credit Units">
                3
              </td>
              <td className="courses-table-data" data-label="More">
                <button className="courses-table-button">More</button>
              </td>
            </tr>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Course">
                Internet Technologies
              </td>
              <td className="courses-table-data" data-label="Course Code">
                SENG401
              </td>
              <td className="courses-table-data" data-label="Facilitator">
                Enoch Ayodele
              </td>
              <td className="courses-table-data" data-label="Credit Units">
                3
              </td>
              <td className="courses-table-data" data-label="More">
                <button className="courses-table-button">More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Courses;
