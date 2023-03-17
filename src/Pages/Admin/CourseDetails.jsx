import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const CourseDetails = () => {
  const [courseInfo, setCourseInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [time, setTime] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Course Details";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/facilitator/course/${id}`);
        setCourseInfo(res.data);
        setLoading(false);
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
      await axios.patch(
        `/api/admin/addCourseTime/${courseInfo._id}`,
        JSON.stringify({ time }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
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
          <h1 className="landing-main-header-blue">{courseInfo.name}</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Course Code</p>
              <p className="personal-info">{courseInfo.courseCode}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Total Students</p>
              <p className="personal-info">{courseInfo.students.length}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Set Course Time</p>
              <div className="form-wrap profile">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="application-input"
                    name="classlink"
                    required
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <label htmlFor="classlink">Link</label>
                </div>
              </div>
              <button className="apply-button centered" onClick={handleSubmit}>
                {submitLoading ? <div className="borders"></div> : "Set"}
              </button>
              {success && (
                <div className="success">Class Time set successfully</div>
              )}
              {submitFail && <div className="error">{errMessage}</div>}
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default CourseDetails;
