import React, { useEffect, useState } from "react";
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';
import './Courses.css';
import CourseTable from "./Coursetable";
import CourseForm from "./CourseForm";

const Courses = () => {
    const { userRole } = useAuth();
    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        fetch("https://global-learn-backend.onrender.com/courses")
            .then((r) => r.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, [])
        
    
    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Courses Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Here you can view your enrolled courses, grades, and course materials.</p>
                        {/* Add student-specific course content here */}
                        <div className="table">
                            <table className="table table-hover">
                             <thead>
                              <tr className="table-primary">
                               <th scope="col">#</th>
                               <th scope="col">Name</th>
                               <th scope="col">Description</th>
                               <th scope="col">Course code</th>
                               <th scope="col">Duration</th>
                              </tr>
                             </thead>
                             {courses.map(course =>(
                             <tbody>
                              <tr>
                                <th scope="row">{course.course_id}</th>
                                <td>{course.name}</td>
                                <td>{course.description}</td>
                                <td>{course.course_code}</td>
                                <td>{course.duration_years}</td>
                              </tr>
                             </tbody>
                             ))}
                          </table> 
                        </div>
                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Courses Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage your courses, upload materials, and grade assignments.</p>
                        {/* Add instructor-specific course content here */}
                        <CourseTable/>



                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Courses Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage course offerings, curriculum, and instructor assignments.</p>
                        {/* Add admin-specific course content here */}
                            <CourseForm/>    
                        <CourseTable/>
                      
                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Course Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view course details.</p>
                        {/* We don't need general content */}
                    </div>
                );
        }
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content-card">
                {renderContent()}
            </div>
        </div>
    );
};

export default Courses;
