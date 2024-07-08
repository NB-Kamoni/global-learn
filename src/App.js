import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/authContext/AuthContext";
import Dashboard from "./components/home/Dashboard";
import Choppy from "./components/choppy/Choppy";
import Instructors from "./components/instructors/Instructors";
import Students from "./components/students/Students";
import Analytics from "./components/analytics/Analytics"
import Help from "./components/help/Help"
import Courses from "./components/courses/Courses"




function App() {
  return (

    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/choppy" element={<Choppy />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/help" element={<Help />} />
          <Route path="/students" element={<Students />} />
          <Route path="/instructors" element={<Instructors />} />
          

        </Routes>
      </Router>
    </AuthProvider>
  
  );
}

export default App;