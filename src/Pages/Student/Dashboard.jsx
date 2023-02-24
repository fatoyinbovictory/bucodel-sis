import React from "react";
import StudentNav from "../../Components/StudentNav";
import "../../CSS/StudentNav.css";
import "../../CSS/Profile.css";

const Dashboard = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Welcome, Victory</h1>
        <div className="box-row">
          <section className="dashboard-box">
            <h1>3</h1>
            <h3>Selected Courses</h3>
          </section>
          <section className="dashboard-box">
            <h1>19</h1>
            <h3>Total Credit Units</h3>
          </section>
        </div>
        <div className="box-row">
          <section className="dashboard-box">
            <h1>4.2</h1>
            <h3>Current C.GPA</h3>
          </section>
          <section className="dashboard-box">
            <h1>19</h1>
            <h3>Total Credit Units</h3>
          </section>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
