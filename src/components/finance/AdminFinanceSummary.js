import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useAuth } from '../../contexts/AuthContext';
import SummaryCards from '../cards/SummaryCards';
import './AdminFinanceSummary.css';

// Register the elements
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminFinanceSummary = () => {
  const { currentUser } = useAuth();
  const [financeData, setFinanceData] = useState({ income: 0, expenditure: 0 });

  useEffect(() => {
    // Fetch finance data from the API
    const fetchFinanceData = async () => {
      try {
        const response = await fetch('/api/finance-summary');
        const data = await response.json();
        setFinanceData(data);
      } catch (error) {
        console.error('Error fetching finance data:', error);
      }
    };

    fetchFinanceData();
  }, []);

  const { income, expenditure } = financeData;
  const balance = income - expenditure;

  const data = {
    labels: ['Expenditure', 'Income'],
    datasets: [
      {
        data: [expenditure, income],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <SummaryCards className="admin-finance-summary">
      <h2>Finance Summary</h2>
      <div className="finance-chart">
        <Pie data={data} />
      </div>
      <div className="finance-details">
        <p>Income: ${income.toFixed(2)}</p>
        <p>Expenditure: ${expenditure.toFixed(2)}</p>
        <p>Balance: ${balance.toFixed(2)}</p>
      </div>
    </SummaryCards>
  );
};

export default AdminFinanceSummary;
