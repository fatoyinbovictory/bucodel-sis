import React from "react";
import AdminNav from "../../Components/AdminNav";

const CreateSemester = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Create Semester</h1>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Academic Session</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <select className="application-input" name="middleName" required>
              <option value=""></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
            </select>
            <label htmlFor="lastName">Semester</label>
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
            <label htmlFor="lastName">Semester Start Date</label>
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
            <label htmlFor="lastName">Semester End Date</label>
          </div>
        </div>
        <button className="btn-medium">Create Semester</button>
      </section>
    </>
  );
};

export default CreateSemester;
