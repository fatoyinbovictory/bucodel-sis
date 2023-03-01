import React from "react";
import FacilitatorNav from "../../Components/FacilitatorNav";

const Details = () => {
  return (
    <>
      <FacilitatorNav />
      <section className="profile-container">
      <h1 className="landing-main-header-blue">Details</h1>
        <ul className="personal-info-list">
          <li className="personal-info-row">
            <p className="personal-info-title">Name</p>
            <p className="personal-info">Enoch Ayodele</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Current Semester</p>
            <p className="personal-info">2023/2024 1st Semester</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Email</p>
            <p className="personal-info">enayodele@gmail.com</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Phone Number</p>
            <p className="personal-info">08129324940</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Courses</p>
            <p className="personal-info">Internet Technologies</p>
            <p className="personal-info">Fundamentals of Software Engineering</p>
            <p className="personal-info">Human Computer Interaction</p>
            <p className="personal-info">Software Engineering Economics</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Number of Students</p>
            <p className="personal-info">127</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Sex</p>
            <p className="personal-info">Male</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Nationality</p>
            <p className="personal-info">Nigeria</p>
          </li>
          
        </ul>
      </section>
    </>
  );
};

export default Details;
