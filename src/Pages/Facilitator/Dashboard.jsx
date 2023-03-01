import React from "react";
import FacilitatorNav from "../../Components/FacilitatorNav";

const Dashboard = () => {
  return (
    <>
      <FacilitatorNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Welcome, XXXX</h1>
        <div className="box-row">
          <section className="dashboard-box">
            <h1>6</h1>
            <h3>Total Courses </h3>
          </section>
          <section className="dashboard-box">
            <h1>127</h1>
            <h3>Total Students</h3>
          </section>
        </div>
        <div className="box-row">
          <section className="dashboard-box">
            <h1>2023/2024.1</h1>
            <h3>Current Semester</h3>
          </section>
          <section className="dashboard-box">
            <h1>19</h1>
            <h3>Total Something</h3>
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
