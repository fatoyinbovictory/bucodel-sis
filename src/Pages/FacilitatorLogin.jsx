import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Api/axios";
import { ContextFacilitator } from "../Context/Context";
import Footer from "../Components/Footer";
import HomeNavBar from "../Components/HomeNavBar";

const FacilitatorLogin = () => {
  useEffect(() => {
    document.title = "Facilitator Login";
  }, []);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSucess] = useState(false);
  const { dispatch, isFetching } = useContext(ContextFacilitator);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState();
  const [passwordShow, setPasswordShow] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoginFail(false);
    dispatch({ type: "LOGIN_START_FACILITATOR" });
    try {
      const res = await axios.post(
        `/api/loginFacilitator`,
        JSON.stringify({
          email,
          password
        }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      dispatch({ type: "LOGIN_SUCCESS_FACILITATOR", payload: res.data });
      setLoading(false);
      res.data && navigate("/facilitator");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE_FACILITATOR" });
      console.log(error);
      setLoginFail(true);
      setLoading(false);
      setErrMessage(error.response.data.error);
    }
  };
  return (
    <>
      <HomeNavBar />
      <section className="login-form">
        <form className="login-form">
          <h1 className="landing-main-header">Facilitators</h1>
          <div className="login-form-row">
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="text"
                  className="application-input"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="form-wrap">
              <div className="input-wrap">
                <input
                  type="password"
                  className="application-input"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <button className="login-btn" onClick={handleSubmit}>
            {loading ? <div className="borders"></div> : "Login"}
          </button>
          {/* <div className="success">This is a success message</div> */}
          {loginFail && <div className="error">{errMessage}</div>}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default FacilitatorLogin;
