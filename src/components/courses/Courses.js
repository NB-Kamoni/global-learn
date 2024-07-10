import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Courses = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Courses Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Here you can view your enrolled courses, grades, and course materials.</p>
                        {/* Add student-specific course content here */}





                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Courses Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage your courses, upload materials, and grade assignments.</p>
                        {/* Add instructor-specific course content here */}




                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Courses Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage course offerings, curriculum, and instructor assignments.</p>
                        {/* Add admin-specific course content here */}





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
