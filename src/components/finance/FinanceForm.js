import React, { useState, useEffect } from 'react';

const FinanceForm = ({ role, initialData, onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        fees: '',
        salary: '',
        paymentHistory: [],
        totalEarned: '',
        pendingBalance: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData, formData.id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            {role === 'student' && (
                <>
                    <label>
                        Fees:
                        <input
                            type="number"
                            name="fees"
                            value={formData.fees}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </>
            )}
            {role === 'instructor' && (
                <>
                    <label>
                        Salary:
                        <input
                            type="number"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Total Earned:
                        <input
                            type="number"
                            name="totalEarned"
                            value={formData.totalEarned}
                            onChange={handleChange}
                        />
                    </label>
                </>
            )}
            <button type="submit">Save</button>
        </form>
    );
};

export default FinanceForm;
