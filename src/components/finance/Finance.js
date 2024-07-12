import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { useAuth } from '../../contexts/AuthContext';
import './AdminFinanceSummary.css'

const generateRandomTeachers = () => {
    return [
        { id: 1, role: "Science Teacher", salary: 60000 },
        { id: 2, role: "Mathematics Teacher", salary: 60000 },
        { id: 3, role: "Art Teacher", salary: 45000 },
        { id: 4, role: "History Teacher", salary: 55000 },
        { id: 5, role: "Geography Teacher", salary: 50000 },
    ];
};

const Finances = () => {
    const { userRole } = useAuth();
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [fees, setFees] = useState([]);
    const [salaries, setSalaries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch courses data
                const coursesResponse = await fetch("http://127.0.0.1:5555/courses");
                if (!coursesResponse.ok) {
                    throw new Error(`HTTP error! Status: ${coursesResponse.status}`);
                }
                const coursesData = await coursesResponse.json();
                setCourses(coursesData);

                // Fetch students data
                const studentsResponse = await fetch("http://127.0.0.1:5555/students");
                if (!studentsResponse.ok) {
                    throw new Error(`HTTP error! Status: ${studentsResponse.status}`);
                }
                const studentsData = await studentsResponse.json();
                setStudents(studentsData);

                // Generate random teachers data
                setTeachers(generateRandomTeachers());

                // Mock fees data
                setFees([
                    {
                        "course": "Art Based",
                        "diploma": {
                            "Tuition": 100000,
                            "Statutory Fees": 26000
                        },
                        "certificate": {
                            "Tuition": 26000,
                            "Statutory Fees": 26000
                        }
                    },
                    {
                        "course": "Science Based",
                        "diploma": {
                            "Tuition": 110000,
                            "Statutory Fees": 26000
                        },
                        "certificate": {
                            "Tuition": 26000,
                            "Statutory Fees": 26000
                        }
                    }
                ]);

                // Mock salaries data
                setSalaries([
                    { "role": "Science Teacher", "salary": 60000 },
                    { "role": "Mathematics Teacher", "salary": 60000 },
                    { "role": "Art Teacher", "salary": 45000 },
                    { "role": "History Teacher", "salary": 55000 },
                    { "role": "Geography Teacher", "salary": 50000 }
                ]);

            } catch (err) {
                setError("Error fetching data: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>{error}</div>;
        }

        switch (userRole) {
            case 'student':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Student Fees Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Here you can view the school fees structure for your courses.</p>
                        <div className="table">
                            <table className="table table-hover">
                                <thead>
                                    <tr className="table-primary">
                                        <th scope="col">Course</th>
                                        <th scope="col">Fees (KSH)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fees.map((fee) => (
                                        <React.Fragment key={fee.course}>
                                            <tr>
                                                <td>{fee.course} (Diploma)</td>
                                                <td>{fee.diploma.Tuition + fee.diploma['Statutory Fees']}</td>
                                            </tr>
                                            <tr>
                                                <td>{fee.course} (Certificate)</td>
                                                <td>{fee.certificate.Tuition + fee.certificate['Statutory Fees']}</td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'teacher':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Teacher Salary Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Here you can view your salary details.</p>
                        <div className="table">
                            <table className="table table-hover">
                                <thead>
                                    <tr className="table-primary">
                                        <th scope="col">Role</th>
                                        <th scope="col">Salary (KSH)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salaries.filter(salary => teachers.some(teacher => teacher.role === salary.role)).map((salary) => (
                                        <tr key={salary.role}>
                                            <td>{salary.role}</td>
                                            <td>{salary.salary}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Admin Financial Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Manage and view all financial data including fees and salaries.</p>
                        <div className="table">
                            <h3>School Fees Structure</h3>
                            <table className="table table-hover">
                                <thead>
                                    <tr className="table-primary">
                                        <th scope="col">Course</th>
                                        <th scope="col">Diploma Tuition (KSH)</th>
                                        <th scope="col">Diploma Statutory Fees (KSH)</th>
                                        <th scope="col">Certificate Tuition (KSH)</th>
                                        <th scope="col">Certificate Statutory Fees (KSH)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fees.map((fee) => (
                                        <tr key={fee.course}>
                                            <td>{fee.course}</td>
                                            <td>{fee.diploma.Tuition}</td>
                                            <td>{fee.diploma['Statutory Fees']}</td>
                                            <td>{fee.certificate.Tuition}</td>
                                            <td>{fee.certificate['Statutory Fees']}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3>Teacher Salaries</h3>
                            <table className="table table-hover">
                                <thead>
                                    <tr className="table-primary">
                                        <th scope="col">Role</th>
                                        <th scope="col">Salary (KSH)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teachers.map((teacher) => (
                                        <tr key={teacher.id}>
                                            <td>{teacher.role}</td>
                                            <td>{teacher.salary}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            default:
                return (
                    <div>
                        <h2 style={{ color: '#4169E1' }}>Financial Dashboard</h2>
                        <p style={{ color: '#4169E1' }}>Please log in to view financial details.</p>
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

export default Finances;