import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Api/axios";
import StudentNav from "../../Components/StudentNav";

const SelectSem = ({ student }) => {
  useEffect(() => {
    document.title = "Student's Details";
  }, []);
  const [semesterInfo, setSemesterInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState();
  const [loadFail, setLoadFail] = useState(false);
  const [semester, setSemester] = useState();
  const [session, setSession] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/student/getSemesters/`);
        setSemesterInfo(res.data);
        setLoading(false);
      } catch (error) {
        setLoadFail(true);
        setLoading(false);
        setErrMessage(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (selectedSem, selectedSes) => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(
        `/api/student/selectSemester/${student.id}`,
        JSON.stringify({ semester: selectedSem, session: selectedSes }),
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
    } catch (err) {
      setSubmitFail(true);
      setSubmitLoading(false);
      setErrMessage(err.response);
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
        <div className="loaded">
          <section className="profile-container">
            <h1 className="landing-main-header-blue">Select Semester</h1>
            <table className="courses-table">
              <thead>
                <tr className="courses-table-row">
                  <th className="courses-table-data">Available Semesters</th>
                  <th className="courses-table-data">Duration</th>
                  <th className="courses-table-data"></th>
                </tr>
              </thead>
              <tbody>
                {semesterInfo.map((semesterData) => {
                  return (
                    <tr key={semesterData._id} className="courses-table-row">
                      <td
                        className="courses-table-data"
                        data-label="Available Semester"
                      >
                        {`${semesterData.semester}.${semesterData.session}`}
                      </td>
                      <td className="courses-table-data" data-label="Duration">
                        {new Date(
                          semesterData.semesterStart
                        ).toLocaleDateString()}{" "}
                        -{" "}
                        {new Date(
                          semesterData.semesterEnd
                        ).toLocaleDateString()}
                      </td>
                      <td className="courses-table-data" data-label="">
                        <button
                          className="courses-table-button"
                          onClick={() => {
                            handleSubmit(
                              semesterData.semester,
                              semesterData.session
                            );
                          }}
                        >
                          {semesterData.semester === semester &&
                          submitLoading &&
                          semesterData.session === session ? (
                            <div className="borders"></div>
                          ) : (
                            "Pick Semester"
                          )}
                        </button>
                        {success &&
                          semesterData.semester === semester &&
                          semesterData.session === session && (
                            <div className="success-mini">
                              Semester successfully selected
                            </div>
                          )}
                        {submitFail &&
                          semesterData.semester === semester &&
                          semesterData.session === session && (
                            <div className="error-mini">{errMessage}</div>
                          )}
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

export default SelectSem;
