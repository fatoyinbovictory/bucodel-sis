import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const Programs = () => {
  const [programs, setPrograms] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);

  useEffect(() => {
    document.title = "Programs";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/programs`);
        setPrograms(res.data);
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
          <h1 className="landing-main-header-blue">Programs</h1>
          <Link to="create">
            <button className="courses-table-button top">Create Program</button>
          </Link>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Program Name</th>
                <th className="courses-table-data">No. of Courses</th>
                <th className="courses-table-data">Duration</th>
                <th className="courses-table-data">Certification</th>
                <th className="courses-table-data"></th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => {
                return (
                  <tr className="courses-table-row" key={program._id}>
                    <td
                      className="courses-table-data"
                      data-label="Program Name"
                    >
                      {program.name}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="No. of Courses"
                    >
                      {program.programCourses.length}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Duration(Years)"
                    >
                      {program.duration} Years
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Certification"
                    >
                      {program.certification}
                    </td>
                    <td className="courses-table-data" data-label="">
                      <Link to={program._id}>
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

export default Programs;
