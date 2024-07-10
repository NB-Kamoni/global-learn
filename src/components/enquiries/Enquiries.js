import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Enquiries = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Enquiries Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>View your academic enquiries, support requests, and counseling appointments.</p>
                        {/* Add student-specific enquiries content here */}



                        
                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Enquiries Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage student enquiries, respond to academic questions, and schedule office hours.</p>
                        {/* Add instructor-specific enquiries content here */}




                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Enquiries Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Oversee student support services, handle escalated enquiries, and coordinate resolution.</p>
                        {/* Add admin-specific enquiries content here */}



                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Enquiries Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view enquiries details.</p>
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

export default Enquiries;
