import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "../Icons/profile-menu.svg";
import personalIcon from "../Icons/personal.svg";
import academicIcon from "../Icons/academic.svg";
import dashboardIcon from "../Icons/dashboard.svg";
import financeIcon from "../Icons/finance.svg";
import registerIcon from "../Icons/registration.svg";
import caretIcon from "../Icons/caret-down-fill.svg";
import "../CSS/StudentNav.css";

const StudentNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);

  const toggleMenuShow = () => {
    setShowMenu(!showMenu);
  };
  const toggleSubMenuShow = () => {
    setShowSubMenu(!showSubMenu);
  };
  const toggleSubMenuShow2 = () => {
    setShowSubMenu2(!showSubMenu2);
  };

  return (
    <>
      <nav className={`student-nav ${showMenu && "show"}`}>
        <img
          src={menuIcon}
          alt="menu"
          className="profile-menu-icon"
          onClick={toggleMenuShow}
        />
        <ul className={`student-nav-list ${showMenu && "show"}`}>
          <li className="student-nav-item active">
            <Link to="/student" className="profile-nav-link">
              <img src={dashboardIcon} alt="dashboard" />
              <p className="profile-nav-link-name">Dashboard</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/student/personal" className="profile-nav-link">
              <img src={personalIcon} alt="personal" />
              <p className="profile-nav-link-name"> Personal Info</p>
            </Link>
          </li>
          <li
            className={`student-nav-item ${showSubMenu && "show"}`}
            onClick={toggleSubMenuShow}
          >
            <img src={academicIcon} alt="academic" />
            <p className="sub-menu-header">Academic Info</p>
            <img src={caretIcon} alt="arrow" className="caret-down" />
            <div className="sub-menu-container">
              <Link to="/student/courses" className="sub-menu-link">
                Current Courses
              </Link>
              <Link to="/student/timetable" className="sub-menu-link">
                Timetable
              </Link>
              <Link to="/student/results" className="sub-menu-link">
                Semester Results
              </Link>
            </div>
          </li>
          <li
            className={`student-nav-item ${showSubMenu2 && "show"}`}
            onClick={toggleSubMenuShow2}
          >
            <img src={registerIcon} alt="reg" />
            <p className="sub-menu-header">Registration</p>
            <img src={caretIcon} alt="arrow" className="caret-down" />
            <div className="sub-menu-container">
              <Link to="/student/register/semester" className="sub-menu-link">
                Select Semester
              </Link>
              <Link to="/student/register/courses" className="sub-menu-link">
                Select Courses
              </Link>
              <Link to="/student/semester" className="sub-menu-link">
                Link
              </Link>
            </div>
          </li>
          <li className="student-nav-item">
            <Link to="/student/finance" className="profile-nav-link">
              <img src={financeIcon} alt="personal" />
              <p className="profile-nav-link-name">Fees & Payments</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default StudentNav;
