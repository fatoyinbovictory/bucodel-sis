import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import FacilitatorNav from "../../Components/FacilitatorNav";

const CourseStudents = () => {
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [score, setScore] = useState();
  const [studentId, setStudentId] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Course Students";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/facilitator/getCourseStudents/${id}`);
        setStudents(res.data);
        setLoading(false);
        console.log(res.data);
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.post(
        `/api/facilitator/scoreStudent`,
        JSON.stringify({ score, studentId, courseId: id }),
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
      setScore()
    } catch (error) {
      setSubmitFail(true);
      setSubmitLoading(false);
      setErrMessage(error.response.data.error);
    }
  };

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
          <br />
          <br />
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Student Name</th>
                <th className="courses-table-data">Matric No.</th>
                <th className="courses-table-data">Program</th>
                <th className="courses-table-data">Score</th>
                <th className="courses-table-data"></th>
              </tr>
            </thead>
            <tbody>
              {students.students.map((student) => {
                return (
                  <tr className="courses-table-row" key={student._id}>
                    <td
                      className="courses-table-data"
                      data-label="Student Name"
                    >
                      {student.lastName} {student.firstName}
                    </td>
                    <td className="courses-table-data" data-label="Matric No.">
                      {student.matricNo}
                    </td>
                    <td className="courses-table-data" data-label="Program">
                      {student.program}
                    </td>
                    <td className="courses-table-data" data-label="Score">
                      <input
                        type="text"
                        className="table-input"
                        onChange={(e) => {
                          setScore(e.target.value);
                          setStudentId(student._id);
                        }}
                      />
                    </td>
                    <td className="courses-table-data" data-label="">
                      <button
                        className="courses-table-button"
                        onClick={handleSubmit}
                      >
                        {submitLoading && studentId === student._id ? (
                          <div className="borders"></div>
                        ) : (
                          "Upload Score"
                        )}
                      </button>
                      {success && studentId === student._id && (
                        <div className="success-mini">
                          Student successfully scored
                        </div>
                      )}
                      {submitFail && studentId === student._id && (
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

export default CourseStudents;
