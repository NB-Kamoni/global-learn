import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';
import FinanceForm from '../finance/FinanceForm';

const Finance = () => {
    const { userRole } = useAuth();
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    useEffect(() => {
        // Fetch students and teachers data from the API
        const fetchData = async () => {
            try {
                const studentResponse = await fetch('http://localhost:5000/students');
                if (!studentResponse.ok) throw new Error('Failed to fetch students');
                const studentData = await studentResponse.json();
                setStudents(studentData);

                const teacherResponse = await fetch('http://localhost:5000/teachers');
                if (!teacherResponse.ok) throw new Error('Failed to fetch teachers');
                const teacherData = await teacherResponse.json();
                setTeachers(teacherData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleFormSubmit = async (formData, id) => {
        try {
            const isStudent = userRole === 'student';
            const url = isStudent ? 'http://localhost:5000/students' : 'http://localhost:5000/teachers';
            const method = id ? 'PUT' : 'POST';
            const body = JSON.stringify({ ...formData, id });
            const headers = { 'Content-Type': 'application/json' };

            const response = await fetch(url, {
                method,
                headers,
                body
            });

            if (!response.ok) throw new Error('Failed to save data');

            const updatedData = await response.json();

            if (isStudent) {
                setStudents((prev) => 
                    id 
                        ? prev.map((student) => (student.student_id === id ? updatedData : student))
                        : [...prev, updatedData]
                );
                setSelectedStudent(null);
            } else {
                setTeachers((prev) => 
                    id 
                        ? prev.map((teacher) => (teacher.teacher_id === id ? updatedData : teacher))
                        : [...prev, updatedData]
                );
                setSelectedTeacher(null);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleDelete = async (id, role) => {
        try {
            const url = role === 'student'
                ? `http://localhost:5000/students/${id}`
                : `http://localhost:5000/teachers/${id}`;

            const response = await fetch(url, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Failed to delete data');

            if (role === 'student') {
                setStudents((prev) => prev.filter((student) => student.student_id !== id));
            } else if (role === 'instructor') {
                setTeachers((prev) => prev.filter((teacher) => teacher.teacher_id !== id));
            }
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    const handleEditStudent = (student) => {
        setSelectedStudent(student);
    };

    const handleEditTeacher = (teacher) => {
        setSelectedTeacher(teacher);
    };

    const renderContent = () => {
        if (userRole === 'student') {
            return (
                <div>
                    <h2 style={{ color: 'rgba(65,105,225)' }}>Student Finance Dashboard</h2>
                    <p style={{ color: 'rgba(65,105,225)' }}>View your tuition fees and payment history.</p>
                    <h3>Your Details</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Fees</th>
                                <th>Payment History</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length > 0 ? (
                                students.map((student) => (
                                    <tr key={student.student_id}>
                                        <td>{student.name}</td>
                                        <td>${student.fees}</td>
                                        <td>
                                            <ul>
                                                {student.paymentHistory && student.paymentHistory.length > 0 ? (
                                                    student.paymentHistory.map((payment, index) => (
                                                        <li key={index}>{payment.date}: ${payment.amount}</li>
                                                    ))
                                                ) : (
                                                    <li>No payment history available</li>
                                                )}
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan="3">No student data available</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            );
        }

        if (userRole === 'instructor') {
            return (
                <div>
                    <h2 style={{ color: 'rgba(65,105,225)' }}>Instructor Finance Dashboard</h2>
                    <p style={{ color: 'rgba(65,105,225)' }}>View your salary details and payment history.</p>
                    <h3>Your Details</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Payment History</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.length > 0 ? (
                                teachers.map((teacher) => (
                                    <tr key={teacher.teacher_id}>
                                        <td>{teacher.name}</td>
                                        <td>${teacher.salary}</td>
                                        <td>
                                            <ul>
                                                {teacher.paymentHistory && teacher.paymentHistory.length > 0 ? (
                                                    teacher.paymentHistory.map((payment, index) => (
                                                        <li key={index}>{payment.date}: ${payment.amount}</li>
                                                    ))
                                                ) : (
                                                    <li>No payment history available</li>
                                                )}
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan="3">No teacher data available</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            );
        }

        if (userRole === 'admin') {
            return (
                <div>
                    <h2 style={{ color: 'rgba(65,105,225)' }}>Admin Finance Dashboard</h2>
                    <p style={{ color: 'rgba(65,105,225)' }}>Manage all financial transactions, budgets, and generate reports.</p>

                    <h3>Manage Students</h3>
                    <FinanceForm role="student" initialData={selectedStudent} onFormSubmit={handleFormSubmit} />
                    <h4>Student Details</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Fees</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length > 0 ? (
                                students.map((student) => (
                                    <tr key={student.student_id}>
                                        <td>{student.name}</td>
                                        <td>${student.fees}</td>
                                        <td>
                                            <button onClick={() => handleEditStudent(student)}>Edit</button>
                                            <button onClick={() => handleDelete(student.student_id, 'student')}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan="3">No student data available</td></tr>
                            )}
                        </tbody>
                    </table>

                    <h3>Manage Teachers</h3>
                    <FinanceForm role="instructor" initialData={selectedTeacher} onFormSubmit={handleFormSubmit} />
                    <h4>Teacher Details</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.length > 0 ? (
                                teachers.map((teacher) => (
                                    <tr key={teacher.teacher_id}>
                                        <td>{teacher.name}</td>
                                        <td>${teacher.salary}</td>
                                        <td>
                                            <button onClick={() => handleEditTeacher(teacher)}>Edit</button>
                                            <button onClick={() => handleDelete(teacher.teacher_id, 'instructor')}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan="3">No teacher data available</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            );
        }

        return (
            <div>
                <h2>Finance Dashboard</h2>
                <p style={{ color: 'blue' }}>Please log in to view your finance details.</p>
            </div>
        );
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
