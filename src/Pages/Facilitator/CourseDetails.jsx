import React from "react";
import { Link } from "react-router-dom";
import FacilitatorNav from "../../Components/FacilitatorNav";

const CourseDetails = () => {
  return (
    <>
      <FacilitatorNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Internet Technologies</h1>
        <ul className="personal-info-list">
          <li className="personal-info-row">
            <p className="personal-info-title">Course Code</p>
            <p className="personal-info">SENG401</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Total Students</p>
            <p className="personal-info">59</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Course Time</p>
            <p className="personal-info">Monday: 10am-12pm</p>
            <p className="personal-info">Friday: 9am-10am</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Set LMS Class Link</p>
            <div className="form-wrap profile">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="middleName"
                  required
                />
                <label htmlFor="lastName">Link</label>
              </div>
            </div>
            <button className="apply-button">Set</button>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Upload Academic Media</p>
            <input type="file" name="upload-fees" id="" />
          </li>
          <Link to="students" className="facilitator-link">View & Grade Students</Link>
        </ul>
      </section>
    </>
  );
};

export default CourseDetails;
