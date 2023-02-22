import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import codelLogo from "../Images/bucodel-logo-transformed.png";
import menuIcon from "../Icons/menu.svg";
import "../CSS/HomeNavBar.css";

const HomeNavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <img src={codelLogo} alt="logo" className="nav-image" />
        <img
          src={menuIcon}
          alt="menu"
          className="menu-icon"
          onClick={() => setToggleNav(!toggleNav)}
        />
       <div className={`nav-items ${toggleNav ? "show" : ""}`}>
       <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/learnmore">
            Learn More
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/apply">
            Apply
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/studentlogin">
            Students
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/facilitatorlogin">
            Facilitators
          </Link>
        </li>
       </div>
      </ul>
    </nav>
  );
};

export default HomeNavBar;
