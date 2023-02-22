import React from 'react'
import HomeNavBar from '../Components/HomeNavBar'
import Footer from '../Components/Footer'

const AdminLogin = () => {
  return (
    <>
    <HomeNavBar />
    <section className="login-form">
      <h1 className="landing-main-header">Admin</h1>
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
  )
}

export default AdminLogin