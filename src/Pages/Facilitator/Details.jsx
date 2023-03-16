import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import FacilitatorNav from "../../Components/FacilitatorNav";

const Details = ({ facilitator }) => {
  const [facInfo, setFacInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Facilitator's Details";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/facilitator/getDetails/${facilitator.id}`
        );
        setFacInfo(res.data);
        setLoading(false);
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <FacilitatorNav />
      {loading ? (
        <div className="center-load">
          <div className="borders-profile"></div>
        </div>
      ) : loadFail ? (
        <div className="center-load">
          <div className="error">{errMessage}</div>
        </div>
      ) : (
        <section className="profile-container loaded">
          <h1 className="landing-main-header-blue">Details</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Name</p>
              <p className="personal-info">
                {facInfo.firstName} {facInfo.lastName}
              </p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Current Semester</p>
              <p className="personal-info">2023/2024 1st Semester</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Email</p>
              <p className="personal-info">{facInfo.email}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Phone Number</p>
              <p className="personal-info">{facInfo.phone}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Courses</p>
              {facInfo.courses.map((course) => {
                return (
                  <p className="personal-info" key={course._id}>
                    {course.name}
                  </p>
                );
              })}
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Details;
