import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const SelectCourses = () => {
  const [programs, setPrograms] = useState();
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
        const res = await axios.get(`/api/student/programs`);
        setPrograms(res.data);
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
        <div className="loaded">
          <section className="profile-container">
            <h1 className="landing-main-header-blue">Select Courses</h1>
            <table className="courses-table">
              <thead>
                <tr className="courses-table-row">
                  <th className="courses-table-data">Programs</th>
                  <th className="courses-table-data"></th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program) => {
                  return (
                    <tr className="courses-table-row" key={program._id}>
                      <td className="courses-table-data" data-label="Program">
                        {program.name}
                      </td>
                      <td className="courses-table-data" data-label="">
                        <Link to={program._id}>
                          <button className="courses-table-button">
                            Open Courses
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </div>
      )}
    </>
  );
};

export default SelectCourses;
