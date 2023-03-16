import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const Details = ({ admin }) => {
  const [adminInfo, setAdminInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Admin Details";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/getDetails/${admin.id}`);
        setAdminInfo(res.data);
        setLoading(false);
        console.log(res.data);
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
          <h1 className="landing-main-header-blue">Details</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Admin</p>
              <p className="personal-info">
                {adminInfo.admin.firstName} {adminInfo.admin.lastName}
              </p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Current Semester</p>
              <p className="personal-info">2023/2024 1st Semester</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Email</p>
              <p className="personal-info">{adminInfo.admin.email}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Phone Number</p>
              <p className="personal-info">{adminInfo.admin.phone}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Total No. of Programs</p>
              <p className="personal-info">{adminInfo.programs}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Facilitators</p>
              <p className="personal-info">{adminInfo.facilitators}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Number of Students</p>
              <p className="personal-info">{adminInfo.approvedStudents}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">
                Students Registered This Semester
              </p>
              <p className="personal-info">{adminInfo.registeredStudents}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Students Applications</p>
              <p className="personal-info">{adminInfo.appliedStudents}</p>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Details;
