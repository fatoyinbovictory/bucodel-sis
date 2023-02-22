import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ApplicationForm = () => {
  const [stepPage, setStepPage] = useState(0);
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
    pdf: "",
    house: ""
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

  const handleSubmit = () => {
    if (stepPage === 0) {
      setStepPage(stepPage + 1);
      console.log(formData);
    } else if (stepPage === 1) {
      setStepPage(stepPage + 1);
      console.log(formData);
    } else if (stepPage === 2) {
      console.log(formData);
    } else stepPage(stepPage + 1);
  };

  return (
    <>
      <h3 className="apply-step-count">{`${stepPage + 1}/3`}</h3>
      {handleStepChange()}
    <div className="buttons">
    <button onClick={handleSubmit} className="apply-button">
        {stepPage === 0 || stepPage === 1 ? "Next" : "Submit"}
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
    </>
  );
};

export default ApplicationForm;
