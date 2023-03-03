import React from "react";
import AdminNav from "../../Components/AdminNav";

const CreateCourse = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Create Course</h1>
        <div className="form-wrap">
          <div className="input-wrap">
            <input
              type="text"
              className="application-input"
              name="middleName"
              required
            />
            <label htmlFor="lastName">Course Name</label>
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
            <label htmlFor="lastName">Course Code</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <select className="application-input" name="middleName" required>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="2">4</option>
            </select>
            <label htmlFor="lastName">Credit Hours</label>
          </div>
        </div>
        <div className="form-wrap">
          <div className="input-wrap">
            <textarea
              name=""
              id=""
              cols="24"
              rows="5"
              className="input-select"
              placeholder="Course Description"
            ></textarea>
          </div>
        </div>

        <div className="form-wrap">
          <div className="input-wrap">
            <select className="application-input" name="middleName" required>
              <option value=""></option>
              <option value="1">Enoch Ayodele</option>
              <option value="2">Olaleye Timilehin</option>
            </select>
            <label htmlFor="lastName">Course Facilitator</label>
          </div>
        </div>
        <button className="btn-medium">Create Course</button>
      </section>
    </>
  );
};

export default CreateCourse;
