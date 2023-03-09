import React from "react";

const StepThree = ({ formData, setFormData }) => {
  return (
    <>
      <h1 className="landing-main-header-blue application-header">
        Create Password
      </h1>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  password: e.target.value
                });
              }}
            />
            <label htmlFor="lastName">Create Password</label>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default StepThree;
