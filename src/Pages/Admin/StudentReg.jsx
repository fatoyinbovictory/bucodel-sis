import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const StudentReg = () => {
  const [student, setStudent] = useState();
  const [studentCourses, setStudentCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const [isAccept, setIsAccept] = useState(false);
  const [isDeny, setIsDeny] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Student registration";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/getStudent/${id}`);
        setStudent(res.data);
        console.log(res.data);
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
      try {
        const res = await axios.get(`/api/admin/getStudentCourses/${id}`);
        setStudentCourses(res.data);
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

  const handleApprove = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(`/api/admin/approveStudentReg/${id}`);
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate("/admin/studentregistration");
      }, 3000);
    } catch (error) {
      setSubmitFail(true);
      setSubmitLoading(false);
      setErrMessage(error.response.data.error);
    }
  };

  const handleDecline = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(`/api/admin/declineStudentReg/${id}`);
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate("/admin/studentregistration");
      }, 3000);
    } catch (error) {
      setSubmitFail(true);
      setSubmitLoading(false);
      setErrMessage(error.response.data.error);
    }
  };

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
          <h1 className="landing-main-header-blue">Semester Registration</h1>
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
              <p className="personal-info">{student.phone}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Program</p>
              <p className="personal-info">{student.program}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Semester</p>
              <p className="personal-info">{student.semester}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Courses Selected</p>
              {studentCourses.courses.map((course) => {
                return (
                  <p className="personal-info" key={course._id}>
                    {course.name}
                  </p>
                );
              })}
            </li>
          </ul>
          <button
            className="btn-medium centered"
            onClick={() => {
              setIsAccept(true);
              handleApprove();
            }}
          >
            {submitLoading && isAccept ? (
              <div className="borders"></div>
            ) : (
              "Approve"
            )}
          </button>
          {success && isAccept && (
            <div className="success">Student Approved successfully</div>
          )}
          {submitFail && isAccept && <div className="error">{errMessage}</div>}
          <button
            className="btn-medium red centered"
            onClick={() => {
              setIsDeny(true);
              handleDecline();
            }}
          >
            {submitLoading && isDeny ? <div className="borders"></div> : "Deny"}
          </button>
          {success && isDeny && (
            <div className="success">Student denied successfully</div>
          )}
          {submitFail && isDeny && <div className="error">{errMessage}</div>}
        </section>
      )}
    </>
  );
};

export default StudentReg;
