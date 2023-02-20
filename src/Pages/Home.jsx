import React, { useEffect } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import "../CSS/Home.css";

const Home = () => {
  return (
    <>
      <HomeNavBar />
      <div className="container">
        <h1>
          Welcome to the Babcock University Center for Open Distance and
          e-Learning (BUCODeL) Student Information System
        </h1>
        <h2>Learning from the comfort of your home</h2>
      </div>
    </>
  );
};

export default Home;
