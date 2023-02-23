import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Apply from "./Pages/Apply";
import StudentLogin from "./Pages/StudentLogin";
import FacilitatorLogin from "./Pages/FacilitatorLogin";
import AdminLogin from "./Pages/AdminLogin";
import StudentDashboard from "./Pages/Student/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/studentlogin" element={<StudentLogin />} />
          <Route exact path="/facilitatorlogin" element={<FacilitatorLogin />} />
          <Route exact path="/adminlogin" element={<AdminLogin />} />
          <Route exact path="/student" element={<StudentDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
