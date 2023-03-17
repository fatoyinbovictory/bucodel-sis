import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const Applications = () => {
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();

  useEffect(() => {
    document.title = "Student Applications";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/getAppStudents`);
        setStudents(res.data);
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
          <h1 className="landing-main-header-blue">Applications</h1>
          <div className="card-container">
            {students.map((student) => {
              return (
                <div className="application-card" key={student._id}>
                  <div className="card-row">
                    <p className="personal-info-title card">Name</p>
                    <p className="personal-info card">
                      {student.firstName} {student.lastName}
                    </p>
                  </div>
                  <div className="card-row">
                    <p className="personal-info-title card">Sex</p>
                    <p className="personal-info card">{student.sex}</p>
                  </div>
                  <div className="card-row">
                    <p className="personal-info-title card">Program</p>
                    <p className="personal-info card">{student.program}</p>
                  </div>
                  <div className="card-row">
                    <Link to={student._id}>
                      <button className="courses-table-button">View</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Applications;
