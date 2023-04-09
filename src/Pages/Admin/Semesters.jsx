import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const CreateSemester = () => {
  const [semester, setSemester] = useState();
  const [semesterEnd, setSemesterEnd] = useState();
  const [semesters, setSemesters] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [session, setSession] = useState();
  const [errMessage, setErrMessage] = useState();
  const [success, setSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Semesters";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/viewSemesters`);
        setSemesters(res.data);
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

  const activeSem = async (semId) => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(`/api/admin/makeSemActive/${semId}`);
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

  const endSem = async (semId) => {
    setSubmitLoading(true);
    setSubmitFail(false);
    try {
      await axios.patch(`/api/admin/endSemester/${semId}`);
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
          <h1 className="landing-main-header-blue">Semesters</h1>
          <Link to="create">
            <button className="courses-table-button top">Create</button>
          </Link>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Semesters</th>
                <th className="courses-table-data">Duration</th>
                <th className="courses-table-data">Active</th>
                <th className="courses-table-data">End</th>
              </tr>
            </thead>
            <tbody>
              {semesters.map((semesterData) => {
                return (
                  <tr key={semesterData._id} className="courses-table-row">
                    <td
                      className="courses-table-data"
                      data-label="Available Semester"
                    >
                      {`${semesterData.semester}.${semesterData.session}`}
                    </td>
                    <td className="courses-table-data" data-label="Duration">
                      {new Date(semesterData.semesterStart).toLocaleDateString()} -{" "}
                      {new Date(semesterData.semesterEnd).toLocaleDateString()}
                    </td>
                    <td className="courses-table-data" data-label="Active">
                      <button
                        className="courses-table-button"
                        onClick={() => {
                          setSemester(semesterData.semester);
                          setSession(semesterData.session);
                          activeSem(semesterData._id);
                        }}
                      >
                        {semesterData.semester === semester &&
                        submitLoading &&
                        semesterData.session === session ? (
                          <div className="borders"></div>
                        ) : (
                          "Make Semester Active"
                        )}
                      </button>
                      {success &&
                        semesterData.semester === semester &&
                        semesterData.session === session && (
                          <div className="success-mini">
                            Semester successfully Activated
                          </div>
                        )}
                      {submitFail &&
                        semesterData.semester === semester &&
                        semesterData.session === session && (
                          <div className="error-mini">{errMessage}</div>
                        )}
                    </td>
                    <td className="courses-table-data" data-label="Active">
                      <button
                        className="courses-table-button"
                        onClick={() => {
                          setSemesterEnd(semesterData.semester);
                          setSession(semesterData.session);
                          endSem(semesterData._id);
                        }}
                      >
                        {semesterData.semester === semesterEnd &&
                        submitLoading &&
                        semesterData.session === session ? (
                          <div className="borders"></div>
                        ) : (
                          "End Semester"
                        )}
                      </button>
                      {success &&
                        semesterData.semester === semesterEnd &&
                        semesterData.session === session && (
                          <div className="success-mini">
                            Semester successfully Ended
                          </div>
                        )}
                      {submitFail &&
                        semesterData.semester === semesterEnd &&
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
      )}
    </>
  );
};

export default CreateSemester;
