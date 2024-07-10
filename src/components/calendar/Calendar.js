import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Calendar = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Calendar Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>View your class schedule, assignment due dates, and exam schedules.</p>
                        {/* Add student-specific calendar content here */}



                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Calendar Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage your teaching schedule, office hours, and class events.</p>
                        {/* Add instructor-specific calendar content here */}


                        
                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Calendar Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Oversee the institutional calendar, manage important dates, and coordinate events.</p>
                        {/* Add admin-specific calendar content here */}



                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Calendar Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view calendar details.</p>
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

export default Calendar;
