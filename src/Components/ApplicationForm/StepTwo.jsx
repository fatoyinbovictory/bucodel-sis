import React from "react";

const StepTwo = ({ formData, setFormData }) => {
  return (
    <>
      <h1 className="landing-main-header-blue application-header">
        Academic Info
      </h1>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <select className="application-input" name="program" required>
              <option value=""></option>
              <option value="">Software Engineering</option>
              <option value="">Accounting</option>
              <option value="">Business Administration</option>
            </select>
            <label htmlFor="lastName">Program</label>
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
            <label htmlFor="lastName">Prev. Uni. Attended(If Applicable)</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="file"
              className="application-inputd"
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

export default StepTwo;
