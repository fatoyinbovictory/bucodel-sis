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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  lastName: e.target.value
                });
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  middleName: e.target.value
                });
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  dateOfBirth: e.target.value
                });
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value
                });
              }}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <select
              className="application-input"
              name="program"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  sex: e.target.value
                });
              }}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
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
              name="nationality"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  nationality: e.target.value
                });
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  stateOfOrigin: e.target.value
                });
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  nameOfGuardian: e.target.value
                });
              }}
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
              name="placeOfBirth"
              required
              onChange={(e) => {
                setFormData({
                  ...formData,
                  placeOfBirth: e.target.value
                });
              }}
            />
            <label htmlFor="placeOfBirth">Place of Birth</label>
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  address: e.target.value
                });
              }}
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
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phone: e.target.value
                });
              }}
            />
            <label htmlFor="lastName">Phone Number</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
