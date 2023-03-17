import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../Api/axios";
import AdminNav from "../../Components/AdminNav";

const Facilitators = () => {
  const [facilitators, setFacilitators] = useState();
  const [loading, setLoading] = useState(true);
  const [loadFail, setLoadFail] = useState(false);
  const [errMessage, setErrMessage] = useState();

  useEffect(() => {
    document.title = "Facilitators";
  }, []);

  useEffect(() => {
    setLoadFail(false);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/admin/facilitatorIds`);
        setFacilitators(res.data);
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
          <h1 className="landing-main-header-blue">Facilitators</h1>
          <Link to="create">
            <button className="courses-table-button top">Create</button>
          </Link>
          <table className="courses-table">
            <thead>
              <tr className="courses-table-row">
                <th className="courses-table-data">Name</th>
                <th className="courses-table-data">Email</th>
                <th className="courses-table-data">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {facilitators.map((facilitator) => {
                return (
                  <tr className="courses-table-row" key={facilitator._id}>
                    <td className="courses-table-data" data-label="Name">
                      {facilitator.firstName} {facilitator.lastName}
                    </td>
                    <td className="courses-table-data" data-label="Email">
                      {facilitator.email}
                    </td>
                    <td
                      className="courses-table-data"
                      data-label="Phone Number"
                    >
                      {facilitator.phone}
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

export default Facilitators;
