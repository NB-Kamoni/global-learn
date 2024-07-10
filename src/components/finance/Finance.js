// src/components/finance/Finance.js

import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext'


// Define the Finance component
const Finance = () => {
    // Get the user role from context
    const { userRole } = useAuth();

    // Function to render content based on the user role
    const renderContent = () => {
        switch (userRole) {
            case 'student':
                // Content for students
                return (
                    <div>
                        <h2 style={{ color: 'rgba(65,105,225)' }}>Student Finance Dashboard</h2>
                        <p style={{ color: 'rgba(65,105,225)' }}>View your tuition fees, payment history, and pending balances.</p>
                        {/* Add student content here */}





                    </div>
                );
            case 'instructor':
                // Content for instructors
                return (
                    <div>
                        <h2 style={{ color: 'rgba(65,105,225)' }}>Instructor Finance Dashboard</h2>
                        <p style={{ color: 'rgba(65,105,225)' }}>View your salary details, payment history, and manage expense reports.</p>
                        {/* instructor content here */}






                    </div>
                );
            case 'admin':
                // Content for admins
                return (
                    <div>
                        <h2 style={{ color: 'rgba(65,105,225)' }}>Admin Finance Dashboard</h2>
                        <p style={{ color: 'rgba(65,105,225)' }}>Manage all financial transactions, budgets, and generate reports.</p>
                        {/* admin content here */}








                    </div>
                );
            default:
                // Content for guests or unknown roles
                return (
                    <div>
                        <h2>Finance Dashboard</h2>
                        <p style={{ color: 'blue' }}>Please log in to view your finance details.</p>
                        {/* we dont need general content */}
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

export default Finance;
