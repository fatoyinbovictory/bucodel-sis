import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const CreateProgram = () => {
  const [facilitators, setFacilitators] = useState();
  const [name, setName] = useState();
  const [programCode, setProgramCode] = useState();
  const [duration, setDuration] = useState();
  const [certification, setCertification] = useState();
  const [programFee, setProgramFee] = useState();
  const [programHead, setProgramHead] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create Program";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/facilitatorIds`);
        setFacilitators(res.data);
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
        `/api/admin/createProgram`,
        JSON.stringify({
          name,
          programCode,
          duration,
          programHead,
          certification,
          programFee
        }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate("/admin/programs");
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
          <h1 className="landing-main-header-blue">Create Program</h1>
          <div className="form-row">
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="programname"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="programname">Program Name</label>
              </div>
            </div>
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="code"
                  required
                  onChange={(e) => setProgramCode(e.target.value)}
                />
                <label htmlFor="code">Program Code</label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="duration"
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
                <label htmlFor="duration">Duration(Years)</label>
              </div>
            </div>
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="certification"
                  required
                  onChange={(e) => setCertification(e.target.value)}
                />
                <label htmlFor="certification">Certification</label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="fee"
                  required
                  onChange={(e) => setProgramFee(e.target.value)}
                />
                <label htmlFor="fee">Program Fee</label>
              </div>
            </div>
            <div className="form-wrap">
              <div className="input-wrap">
                <select
                  className="application-input"
                  name="head"
                  onChange={(e) => setProgramHead(e.target.value)}
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
                <label htmlFor="head">Program Head</label>
              </div>
            </div>
          </div>
          <button className="btn-medium centered" onClick={handleSubmit}>
            {submitLoading ? <div className="borders"></div> : "Create Program"}
          </button>
          {success && (
            <div className="success">Program created successfully</div>
          )}
          {submitFail && <div className="error">{errMessage}</div>}
        </section>
      )}
    </>
  );
};

export default CreateProgram;
