import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Opportunities = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Opportunities Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Explore internship opportunities, job postings, and career development resources.</p>
                        {/* Add student-specific opportunities content here */}



                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Opportunities Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Discover professional development opportunities, teaching positions, and research grants.</p>
                        {/* Add instructor-specific opportunities content here */}



                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Opportunities Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage partnership opportunities, funding opportunities, and industry collaborations.</p>
                        {/* Add admin-specific opportunities content here */}



                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Opportunities Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view opportunities details.</p>
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

export default Opportunities;
