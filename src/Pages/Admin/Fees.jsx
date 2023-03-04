import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../Components/AdminNav";

const Fees = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Student Fees Payments</h1>
        <div className="card-container">
          <div className="application-card">
            <div className="card-row">
              <p className="personal-info-title card">Name</p>
              <p className="personal-info card">Fatoyinbo Victory</p>
            </div>
            <div className="card-row">
              <p className="personal-info-title card">Semester</p>
              <p className="personal-info card">2023/2024-1</p>
            </div>
            <div className="card-row">
              <p className="personal-info-title card">Expected Payment</p>
              <p className="personal-info card">₦560,000</p>
            </div>
            <div className="card-row">
              <p className="personal-info-title card">Program</p>
              <p className="personal-info card">Software Engineering</p>
            </div>
            <div className="card-row">
              <Link to="specific">
                <button className="courses-table-button">View</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
