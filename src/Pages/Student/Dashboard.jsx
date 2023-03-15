import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";
import logoutIcon from "../../Icons/logout.svg";
import { Context } from "../../Context/Context";
import "../../CSS/Profile.css";
import "../../CSS/StudentNav.css";

const Dashboard = ({ student }) => {
  const [studentInfo, setStudentInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const { coordinator, dispatch } = useContext(Context);
  const navigate = useNavigate();

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
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  function logOut() {
    dispatch({ type: "LOGOUT" });
    navigate("/studentlogin");
  }

  return (
    <>
      {loading ? (
        <div className="center-load">
          <div className="borders-profile"></div>
        </div>
      ) : loadFail ? (
        <div className="center-load">
          <div className="error">{errMessage}</div>
          <button className="login-btn" onClick={logOut}>Logout</button>
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
