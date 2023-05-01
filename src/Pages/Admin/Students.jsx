import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const Students = () => {
  const [students, setStudents] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();

  useEffect(() => {
    document.title = "Students";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/students`);
        setStudents(res.data);
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
          <h1 className="landing-main-header-blue">Students</h1>
          <Link to="create">
            <button className="courses-table-button top">Create</button>
          </Link>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Name</th>
                <th className="courses-table-data">Email</th>
                <th className="courses-table-data">Phone Number</th>
                <th className="courses-table-data">Program</th>
                <th className="courses-table-data"></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr className="courses-table-row" key={student._id}>
                    <td className="courses-table-data" data-label="Name">
                      {student.firstName} {student.lastName}
                    </td>
                    <td className="courses-table-data" data-label="Email">
                      {student.email}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Phone Number"
                    >
                      {student.phone}
                    </td>
                    <td className="courses-table-data" data-label="Program">
                      {student.program}
                    </td>
                    <Link to={student._id}>
                      <td className="courses-table-data" data-label="">
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

export default Students;
