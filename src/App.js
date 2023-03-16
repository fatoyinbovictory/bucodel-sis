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
import StudentFees from "./Pages/Student/Fees";
import FacilitatorDashboard from "./Pages/Facilitator/Dashboard";
import FacilitatorDetails from "./Pages/Facilitator/Details";
import FacilitatorCourses from "./Pages/Facilitator/Courses";
import FacilitatorCourseDetails from "./Pages/Facilitator/CourseDetails";
import FacilitatorCourseStudents from "./Pages/Facilitator/CourseStudents";
import AdminDashboard from "./Pages/Admin/Dashboard";
import AdminDetails from "./Pages/Admin/Details";
import AdminSemester from "./Pages/Admin/CreateSemester";
import AdminPrograms from "./Pages/Admin/Programs";
import AdminCreateProgram from "./Pages/Admin/CreateProgram";
import AdminSpecificProgram from "./Pages/Admin/SpecificProgram";
import AdminCreateCourse from "./Pages/Admin/CreateCourse";
import AdminFacilitators from "./Pages/Admin/Facilitators";
import AdminCreateFacilitator from "./Pages/Admin/CreateFacilitator";
import AdminStudents from "./Pages/Admin/Students";
import AdminApplications from "./Pages/Admin/Applications";
import AdminStudentApp from "./Pages/Admin/StudentApp";
import AdminRegistration from "./Pages/Admin/Registrations";
import AdminStudentReg from "./Pages/Admin/StudentReg";
import AdminFees from "./Pages/Admin/Fees";
import AdminStudentFees from "./Pages/Admin/StudentFees";
import { Context, ContextFacilitator, ContextAdmin } from "./Context/Context";
import { useContext } from "react";

function App() {
  const { student } = useContext(Context);
  const { facilitator } = useContext(ContextFacilitator);
  const { admin } = useContext(ContextAdmin);

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
          <Route
            exact
            path="/student"
            element={
              student ? (
                <StudentDashboard student={student} />
              ) : (
                <StudentLogin />
              )
            }
          />
          <Route
            exact
            path="/student/personal"
            element={
              student ? <StudentPersonal student={student} /> : <StudentLogin />
            }
          />
          <Route
            exact
            path="/student/courses"
            element={
              student ? <StudentCourses student={student} /> : <StudentLogin />
            }
          />
          <Route
            exact
            path="/student/timetable"
            element={
              student ? (
                <StudentTimetable student={student} />
              ) : (
                <StudentLogin />
              )
            }
          />
          <Route
            exact
            path="/student/results"
            element={
              student ? <StudentResults student={student} /> : <StudentLogin />
            }
          />
          <Route
            exact
            path="/student/results/2023-2024-1"
            element={
              student ? (
                <StudentSpecificResult student={student} />
              ) : (
                <StudentLogin />
              )
            }
          />
          <Route
            exact
            path="/student/register/semester"
            element={
              student ? (
                <StudentSelectSem student={student} />
              ) : (
                <StudentLogin />
              )
            }
          />
          <Route
            exact
            path="/student/register/courses"
            element={
              student ? (
                <StudentSelectCourses student={student} />
              ) : (
                <StudentLogin />
              )
            }
          />
          <Route
            exact
            path="/student/register/courses/:id"
            element={
              student ? (
                <StudentCourselist student={student} />
              ) : (
                <StudentLogin />
              )
            }
          />
          <Route
            exact
            path="/student/register/selectedcourses"
            element={
              student ? (
                <StudentSelectedCourses student={student} />
              ) : (
                <StudentLogin />
              )
            }
          />
          <Route
            exact
            path="/student/register/submit"
            element={
              student ? <StudentSubmit student={student} /> : <StudentLogin />
            }
          />
          <Route
            exact
            path="/student/fees"
            element={
              student ? <StudentFees student={student} /> : <StudentLogin />
            }
          />
          <Route
            exact
            path="/facilitator"
            element={
              facilitator ? (
                <FacilitatorDashboard facilitator={facilitator} />
              ) : (
                <FacilitatorLogin />
              )
            }
          />
          <Route
            exact
            path="/facilitator/details"
            element={
              facilitator ? (
                <FacilitatorDetails facilitator={facilitator} />
              ) : (
                <FacilitatorLogin />
              )
            }
          />
          <Route
            exact
            path="/facilitator/courses"
            element={
              facilitator ? (
                <FacilitatorCourses facilitator={facilitator} />
              ) : (
                <FacilitatorLogin />
              )
            }
          />
          <Route
            exact
            path="/facilitator/course/:id"
            element={
              facilitator ? (
                <FacilitatorCourseDetails facilitator={facilitator} />
              ) : (
                <FacilitatorLogin />
              )
            }
          />
          <Route
            exact
            path="/facilitator/course/students/:id"
            element={
              facilitator ? (
                <FacilitatorCourseStudents facilitator={facilitator} />
              ) : (
                <FacilitatorLogin />
              )
            }
          />
          <Route
            exact
            path="/admin"
            element={admin ? <AdminDashboard admin={admin} /> : <AdminLogin />}
          />
          <Route
            exact
            path="/admin/details"
            element={admin ? <AdminDetails admin={admin} /> : <AdminLogin />}
          />
          <Route
            exact
            path="/admin/semester"
            element={admin ? <AdminSemester admin={admin} /> : <AdminLogin />}
          />
          <Route
            exact
            path="/admin/programs"
            element={admin ? <AdminPrograms admin={admin} /> : <AdminLogin />}
          />
          <Route
            exact
            path="/admin/programs/create"
            element={
              admin ? <AdminCreateProgram admin={admin} /> : <AdminLogin />
            }
          />
          <Route
            exact
            path="/admin/programs/:id"
            element={
              admin ? <AdminSpecificProgram admin={admin} /> : <AdminLogin />
            }
          />
          <Route
            exact
            path="/admin/programs/:id/create"
            element={
              admin ? <AdminCreateCourse admin={admin} /> : <AdminLogin />
            }
          />
          <Route
            exact
            path="/admin/facilitators"
            element={
              admin ? <AdminFacilitators admin={admin} /> : <AdminLogin />
            }
          />
          <Route
            exact
            path="/admin/facilitators/create"
            element={
              admin ? <AdminCreateFacilitator admin={admin} /> : <AdminLogin />
            }
          />
          <Route exact path="/admin/students" element={<AdminStudents />} />
          <Route
            exact
            path="/admin/applications"
            element={
              admin ? <AdminApplications admin={admin} /> : <AdminLogin />
            }
          />
          <Route
            exact
            path="/admin/applications/specific"
            element={admin ? <AdminStudentApp admin={admin} /> : <AdminLogin />}
          />
          <Route
            exact
            path="/admin/studentregistration"
            element={
              admin ? <AdminRegistration admin={admin} /> : <AdminLogin />
            }
          />
          <Route
            exact
            path="/admin/studentregistration/specific"
            element={admin ? <AdminStudentReg admin={admin} /> : <AdminLogin />}
          />
          <Route
            exact
            path="/admin/fees"
            element={admin ? <AdminFees admin={admin} /> : <AdminLogin />}
          />
          <Route
            exact
            path="/admin/fees/specific"
            element={
              admin ? <AdminStudentFees admin={admin} /> : <AdminLogin />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
