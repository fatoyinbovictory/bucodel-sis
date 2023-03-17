import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const StudentApp = () => {
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Student";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/getStudent/${id}`);
        setStudent(res.data);
        console.log(res.data);
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
          <h1 className="landing-main-header-blue">Student</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Name</p>
              <p className="personal-info">
                {student.firstName} {student.lastName}
              </p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Matric Number</p>
              <p className="personal-info">{student.matricNo}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Email</p>
              <p className="personal-info">{student.email}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Phone Number</p>
              <p className="personal-info">{student.sex}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Program</p>
              <p className="personal-info">{student.program}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Parent/Guardian</p>
              <p className="personal-info">{student.nameOfGuardian}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Address</p>
              <p className="personal-info">{student.address}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Nationality</p>
              <p className="personal-info">{student.nationality}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">State of Origin</p>
              <p className="personal-info">{student.stateOfOrigin}</p>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default StudentApp;
