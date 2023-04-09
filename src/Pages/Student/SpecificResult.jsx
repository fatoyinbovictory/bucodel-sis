import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const SpecificResult = ({ student }) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [totalCredit, setTotalCredit] = useState(0);
  const [studentCredit, setStudentCredit] = useState(0);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const { id: semId } = useParams();

  useEffect(() => {
    document.title = "Student's Results";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `/api/student/viewResults/${student.id}`,
          JSON.stringify({ semId }),
          {
            headers: { "Content-type": "application/json" }
          }
        );
        setResult(res.data);
        setLoading(false);
        console.log(res.data);
        setStudentCredit(
          res.data.reduce(
            (accum, item) =>
              accum + item.courseId.creditHours * item.gradePoint,
            0
          )
        );
        setTotalCredit(
          res.data.reduce(
            (accum, item) => accum + item.courseId.creditHours * 5,
            0
          )
        );
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        console.log(error);
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
        <section className="profile-container loaded">
          <h1 className="landing-main-header-blue">Results</h1>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Course</th>
                <th className="courses-table-data">Course Code</th>
                <th className="courses-table-data">Credit Units</th>
                <th className="courses-table-data">Score</th>
                <th className="courses-table-data">Grade</th>
                <th className="courses-table-data">Grade Points Recieved</th>
              </tr>
            </thead>
            <tbody>
              {result.map((res) => {
                return (
                  <tr className="courses-table-row" key={res._id}>
                    <td className="courses-table-data" data-label="Course">
                      {res.courseId.name}
                    </td>
                    <td className="courses-table-data" data-label="Course Code">
                      {res.courseId.courseCode}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Credit Units"
                    >
                      {res.courseId.creditHours}
                    </td>
                    <td className="courses-table-data" data-label="Score">
                      {res.score}
                    </td>
                    <td className="courses-table-data" data-label="Grade">
                      {res.grade}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Grade Points Recieved"
                    >
                      {res.courseId.creditHours * res.gradePoint}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <h1 className="landing-main-header-blue">GPA</h1>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Total Grade Points</th>
                <th className="courses-table-data">
                  Total Grade Points Recieved
                </th>
                <th className="courses-table-data">GPA</th>
                <th className="courses-table-data">C.GPA</th>
              </tr>
            </thead>
            <tbody>
              <tr className="courses-table-row">
                <td
                  className="courses-table-data"
                  data-label="Total Grade Points"
                >
                  {totalCredit}
                </td>
                <td
                  className="courses-table-data"
                  data-label="Total Grade Points Recieved"
                >
                  {studentCredit}
                </td>
                <td className="courses-table-data" data-label="GPA">
                  {((studentCredit / totalCredit) * 5).toFixed(2)}
                </td>
                <td className="courses-table-data" data-label="C.GPA">
                  {((studentCredit / totalCredit) * 5).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default SpecificResult;
