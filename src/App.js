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
            element={<StudentSubmit />}
          />
          <Route exact path="/student/fees" element={<StudentFees />} />
          <Route exact path="/facilitator" element={<FacilitatorDashboard />} />
          <Route
            exact
            path="/facilitator/details"
            element={<FacilitatorDetails />}
          />
          <Route
            exact
            path="/facilitator/courses"
            element={<FacilitatorCourses />}
          />
          <Route
            exact
            path="/facilitator/course/details"
            element={<FacilitatorCourseDetails />}
          />
          <Route
            exact
            path="/facilitator/course/details/students"
            element={<FacilitatorCourseStudents />}
          />
          <Route exact path="/admin" element={<AdminDashboard />} />
          <Route exact path="/admin/details" element={<AdminDetails />} />
          <Route exact path="/admin/semester" element={<AdminSemester />} />
          <Route exact path="/admin/programs" element={<AdminPrograms />} />
          <Route
            exact
            path="/admin/programs/create"
            element={<AdminCreateProgram />}
          />
          <Route
            exact
            path="/admin/programs/specific"
            element={<AdminSpecificProgram />}
          />
          <Route
            exact
            path="/admin/programs/specific/create"
            element={<AdminCreateCourse />}
          />
          <Route
            exact
            path="/admin/facilitators"
            element={<AdminFacilitators />}
          />
          <Route
            exact
            path="/admin/facilitators/create"
            element={<AdminCreateFacilitator />}
          />
          <Route exact path="/admin/students" element={<AdminStudents />} />
          <Route
            exact
            path="/admin/applications"
            element={<AdminApplications />}
          />
          <Route
            exact
            path="/admin/applications/specific"
            element={<AdminStudentApp />}
          />
          <Route
            exact
            path="/admin/studentregistration"
            element={<AdminRegistration />}
          />
          <Route
            exact
            path="/admin/studentregistration/specific"
            element={<AdminStudentReg />}
          />
          <Route exact path="/admin/fees" element={<AdminFees />} />
          <Route
            exact
            path="/admin/fees/specific"
            element={<AdminStudentFees />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
