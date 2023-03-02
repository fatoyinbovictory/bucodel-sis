import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuIcon from "../Icons/profile-menu.svg";
import personalIcon from "../Icons/personal.svg";
import detailsIcon from "../Icons/file.svg"
import createIcon from "../Icons/create.svg"
import programsIcon from "../Icons/programs.svg"
import facilitatorIcon from "../Icons/facilitator.svg"
import studentIcon from "../Icons/student.svg"
import regIcon from "../Icons/studentregistration.svg"
import appIcon from "../Icons/application.svg"
import financeIcon from "../Icons/finance.svg"
import academicIcon from "../Icons/academic.svg";
import collateIcon from "../Icons/collate.svg"
import dashboardIcon from "../Icons/dashboard.svg";
import "../CSS/StudentNav.css";

const AdminNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`student-nav ${showMenu && "show"} admin`}>
        <img
          src={menuIcon}
          alt="menu"
          className="profile-menu-icon"
          onClick={toggleMenuShow}
        />
        <ul className={`student-nav-list ${showMenu && "show"}`}>
          <li className="student-nav-item active">
            <Link to="/admin" className="profile-nav-link">
              <img src={dashboardIcon} alt="dashboard" />
              <p className="profile-nav-link-name">Dashboard</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={personalIcon} alt="personal" />
              <p className="profile-nav-link-name">More Details</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={createIcon} alt="personal" />
              <p className="profile-nav-link-name">Create Semester</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={programsIcon} alt="personal" />
              <p className="profile-nav-link-name">Programs</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={facilitatorIcon} alt="personal" />
              <p className="profile-nav-link-name">Facilitators</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={studentIcon} alt="personal" />
              <p className="profile-nav-link-name">Students</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={appIcon} alt="personal" />
              <p className="profile-nav-link-name">Student Applications</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={regIcon} alt="personal" />
              <p className="profile-nav-link-name">Student Registration</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={financeIcon} alt="personal" />
              <p className="profile-nav-link-name">Fees Payments</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/details" className="profile-nav-link">
              <img src={collateIcon} alt="personal" />
              <p className="profile-nav-link-name">Collate & Post Results</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminNav;
