import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Schedule = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>View your class schedule, upcoming events, and important deadlines.</p>
                        {/* Add student-specific schedule content here */}



                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage your teaching schedule, office hours, and class announcements.</p>
                        {/* Add instructor-specific schedule content here */}




                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Oversee the overall schedule, adjust academic calendars, and coordinate events.</p>
                        {/* Add admin-specific schedule content here */}





                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view schedule details.</p>
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

export default Schedule;
