import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const CreateCourse = () => {
  const [facilitators, setFacilitators] = useState();
  const [name, setName] = useState();
  const [courseCode, setCourseCode] = useState();
  const [creditHours, setCreditHours] = useState();
  const [courseFacilitator, setCourseFacilitator] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    document.title = "Create Course";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/facilitatorIds`);
        setFacilitators(res.data);
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

  const handleSubmit = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.post(
        `/api/admin/createCourse/${id}`,
        JSON.stringify({ name, courseCode, creditHours, courseFacilitator }),
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
      console.log(error);
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
          <h1 className="landing-main-header-blue">Create Course</h1>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="coursename"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="coursename">Course Name</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="coursecode"
                required
                onChange={(e) => setCourseCode(e.target.value)}
              />
              <label htmlFor="coursecode">Course Code</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <select
                className="application-input"
                name="credhours"
                onChange={(e) => setCreditHours(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
                <option value="2">4</option>
              </select>
              <label htmlFor="credhours">Credit Hours</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
              <select
                className="application-input"
                name="middleName"
                onChange={(e) => setCourseFacilitator(e.target.value)}
                required
              >
                <option value=""></option>
                {facilitators.map((facilitator) => {
                  return (
                    <option value={facilitator._id} key={facilitator._id}>
                      {facilitator.firstName} {facilitator.lastName}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="lastName">Course Facilitator</label>
            </div>
          </div>
          <button className="btn-medium centered" onClick={handleSubmit}>
            {submitLoading ? <div className="borders "></div> : "Create Course"}
          </button>
          {success && (
            <div className="success">Course created successfully</div>
          )}
          {submitFail && <div className="error">{errMessage}</div>}
        </section>
      )}
    </>
  );
};

export default CreateCourse;
