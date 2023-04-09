import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Fees = ({ student }) => {
  const [fee, setFee] = useState();
  const [amount, setAmount] = useState();
  const [regStatus, setRegStatus] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const email = student.email;

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
        setFee(parseInt(res.data.programFee));
        // setLoading(false);
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
      try {
        const res = await axios.get(`/api/student/getStatus/${student.id}`);
        setRegStatus(res.data);
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

  const componentProps = {
    email: "vicfatoyinbo@gmail.com",
    amount: fee * 100,
    publicKey: "pk_test_a22e5a1f62574c8718ce241d07cd28f29fa6f389",
    text: "Pay Semester Fees",
    onSuccess: () => handleSubmit(fee),
    onClose: () => alert("Are you sure you want to close this window?")
  };

  const handleSubmit = async (feePaid) => {
    try {
      await axios.patch(
        `/api/student/feePayment/${student.id}`,
        JSON.stringify({ feePaid }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
    } catch (error) {
      setSubmitFail(true);
      setSubmitLoading(false);
      console.log(error);
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
              <p className="personal-info">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN"
                }).format(fee)}
              </p>
            </li>
            <h2 className="landing-main-header-blue-min">Pay with Paystack</h2>
          </ul>
          <PaystackButton className="btn-medium centered" {...componentProps} />
          {submitLoading && <div className="borders"></div> }

          {success && (
            <div className="success">
              Fees Paid! Check your email for your receipt, and check this page
              for your approval status
            </div>
          )}
          {submitFail && <div className="error">{errMessage}</div>}
          <h1 className="landing-main-header-blue">Registration Status</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Fees Payment Review Ongoing</p>
              <p className="personal-info">
                {regStatus.isPaying ? "Yes" : "No"}
              </p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Fees Payment Approved</p>
              <p className="personal-info">{regStatus.isPaid ? "Yes" : "No"}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">
                Semester Registration Review Ongoing
              </p>
              <p className="personal-info">
                {regStatus.isRegistering ? "Yes" : "No"}
              </p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">
                Semester Registration Approved
              </p>
              <p className="personal-info">
                {regStatus.isRegistered ? "Yes" : "No"}
              </p>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Fees;
