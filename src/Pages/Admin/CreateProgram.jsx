import React from "react";
import AdminNav from "../../Components/AdminNav";

const CreateProgram = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Create Program</h1>
        <div className="form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="middleName"
                required
              />
              <label htmlFor="lastName">Program Name</label>
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
              <label htmlFor="lastName">Program Code</label>
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
              <label htmlFor="lastName">Duration(Years)</label>
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
              <label htmlFor="lastName">Certification</label>
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
              <label htmlFor="lastName">Program Fee</label>
            </div>
          </div>
          <div className="form-wrap">
            <div className="input-wrap">
            <select className="application-input" name="middleName" required>
              <option value=""></option>
              <option value="1">Enoch Ayodele</option>
              <option value="2">Olaleye Timilehin</option>
            </select>
              <label htmlFor="lastName">Program Head</label>
            </div>
          </div>
        </div>
        <button className="btn-medium">Create Program</button>
      </section>
    </>
  );
};

export default CreateProgram;
