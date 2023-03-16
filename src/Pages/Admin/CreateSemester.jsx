import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const CreateSemester = () => {
  const [semester, setSemester] = useState();
  const [session, setSession] = useState();
  const [semesterStart, setSemesterStart] = useState();
  const [semesterEnd, setSemesterEnd] = useState();
  const [errMessage, setErrMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Create Semester";
  }, []);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.post(
        `/api/admin/createSemester`,
        JSON.stringify({ semester, session, semesterStart, semesterEnd }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
       navigate(0);
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
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Create Semester</h1>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="session"
              required
              value={session}
              onChange={(e) => setSession(e.target.value)}
            />
            <label htmlFor="session">Academic Session</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <select
              className="application-input"
              name="semester"
              required
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value=""></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd(Summer)</option>
            </select>
            <label htmlFor="semester">Semester</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="date"
              className="application-input"
              name="semstart"
              required
              value={semesterStart}
              onChange={(e) => setSemesterStart(e.target.value)}
            />
            <label htmlFor="semstart">Semester Start Date</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="date"
              className="application-input"
              name="semend"
              required
              value={semesterEnd}
              onChange={(e) => setSemesterEnd(e.target.value)}
            />
            <label htmlFor="semend">Semester End Date</label>
          </div>
        </div>
        <button className="btn-medium centered" onClick={handleSubmit}>
          {submitLoading ? <div className="borders"></div> : "Create Semester"}
        </button>
        {success && (
          <div className="success">Semester created successfully</div>
        )}
        {submitFail && <div className="error">{errMessage}</div>}
      </section>
    </>
  );
};

export default CreateSemester;
