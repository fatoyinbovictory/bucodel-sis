import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const Dashboard = ({ admin }) => {
  const [adminInfo, setAdminInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/dashboard/${admin.id}`);
        setAdminInfo(res.data);
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
      <AdminNav />
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
          <h1 className="landing-main-header-blue">
            Welcome, {adminInfo.adminName.firstName}
          </h1>
          <div className="box-row">
            <section className="dashboard-box">
              <h1>{adminInfo.students}</h1>
              <h3>Total Students</h3>
            </section>
            <section className="dashboard-box">
              <h1>{adminInfo.facilitators}</h1>
              <h3>Total Facilitators</h3>
            </section>
          </div>
          <div className="box-row">
            <section className="dashboard-box">
              <h1>2023/2024.1</h1>
              <h3>Current Semester</h3>
            </section>
            <section className="dashboard-box">
              <h1>{adminInfo.programs}</h1>
              <h3>Total Programs</h3>
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
