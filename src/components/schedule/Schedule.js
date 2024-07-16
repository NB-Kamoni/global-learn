import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';

const Schedule = () => {
    const { userRole } = useAuth();
    const [schedules, setSchedules] = useState([]);
    const [newSchedule, setNewSchedule] = useState('');
    const [editSchedule, setEditSchedule] = useState(null);
    const [editText, setEditText] = useState('');

    const createSchedule = () => {
        const newEntry = {
            id: Date.now(), // Generate a unique ID based on the current timestamp
            text: newSchedule,
        };
        setSchedules([...schedules, newEntry]);
        setNewSchedule('');
    };

    const updateSchedule = (id) => {
        setSchedules(schedules.map(schedule => 
            schedule.id === id ? { ...schedule, text: editText } : schedule
        ));
        setEditSchedule(null);
        setEditText('');
    };

    const deleteSchedule = (id) => {
        setSchedules(schedules.filter(schedule => schedule.id !== id));
    };

    const renderContent = () => {
        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>View your class schedule, upcoming events, and important deadlines.</p>
                        {renderSchedules()}
                    </div>
                );
            case 'instructor':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Instructor Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage your teaching schedule, office hours, and class announcements.</p>
                        {renderSchedules()}
                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Oversee the overall schedule, adjust academic calendars, and coordinate events.</p>
                        {renderSchedules()}
                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Schedule Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view schedule details.</p>
                    </div>
                );
        }
    };

    const renderSchedules = () => (
        <div>
            <ul>
                {schedules.map(schedule => (
                    <li key={schedule.id}>
                        {editSchedule === schedule.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <span>{schedule.text}</span>
                        )}
                        {editSchedule === schedule.id ? (
                            <button onClick={() => updateSchedule(schedule.id)}>Save</button>
                        ) : (
                            <button onClick={() => { setEditSchedule(schedule.id); setEditText(schedule.text); }}>Edit</button>
                        )}
                        <button onClick={() => deleteSchedule(schedule.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newSchedule}
                onChange={(e) => setNewSchedule(e.target.value)}
                placeholder="Add new schedule"
            />
            <button onClick={createSchedule}>Add</button>
        </div>
    );

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
