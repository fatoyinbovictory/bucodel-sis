import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Submit = ({ student }) => {
  const [studentInfo, setStudentInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Submit Registration";
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
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(`/api/student/submitRegistration/${student.id}`);
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setSubmitFail(true);
      setSubmitLoading(false);
      setErrMessage(error.response.data.error);
    }
  };

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
        <section className="profile-container loaded">
          <h1 className="landing-main-header-blue">Review & Submit</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Selected Semester</p>
              <p className="personal-info">{studentInfo.semester}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Number of Courses Selected</p>
              <p className="personal-info">{studentInfo.courses.length}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Program</p>
              <p className="personal-info">{studentInfo.program}</p>
            </li>
          </ul>
          <button className="btn-medium centered" onClick={handleSubmit}>
            {submitLoading ? <div className="borders"></div> : "Submit"}
          </button>
          {success && (
            <div className="success">Registeration successfully submited</div>
          )}
          {submitFail && <div className="error">{errMessage}</div>}
          <p className="personal-info-title">
            You are free to submit, but your semester registration will not be approved if your payment has
            not been approved.
          </p>
        </section>
      )}
    </>
  );
};

export default Submit;
