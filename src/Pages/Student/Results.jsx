import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const Results = ({ student }) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Student's Results";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/student/resultOverview/${student.id}`
        );
        setResult(res.data);
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
          <h1 className="landing-main-header-blue">Results</h1>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Semester</th>
                <th className="courses-table-data">Level</th>
                <th className="courses-table-data">Semester No. of Courses</th>
                <th className="courses-table-data"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="courses-table-row">
                <td className="courses-table-data" data-label="Semester">
                  {result.semester}
                </td>
                <td className="courses-table-data" data-label="Level">
                  100
                </td>
                <td className="courses-table-data" data-label="Semester No. of Courses">
                  {result.courses.length}
                </td>
                <td className="courses-table-data" data-label="">
                  {/* <button className="courses-table-button">More</button> */}
                  <Link to={result._id}>
                    <button className="courses-table-button">More</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default Results;
