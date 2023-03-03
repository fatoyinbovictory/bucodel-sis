import React from "react";
import AdminNav from "../../Components/AdminNav";

const CreateFacilitator = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Create Facilitator Account</h1>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">First Name</label>
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
            <label htmlFor="lastName">Last Name</label>
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
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName"> Email</label>
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
            <label htmlFor="lastName">Password</label>
          </div>
        </div>
        <button className="btn-medium">Create Account</button>
      </section>
    </>
  );
};

export default CreateFacilitator;
