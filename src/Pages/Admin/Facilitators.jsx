import React from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../Components/AdminNav";

const Facilitators = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
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
              <th className="courses-table-data"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Course">
                Olaleye Timilehin
              </td>
              <td className="courses-table-data" data-label="Course Code">
                timmy23@gmail.com
              </td>
              <td className="courses-table-data" data-label="Credit Units">
                09109292737
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button red">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Facilitators;
