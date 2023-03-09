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
              name="dateofbirth"
              required
            />
            <label htmlFor="dateofbirth">Date of Birth</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="email"
              className="application-input"
              name="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="sex"
              required
            />
            <label htmlFor="sex">Sex</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="nationality"
              required
            />
            <label htmlFor="nationality">Nationality</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="stateoforigin"
              required
            />
            <label htmlFor="stateoforigin">State of Origin</label>
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
            <select className="application-input" name="program" required>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
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
