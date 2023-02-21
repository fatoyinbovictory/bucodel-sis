import React, { useEffect } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import Footer from "../Components/Footer";
import bgImage from "../Images/bucodel-bg.jpg";
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <HomeNavBar />
      <section
        className="container landing"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .7)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <h1 className="landing-main-header">BUCODeL</h1>
        <h1 className="landing-header">Student Information System</h1>
        <h2 className="landing-subheader">
          Learning from the comfort of your home
        </h2>
      </section>
      <section className="landing-info">
        <h1 className="landing-main-header-blue">What Does This System Do?</h1>
        <p className="landing-text">
          The BUCODeL Student Information System is an application built to
          handle most aspects of the educational activities of a student. From
          application, to approval, to registration, course selection, handling
          fees payment, academic media sharing and much more!
        </p>
      </section>
      <section className="landing-info2">
        <h1 className="landing-main-header-blue">How Do You Start?</h1>
        <p className="landing-text">
          Begining is as easy as clicking on the apply link, providing your
          information and required documents. Be sure to read the learn more
          page to get all the information you need. When your application is
          accepted, you can begin for online academic journey!
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Home;
