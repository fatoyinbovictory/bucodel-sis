import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const SpecificProgram = () => {
  const [program, setProgram] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Program";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/program/${id}`);
        setProgram(res.data);
        console.log(res.data);
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
      <AdminNav />
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
          <h1 className="landing-main-header-blue">Program Details</h1>
          <ul className="personal-info-list">
            <li className="personal-info-row">
              <p className="personal-info-title">Name</p>
              <p className="personal-info">{program.name}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Code</p>
              <p className="personal-info">{program.programCode}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">No. Of Courses</p>
              <p className="personal-info">{program.programCourses.length}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Certification</p>
              <p className="personal-info">{program.certification}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Duration</p>
              <p className="personal-info">{program.duration} Years</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Program Head</p>
              <p className="personal-info">
                {program.programHead.firstName} {program.programHead.lastName}
              </p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Fees</p>
              <p className="personal-info">₦{program.programFee}</p>
            </li>
            <li className="personal-info-row">
              <p className="personal-info-title">Courses</p>
            </li>
          </ul>
          <Link to="create">
            <button className="courses-table-button top">Create Course</button>
          </Link>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Course</th>
                <th className="courses-table-data">Course Code</th>
                <th className="courses-table-data">Credit Units</th>
                <th className="courses-table-data"></th>
              </tr>
            </thead>
            <tbody>
              {program.programCourses.map((course) => {
                return (
                  <tr className="courses-table-row" key={course._id}>
                    <td className="courses-table-data" data-label="Course">
                      {course.name}
                    </td>
                    <td className="courses-table-data" data-label="Course Code">
                      {course.courseCode}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Credit Units"
                    >
                      {course.creditHours}
                    </td>
                    <td className="courses-table-data" data-label="">
                      <button className="courses-table-button">More</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <br />
        </section>
      )}
    </>
  );
};

export default SpecificProgram;
