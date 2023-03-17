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
            <select
              className="application-input"
              name="program"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  program: e.target.value
                });
              }}
            >
              <option value=""></option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Accounting">Accounting</option>
              <option value="Accounting">Computer Science</option>
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  previousUni: e.target.value
                });
              }}
            />
            <label htmlFor="lastName">Prev. Uni. Attended(If Applicable)</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <label className="upload-label" htmlFor="lastName">
            Upload Your SSCE Result in PDF Format
          </label>
          <div className="input-wrap">
            <input
              type="file"
              className="application-input-file"
              name="middleName"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  ssce: e.target.value
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-wrap">
          <label className="upload-label" htmlFor="lastName">
            Upload Your UTME Result in PDF Format
          </label>
          <div className="input-wrap">
            <input
              type="file"
              className="application-input-file"
              name="middleName"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  utme: e.target.value
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
