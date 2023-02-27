import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import StudentLogin from "./Pages/StudentLogin";
import FacilitatorLogin from "./Pages/FacilitatorLogin";
import AdminLogin from "./Pages/AdminLogin";
import StudentDashboard from "./Pages/Student/Dashboard";
import StudentPersonal from "./Pages/Student/Personal";
import StudentCourses from "./Pages/Student/Courses";
import StudentTimetable from "./Pages/Student/Timetable";
import StudentResults from "./Pages/Student/Results";
import StudentSpecificResult from "./Pages/Student/SpecificResult";
import StudentSelectSem from "./Pages/Student/SelectSem";
import StudentSelectCourses from "./Pages/Student/SelectCourses";
import StudentCourselist from "./Pages/Student/Courselist";
import StudentSelectedCourses from "./Pages/Student/SelectedCourses";
import StudentSubmit from "./Pages/Student/Submit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/studentlogin" element={<StudentLogin />} />
          <Route
            exact
            path="/facilitatorlogin"
            element={<FacilitatorLogin />}
          />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/student" element={<StudentDashboard />} />
          <Route exact path="/student/personal" element={<StudentPersonal />} />
          <Route exact path="/student/courses" element={<StudentCourses />} />
          <Route
            exact
            path="/student/timetable"
            element={<StudentTimetable />}
          />
          <Route exact path="/student/results" element={<StudentResults />} />
          <Route
            exact
            path="/student/results/2023-2024-1"
            element={<StudentSpecificResult />}
          />
          <Route
            exact
            path="/student/register/semester"
            element={<StudentSelectSem />}
          />
          <Route
            exact
            path="/student/register/courses"
            element={<StudentSelectCourses />}
          />
          <Route
            exact
            path="/student/register/courses/courselist"
            element={<StudentCourselist />}
          />
          <Route
            exact
            path="/student/register/selectedcourses"
            element={<StudentSelectedCourses />}
          />
            <Route
            exact
            path="/student/register/submit"
            element={<StudentSubmit/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
