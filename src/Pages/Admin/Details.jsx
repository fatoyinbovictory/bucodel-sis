import React from "react";
import AdminNav from "../../Components/AdminNav";

const Details = () => {
  return (
    <>
    <AdminNav/>
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Details</h1>
        <ul className="personal-info-list">
          <li className="personal-info-row">
            <p className="personal-info-title">Admin</p>
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
            <p className="personal-info-title">Total No. of Courses</p>
            <p className="personal-info">55</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Facilitators</p>
            <p className="personal-info">14</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Total No. of Programs</p>
            <p className="personal-info">12</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Number of Students</p>
            <p className="personal-info">232</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Students Registered This Semester</p>
            <p className="personal-info">175</p>
          </li>
          <li className="personal-info-row">
            <p className="personal-info-title">Students Applications</p>
            <p className="personal-info">8</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Details;
