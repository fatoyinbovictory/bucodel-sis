import React from "react";
import { Link, NavLink } from "react-router-dom";
import codelLogo from "../Images/bucodel-logo-transformed.png";
import insta from "../Icons/instagram.svg";
import facebook from "../Icons/facebook.svg";
import linkedin from "../Icons/linkedin.svg";
import youutube from "../Icons/youtube.svg";
import "../CSS/Home.css";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-column">
          <img src={codelLogo} alt="logo" className="footer-logo" />
          <p className="footer-text">
            Copyright © 2023. Babcock University. All rights reserved.
          </p>
        </section>
        <div className="footer-line"></div>
        <section className="footer-column">
          <Link className="footer-link">Home</Link>
          <Link className="footer-link">Learn More</Link>
          <Link className="footer-link">Apply</Link>
          <Link className="footer-link">Student Portal</Link>
          <Link className="footer-link">Facilitator Portal</Link>
        </section>
        <div className="footer-line"></div>
        <section className="footer-column">
          <Link className="footer-link">Glossary</Link>
          <Link className="footer-link">Guidance & Counselling</Link>
          <Link className="footer-link">Medical Screening</Link>
          <Link className="footer-link">BUCODeL Handbook</Link>
        </section>
        <div className="footer-line"></div>
        <section className="footer-column icons">
          <img src={facebook} alt="facebook" />
          <img src={insta} alt="insta" />
          <img src={linkedin} alt="linkedin" />
          <img src={youutube} alt="youtube" />
        </section>
      </footer>
    </>
  );
};

export default Footer;
