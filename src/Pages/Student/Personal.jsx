import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Personal = ({ student }) => {
  const [studentInfo, setStudentInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Student's Details";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/student/getDetails/${student.id}`);
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
  return (
    <>
      <StudentNav />
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
          <section className="profile-container">
            <ul className="personal-info-list">
              <li className="personal-info-row">
                <p className="personal-info-title">Name</p>
                <p className="personal-info">{`${studentInfo.firstName} ${studentInfo.lastName}`}</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Matric Number</p>
                <p className="personal-info">{studentInfo.matricNo}</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Email</p>
                <p className="personal-info">{studentInfo.email}</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Phone Number</p>
                <p className="personal-info">{studentInfo.phone}</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Program</p>
                <p className="personal-info">Software Engineering</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Level</p>
                <p className="personal-info">100</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Sex</p>
                <p className="personal-info">{studentInfo.sex}</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Nationality</p>
                <p className="personal-info">{studentInfo.nationality}</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Country of Residence</p>
                <p className="personal-info">{studentInfo.residence}</p>
              </li>
              <li className="personal-info-row">
                <p className="personal-info-title">Address</p>
                <p className="personal-info">{studentInfo.address}</p>
              </li>
            </ul>
          </section>
        </div>
      )}
    </>
  );
};

export default Personal;
