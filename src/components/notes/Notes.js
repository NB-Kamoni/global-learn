import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Notes = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Notes Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Access your lecture notes, study guides, and course materials.</p>
                        {/* Add student-specific notes content here */}
                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Notes Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage course materials, upload lecture notes, and share resources with students.</p>
                        {/* Add instructor-specific notes content here */}
                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Notes Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Oversee content management, organize educational resources, and maintain course archives.</p>
                        {/* Add admin-specific notes content here */}




                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Notes Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view notes details.</p>
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

export default Notes;
