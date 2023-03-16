import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import FacilitatorNav from "../../Components/FacilitatorNav";

const Dashboard = ({ facilitator }) => {
  const [facInfo, setFacInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Facilitator's Home";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/facilitator/dashboard/${facilitator.id}`);
        setFacInfo(res.data);
        setLoading(false);
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <FacilitatorNav />
      {loading ? (
        <div className="center-load">
          <div className="borders-profile"></div>
        </div>
      ) : loadFail ? (
        <div className="center-load">
          <div className="error">{errMessage}</div>
        </div>
      ) : (
        <section className="profile-container loaded">
          <h1 className="landing-main-header-blue">Welcome, {facInfo.firstName}</h1>
          <div className="box-row">
            <section className="dashboard-box">
              <h1>{facInfo.courses.length}</h1>
              <h3>Total Courses </h3>
            </section>
            <section className="dashboard-box">
              <h1>{facInfo.phone}</h1>
              <h3>Phone</h3>
            </section>
          </div>
          <div className="box-row">
            <section className="dashboard-box">
              <h1>2023/2024.1</h1>
              <h3>Current Semester</h3>
            </section>
            <section className="dashboard-box">
              <h1>{facInfo.email}</h1>
              <h3>Email</h3>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
