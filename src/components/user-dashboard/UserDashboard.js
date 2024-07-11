import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';
import WelcomeMessage from '../home/WelcomeMessage';
import AdminFinanceSummary from '../finance/AdminFinanceSummary';
import AdminExamSummary from '../exams/AdminExamSummary';
import './UserDashboard.css';
import ActiveInstructors from '../profile/ActiveInstructors';
import AcademicYear from '../schedule/AcademicYear';
import Clock from '../calendar/Clock';

const UserDashboard = () => {
    const { userRole } = useAuth();

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <div className="summary-container">
                            {/* Add admin-specific dashboard content here */}
                           <WelcomeMessage />
                           <AdminExamSummary />
                           <AdminFinanceSummary />
                        </div>
                        <div className="content-container">
                            <div className="left-column">
                                 <ActiveInstructors />
                            </div>
                             <div className="left-column">
                                <div className="top-card">
                                     <Clock />
                                </div>
                                <div className="bottom-card">
                                     <AcademicYear />
                                </div>
                                </div>
                        </div>

                    </div>
                );
            case 'instructor':
                return (
                    <div>
                    <div className="summary-container">
                        {/* Add admin-specific dashboard content here */}
                       <WelcomeMessage />
                       <AdminExamSummary />
                       <AdminFinanceSummary />
                    </div>
                    <div className="content-container">
                        <div className="left-column">
                             <ActiveInstructors />
                        </div>
                         <div className="left-column">
                            <div className="top-card">
                                 <Clock />
                            </div>
                            <div className="bottom-card">
                                 <AcademicYear />
                            </div>
                            </div>
                    </div>

                </div>
                );
            case 'admin':
                return (
                    <div>
                        <div className="summary-container">
                            {/* Add admin-specific dashboard content here */}
                           <WelcomeMessage />
                           <AdminExamSummary />
                           <AdminFinanceSummary />
                        </div>
                        <div className="content-container">
                            <div className="left-column">
                                 <ActiveInstructors />
                            </div>
                             <div className="left-column">
                                <div className="top-card">
                                     <Clock />
                                </div>
                                <div className="bottom-card">
                                     <AcademicYear />
                                </div>
                                </div>
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
