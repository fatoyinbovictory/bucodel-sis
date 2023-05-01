import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const CreateFacilitator = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [errMessage, setErrMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Create Facilitator";
  }, []);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.post(
        `/api/admin/createFacilitator`,
        JSON.stringify({ firstName, lastName, phone, email, password }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate("/admin/facilitators");
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
      <section className="profile-container loaded">
        <h1 className="landing-main-header-blue">Create Facilitator/e-Tutor Account</h1>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="firstName"
              onClick={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="lastName"
              onClick={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="phoneNumber"
              onClick={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="email"
              className="application-input"
              name="email"
              onClick={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="password"
              className="application-input"
              name="password"
              onClick={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="btn-medium centered" onClick={handleSubmit}>
          {submitLoading ? (
            <div className="borders"></div>
          ) : (
            "Create Facilitator"
          )}
        </button>
        {success && (
          <div className="success">Facilitator created successfully</div>
        )}
        {submitFail && <div className="error">{errMessage}</div>}
      </section>
    </>
  );
};

export default CreateFacilitator;
