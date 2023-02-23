import React from "react";
import StudentNav from "../../Components/StudentNav";
import "../../CSS/StudentNav.css";
import "../../CSS/Profile.css";

const Dashboard = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1>Welcome to home</h1>
      </section>
    </>
  );
};

export default Dashboard;
