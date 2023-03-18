import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const StudentApp = () => {
  const [student, setStudent] = useState();
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
    document.title = "Student Application";
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

  const handleApprove = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(`/api/admin/approveStudentApp/${id}`);
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate("/admin/applications");
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
      await axios.delete(`/api/admin/declineStudentApp/${id}`);
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate("/admin/applications");
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
          <h1 className="landing-main-header-blue">Application</h1>
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
              <p className="personal-info-title">Sex</p>
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
            <a
              href={`http://localhost:5000/${student.pathToSsce}`}
              target="_blank"
              className="facilitator-link"
            >
              View {student.firstName}'s uploaded SSCE result
            </a> <br /><br />
            <a
              href={`http://localhost:5000/${student.pathToUtme}`}
              target="_blank"
              className="facilitator-link"
            >
              View {student.firstName}'s uploaded UTME result
            </a> <br /><br />
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

export default StudentApp;
