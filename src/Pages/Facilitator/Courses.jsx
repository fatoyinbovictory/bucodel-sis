import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import FacilitatorNav from "../../Components/FacilitatorNav";

const Courses = ({ facilitator }) => {
  const [courseInfo, setCourseInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Facilitator's Courses";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/facilitator/courses/${facilitator.id}`
        );
        setCourseInfo(res.data);
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
          <h1 className="landing-main-header-blue">Courses</h1>
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
              {courseInfo.courses.map((course) => {
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
                      <Link to={`/facilitator/course/${course._id}`}>
                        <button className="courses-table-button">More</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default Courses;
