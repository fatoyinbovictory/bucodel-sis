import React from "react";
import Footer from "../Components/Footer";
import HomeNavBar from "../Components/HomeNavBar";

const FacilitatorLogin = () => {
  return (
    <>
      <HomeNavBar />
      <section className="login-form">
        <h1 className="landing-main-header">Facilitators</h1>
        <div className="login-form-row">
          <div className="form-wrap">
            <div className="input-wrap">
              <input
                type="text"
                className="application-input"
                name="nameofparent"
                required
              />
              <label htmlFor="nameofparent">Email</label>
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
        </div>
        <button className="login-btn">Login</button>
      </section>
      <Footer />
    </>
  );
};

export default FacilitatorLogin;
