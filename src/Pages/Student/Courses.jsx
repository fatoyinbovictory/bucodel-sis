import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Courses = ({ student }) => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Select Courses";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/student/viewSelectedCourses/${student.id}`
        );
        setCourses(res.data);
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
      <StudentNav />
      {loading ? (
        <div className="center-load">
          <div className="borders-profile"></div>
        </div>
      ) : loadFail ? (
        <div className="center-load">
          <div className="error">{errMessage}</div>
        </div>
      ) : (
        <section className="profile-container table loaded">
          <h1 className="landing-main-header-blue">Semester Courses</h1>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Course</th>
                <th className="courses-table-data">Course Code</th>
                <th className="courses-table-data">Facilitator</th>
                <th className="courses-table-data">Credit Units</th>
                <th className="courses-table-data"></th>
              </tr>
            </thead>
            <tbody>
              {courses.courses.map((course) => {
                return (
                  <tr className="courses-table-row" key={course._id}>
                    <td className="courses-table-data" data-label="Course">
                      {course.name}
                    </td>
                    <td className="courses-table-data" data-label="Course Code">
                      {course.courseCode}
                    </td>
                    <td className="courses-table-data" data-label="Facilitator">
                      {course.courseFacilitator.firstName}{" "}
                      {course.courseFacilitator.lastName}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Credit Units"
                    >
                      {course.creditHours}
                    </td>
                    <Link to={course._id}>
                      <td className="courses-table-data" data-label="More">
                        <button className="courses-table-button">More</button>
                      </td>
                    </Link>
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
