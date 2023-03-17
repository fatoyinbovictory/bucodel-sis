import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Timetable = ({ student }) => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Timetable";
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
        <section className="profile-container">
          <h1 className="landing-main-header-blue">Semester Timetable</h1>
          <ul className="personal-info-list">
            {courses.courses.map((course) => {
              return (
                <>
                  <li className="personal-info-row">
                    <p className="personal-info-title">{course.name}</p>
                    <p className="personal-info">
                      {course.time ? course.time : "Course Time Not Set"}
                    </p>
                  </li>
                </>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Timetable;
