import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/home/Dashboard";
import Choppy from "./components/choppy/Choppy";
import Analytics from "./components/analytics/Analytics"
import Help from "./components/help/Help"
import Courses from "./components/courses/Courses"
import Exams from "./components/exams/Exams"
import Schedule from "./components/schedule/Schedule"
import Finance from "./components/finance/Finance"
import Notes from "./components/notes/Notes"
import Calendar from "./components/calendar/Calendar"
import Opportunities from "./components/opportunities/Opportunities"
import Enquiries from "./components/enquiries/Enquiries"

function Main() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/choppy" element={<Choppy />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/help" element={<Help />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/enquiries" element={<Enquiries />} />
        

      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
}

export default App;
