import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menuIcon from "../Icons/profile-menu.svg";
import personalIcon from "../Icons/personal.svg";
import academicIcon from "../Icons/academic.svg";
import dashboardIcon from "../Icons/dashboard.svg";
import logoutIcon from "../Icons/logout.svg";
import { ContextFacilitator } from "../Context/Context";
import "../CSS/StudentNav.css";

const FacilitatorNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { coordinator, dispatch } = useContext(ContextFacilitator);
  const navigate = useNavigate();

  const toggleMenuShow = () => {
    setShowMenu(!showMenu);
  };

  function logOut() {
    dispatch({ type: "LOGOUT_FACILITATOR" });
    navigate("/facilitatorlogin");
  }

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
            <Link to="/facilitator" className="profile-nav-link">
              <img src={dashboardIcon} alt="dashboard" />
              <p className="profile-nav-link-name">Dashboard</p>
            </Link>
          </li>
          <li className="student-nav-item">
            <Link to="/facilitator/details" className="profile-nav-link">
              <img src={personalIcon} alt="personal" />
              <p className="profile-nav-link-name">More Details</p>
            </Link>
          </li>

          <li className="student-nav-item">
            <Link to="/facilitator/courses" className="profile-nav-link">
              <img src={academicIcon} alt="personal" />
              <p className="profile-nav-link-name">Courses</p>
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

export default FacilitatorNav;
