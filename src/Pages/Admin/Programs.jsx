import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../Components/AdminNav";

const Programs = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Programs</h1>
        <Link to="create">
          <button className="courses-table-button top">Create Program</button>
        </Link>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Program Name</th>
              <th className="courses-table-data">No. of Courses</th>
              <th className="courses-table-data">Duration</th>
              <th className="courses-table-data">Certification</th>
              <th className="courses-table-data"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Program Name">
                Software Engineering
              </td>
              <td className="courses-table-data" data-label="No. of Courses">
                23
              </td>
              <td className="courses-table-data" data-label="Duration(Years)">
                4 Years
              </td>
              <td className="courses-table-data" data-label="Certificate">
                B.Sc Software Engineering
              </td>
              <td className="courses-table-data" data-label="">
                <Link to="specific">
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

export default Programs;
