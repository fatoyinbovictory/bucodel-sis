import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Courselist = ({ student }) => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [courseIdData, setCourseIdData] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Select Courses";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/student/getCourses/${id}`);
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

  const handleSubmit = async (course) => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      const res = await axios.patch(
        `/api/student/addCourse`,
        JSON.stringify({ studentId: student.id, courseId: course }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setSubmitFail(true);
      setSubmitLoading(false);
      setErrMessage(error.response.data.error);
    }
  };

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
        <section className="profile-container loaded">
          <h1 className="landing-main-header-blue">
            Courselist for {courses.name}
          </h1>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Course</th>
                <th className="courses-table-data">Course Code</th>
                <th className="courses-table-data">Credit Units</th>
                <th className="courses-table-data">Facilitator</th>
                <th className="courses-table-data"></th>
              </tr>
            </thead>
            <tbody>
              {courses.programCourses.map((course) => {
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
                    <td className="courses-table-data" data-label="Facilitator">
                      {course.courseFacilitator.firstName}{" "}
                      {course.courseFacilitator.lastName}
                    </td>
                    <td className="courses-table-data" data-label="">
                      <button
                        className="courses-table-button"
                        onClick={() => {
                          setCourseIdData(course._id);
                          handleSubmit(course._id);
                        }}
                      >
                        {course._id === courseIdData && submitLoading ? (
                          <div className="borders"></div>
                        ) : (
                          "Select Course"
                        )}
                      </button>
                      {success &&
                        course._id ===
                          courseIdData && (
                            <div className="success-mini">
                              Course successfully selected
                            </div>
                          )}
                      {submitFail &&
                        course._id ===
                          courseIdData &&(
                            <div className="error-mini">{errMessage}</div>
                          )}
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

export default Courselist;
