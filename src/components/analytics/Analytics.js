import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Analytics = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Analytics Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>View your academic performance metrics, attendance statistics, and course progress.</p>
                        {/* Add student-specific analytics content here */}
                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Analytics Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Analyze student performance, evaluate course effectiveness, and review teaching metrics.</p>
                        {/* Add instructor-specific analytics content here */}
                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Analytics Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Generate institutional reports, monitor overall performance metrics, and analyze trends.</p>
                        {/* Add admin-specific analytics content here */}
                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Analytics Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view analytics details.</p>
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

export default Analytics;
