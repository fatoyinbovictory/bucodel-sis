import React from "react";
import AdminNav from "../../Components/AdminNav";

const Students = () => {
  return (
    <>
      <AdminNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Students</h1>
        <table className="courses-table">
          <thead>
            <tr className="courses-table-row">
              <th className="courses-table-data">Name</th>
              <th className="courses-table-data">Email</th>
              <th className="courses-table-data">Phone Number</th>
              <th className="courses-table-data">Course</th>
              <th className="courses-table-data"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="courses-table-row">
              <td className="courses-table-data" data-label="Name">
                Fatoyinbo Victory
              </td>
              <td className="courses-table-data" data-label="Email">
                vicfatoyinbo@gmail.com
              </td>
              <td className="courses-table-data" data-label="Phone Number">
                09109292737
              </td>
              <td className="courses-table-data" data-label="Course">
                Software Engineering
              </td>
              <td className="courses-table-data" data-label="">
                <button className="courses-table-button">More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Students;
