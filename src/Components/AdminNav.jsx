import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menuIcon from "../Icons/profile-menu.svg";
import personalIcon from "../Icons/personal.svg";
import detailsIcon from "../Icons/file.svg";
import createIcon from "../Icons/create.svg";
import programsIcon from "../Icons/programs.svg";
import facilitatorIcon from "../Icons/facilitator.svg";
import studentIcon from "../Icons/student.svg";
import regIcon from "../Icons/studentregistration.svg";
import appIcon from "../Icons/application.svg";
import financeIcon from "../Icons/finance.svg";
import academicIcon from "../Icons/academic.svg";
import collateIcon from "../Icons/collate.svg";
import newsIcon from "../Icons/news.svg"
import dashboardIcon from "../Icons/dashboard.svg";
import logoutIcon from "../Icons/logout.svg";
import { ContextAdmin } from "../Context/Context";
import "../CSS/StudentNav.css";

const AdminNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { coordinator, dispatch } = useContext(ContextAdmin);
  const navigate = useNavigate();

  const toggleMenuShow = () => {
    setShowMenu(!showMenu);
  };

  function logOut() {
    dispatch({ type: "LOGOUT_ADMIN" });
    navigate("/adminlogin");
  }

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
            <Link to="/admin/semesters" className="profile-nav-link">
              <img src={createIcon} alt="personal" />
              <p className="profile-nav-link-name">Semesters</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/programs" className="profile-nav-link">
              <img src={programsIcon} alt="personal" />
              <p className="profile-nav-link-name">Programs</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/facilitators" className="profile-nav-link">
              <img src={facilitatorIcon} alt="personal" />
              <p className="profile-nav-link-name">Facilitators</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/students" className="profile-nav-link">
              <img src={studentIcon} alt="personal" />
              <p className="profile-nav-link-name">Students</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/applications" className="profile-nav-link">
              <img src={appIcon} alt="personal" />
              <p className="profile-nav-link-name">Student Applications</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/studentregistration" className="profile-nav-link">
              <img src={regIcon} alt="personal" />
              <p className="profile-nav-link-name">Student Registration</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/fees" className="profile-nav-link">
              <img src={financeIcon} alt="personal" />
              <p className="profile-nav-link-name">Fees Payments</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/admin/newsroom" className="profile-nav-link">
              <img src={newsIcon} alt="personal" />
              <p className="profile-nav-link-name">Newsroom</p>
            </Link>
          </li>
          <li className="student-nav-item logout" onClick={logOut}>
            <Link className="profile-nav-link">
              <img src={logoutIcon} alt="logout" />
              <p className="profile-nav-link-name">Logout</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminNav;
