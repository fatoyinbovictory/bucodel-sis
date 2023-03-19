import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Fees = ({ student }) => {
  const [programFee, setProgramFee] = useState();
  const [feeFile, setFeeFile] = useState();
  const [pathToFee, setPathToFee] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `/api/student/getFees`,
          JSON.stringify({ program: student.program }),
          {
            headers: { "Content-type": "application/json" }
          }
        );
        setProgramFee(res.data.programFee);
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
    const formData = new FormData();
    formData.append("pathToFee", pathToFee);
    formData.append("feeFile", feeFile);
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(`/api/student/feePayment/${student.id}`, formData, {
        headers: { "Content-type": "multipart/form-data" }
      });
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
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
          <h1 className="landing-main-header-blue">Fees & Payments</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Fees to Pay</p>
              <p className="personal-info">{programFee}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Bank Name</p>
              <p className="personal-info">Babcock Microfinance Bank</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Bank Account Number</p>
              <p className="personal-info">0039474849</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Upload Evidence of Payment</p>
              <input
                type="file"
                name="upload-fees"
                id=""
                onChange={(e) => {
                  setPathToFee(
                    `uploads/fees/${e.target.files[0].name}`
                  );
                  setFeeFile(e.target.files[0]);
                }}
              />
            </li>
          </ul>
          <button className="btn-medium centered" onClick={handleSubmit}>
            {submitLoading ? <div className="borders"></div> : "Submit"}
          </button>
          {success && <div className="success">Fees indicated as paid</div>}
          {submitFail && <div className="error">{errMessage}</div>}
          <h1 className="landing-main-header-blue">Registration Status</h1>
        </section>
      )}
    </>
  );
};

export default Fees;
