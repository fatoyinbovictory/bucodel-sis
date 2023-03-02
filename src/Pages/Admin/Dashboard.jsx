import React from "react";
import AdminNav from "../../Components/AdminNav";

const Dashboard = () => {
  return (
    <>
    <AdminNav/>
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Welcome, XXX</h1>
        <div className="box-row">
          <section className="dashboard-box">
            <h1>232</h1>
            <h3>Total Students</h3>
          </section>
          <section className="dashboard-box">
            <h1>17</h1>
            <h3>Total Facilitators</h3>
          </section>
        </div>
        <div className="box-row">
          <section className="dashboard-box">
            <h1>2023/2024.1</h1>
            <h3>Current Semester</h3>
          </section>
          <section className="dashboard-box">
            <h1>5</h1>
            <h3>Total Programs</h3>
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
