import React from "react";
import { Link } from "react-router-dom";
import FacilitatorNav from "../../Components/FacilitatorNav";

const Courses = () => {
  return (
    <>
      <FacilitatorNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Courses</h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Course</th>
              <th className="courses-table-data">Course Code</th>
              <th className="courses-table-data">Credit Units</th>
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
              <td className="courses-table-data" data-label="">
                <Link to="/facilitator/course/details">
                  <button className="courses-table-button">More</button>
                </Link>
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

              <td className="courses-table-data" data-label="">
                <Link to="/facilitator/course/details">
                  <button className="courses-table-button">More</button>
                </Link>
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

              <td className="courses-table-data" data-label="">
                <Link to="/facilitator/course/details">
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

export default Courses;
