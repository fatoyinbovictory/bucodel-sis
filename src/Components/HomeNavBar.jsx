import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import codelLogo from "../Images/bucodel-logo-transformed.png";
import "../CSS/HomeNavBar.css";

const HomeNavBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <img src={codelLogo} alt="logo" className="nav-image" />
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Students</li>
        <li className="nav-item">Facilitators</li>
      </ul>
    </nav>
  );
};

export default HomeNavBar;
