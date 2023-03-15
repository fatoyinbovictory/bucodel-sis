import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const SelectedCourses = ({ student }) => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [courseIdData, setCourseIdData] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Selected Courses";
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

  const handleSubmit = async (course) => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(
        `/api/student/removeCourse`,
        JSON.stringify({ studentId: student.id, courseId: course }),
        {
          headers: { "Content-type": "application/json" }
        }
      );
      setSuccess(true);
      setSubmitLoading(false);
      setSubmitFail(false);
      setTimeout(() => {
        navigate(0);
      }, 2000);
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
          <h1 className="landing-main-header-blue">Selected Courses</h1>
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
              {courses.courses.map((course) => {
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
                        className="courses-table-button red"
                        onClick={() => {
                          setCourseIdData(course._id);
                          handleSubmit(course._id);
                        }}
                      >
                        {course._id === courseIdData && submitLoading ? (
                          <div className="borders"></div>
                        ) : (
                          "Drop Course"
                        )}
                      </button>
                      {success && course._id === courseIdData && (
                        <div className="success-mini">
                          Course successfully dropped
                        </div>
                      )}
                      {submitFail && course._id === courseIdData && (
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

export default SelectedCourses;
