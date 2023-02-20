import React, { useEffect } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import bgImage from "../Images/bucodel-bg.jpg";
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <HomeNavBar />
      <section
        className="container landing"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <h1 className="landing-header1">BUCODeL</h1>
        <h1 className="landing-header">Student Information System</h1>
        <h2 className="landing-subheader">
          Learning from the comfort of your home
        </h2>
      </section>
    </>
  );
};

export default Home;
