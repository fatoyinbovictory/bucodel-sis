import React from "react";
import StudentNav from "../../Components/StudentNav";

const Timetable = () => {
  return (
    <>
      <StudentNav />
      <section className="profile-container">
        <h1 className="landing-main-header-blue">Semester Timetable</h1>
        <h2 className="sub-header-gold">Monday</h2>
        <ul className="timetable-list">
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
        </ul>
        <h2 className="sub-header-gold">Tuesday</h2>
        <ul className="timetable-list">
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
        </ul>
        <h2 className="sub-header-gold">Wednesday</h2>
        <ul className="timetable-list">
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
        </ul>
        <h2 className="sub-header-gold">Thursday</h2>
        <ul className="timetable-list">
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
        </ul>
        <h2 className="sub-header-gold">Friday</h2>
        <ul className="timetable-list">
          <li className="timetable-data">Internet Technologies 9:00 - 11:00</li>
        </ul>
      </section>
    </>
  );
};

export default Timetable;
