import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../Components/AdminNav";

const SpecificProgram = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Program Details</h1>
        <ul className="personal-info-list">
          <li className="personal-info-row">
            <p className="personal-info-title">Name</p>
            <p className="personal-info">Software Engineering</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Code</p>
            <p className="personal-info">SENG</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">No. Of Courses</p>
            <p className="personal-info">43</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Certification</p>
            <p className="personal-info">B.Sc Software Engineering</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Duration</p>
            <p className="personal-info">4 Years</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Program Head</p>
            <p className="personal-info">Olaleye Timilehin</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Fees</p>
            <p className="personal-info">₦560,000</p>
          </li>
          <li className="personal-info-row">
          <p className="personal-info-title">Courses</p>
        </li>
        </ul>
        <Link to="create">
          <button className="courses-table-button top">Create Course</button>
        </Link>
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
                <button className="courses-table-button">More</button>
              </td>
            </tr>
          </tbody>
        </table>
        <br /><br />
      </section>
    </>
  );
};

export default SpecificProgram;
