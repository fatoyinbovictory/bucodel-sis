import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";
import "../../CSS/StudentNav.css";
import "../../CSS/Profile.css";

const Dashboard = ({ student }) => {
  const [studentInfo, setStudentInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Student's Home";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/student/dashboard/${student.id}`);
        setStudentInfo(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        console.log(error.response.data.error);
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="center-load">
          <div className="borders-profile"></div>
        </div>
      ) : loadFail ? (
        <div className="center-load">
          <div className="error">{errMessage}</div>
        </div>
      ) : (
        <div className="loaded">
          <StudentNav />
          <section className="profile-container">
            <h1 className="landing-main-header-blue">
              Welcome, {studentInfo.firstName}
            </h1>
            <div className="box-row">
              <section className="dashboard-box">
                <h1>
                  {studentInfo.courses ? studentInfo.courses.length : "0"}
                </h1>
                <h3>Selected Courses</h3>
              </section>
              <section className="dashboard-box">
                <h1>{studentInfo.matricNo}</h1>
                <h3>Matric Number</h3>
              </section>
            </div>
            <div className="box-row">
              <section className="dashboard-box">
                <h1>{studentInfo.program}</h1>
                <h3>Program</h3>
              </section>
              <section className="dashboard-box">
                <h1>{studentInfo.semester ? studentInfo.semester : "None"}</h1>
                <h3>Current Semester</h3>
              </section>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Dashboard;
