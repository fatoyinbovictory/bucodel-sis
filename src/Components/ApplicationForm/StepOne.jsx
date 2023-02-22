import React from "react";

const StepOne = ({ formData, setFormData }) => {
  return (
    <>
      <h1 className="landing-main-header-blue application-header">
        Personal Info
      </h1>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="firstName"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  firstName: e.target.value
                });
              }}
              value={formData.firstname}
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
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Middle Name</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="date"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Date of Birth</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="email"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Email</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Sex</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Nationality</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">State of Origin</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="nameofparent"
              required
            />
            <label htmlFor="nameofparent">Name of Parent/Guardian</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Sex</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="nameofparent"
              required
            />
            <label htmlFor="nameofparent">Home Address</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Phone Number</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
