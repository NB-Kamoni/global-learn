import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';
import WelcomeMessage from '../home/WelcomeMessage';
import './UserDashboard.css';

const UserDashboard = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        {/* Add student-specific dashboard content here */}
                        <WelcomeMessage />



                    </div>
                );
            case 'instructor':
                return (
                    <div>
                
                        {/* Add instructor-specific dashboard content here */}
                        <WelcomeMessage />




                    </div>
                );
            case 'admin':
                return (
                    <div>

                        <div className="summary-container">
                            {/* Add admin-specific dashboard content here */}
                           <WelcomeMessage />
                           <WelcomeMessage />
                           <WelcomeMessage />
                        </div>


                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>User Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view dashboard details.</p>
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

export default UserDashboard;
