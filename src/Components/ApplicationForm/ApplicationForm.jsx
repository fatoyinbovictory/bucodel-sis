import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ApplicationForm = () => {
  const [stepPage, setStepPage] = useState(0);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    sex: "",
    email: "",
    nationality: "",
    nameOfGuardian: "",
    stateOfOrigin: "",
    address: "",
    phone: "",
    placeOfBirth: "",
    program: "",
    previousUni: "",
    // ssce: null,
    // utme: null,
    password: ""
  });

  const handleStepChange = () => {
    switch (stepPage) {
      case 0:
        return <StepOne formData={formData} setFormData={setFormData} />;
      case 1:
        return <StepTwo formData={formData} setFormData={setFormData} />;
      case 2:
        return <StepThree formData={formData} setFormData={setFormData} />;
      default:
        return <StepOne formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = async () => {
    if (stepPage === 0) {
      setStepPage(stepPage + 1);
      console.log(formData);
    } else if (stepPage === 1) {
      setStepPage(stepPage + 1);
      console.log(formData);
    } else if (stepPage === 2) {
      console.log(formData);
      setSubmitLoading(true);
      setSubmitFail(false);
      try {
        console.log(formData);
        await axios.post(`/api/register`, JSON.stringify(formData), {
          headers: { "Content-type": "application/json" }
        });
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
    } else stepPage(stepPage + 1);
  };

  return (
    <>
      <h3 className="apply-step-count">{`${stepPage + 1}/3`}</h3>
      {handleStepChange()}
      <div className="buttons">
        <button onClick={handleSubmit} className="apply-button">
          {stepPage === 0 || stepPage === 1 ? (
            "Next"
          ) : submitLoading ? (
            <div className="borders"></div>
          ) : (
            "Submit"
          )}
        </button>
        {stepPage > 0 && (
          <button
            onClick={() => setStepPage(stepPage - 1)}
            className="apply-button"
          >
            Back
          </button>
        )}
      </div>
      {success && <div className="success">You have successfully applied</div>}
      {submitFail && <div className="error">{errMessage}</div>}
    </>
  );
};

export default ApplicationForm;
