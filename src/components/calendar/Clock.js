import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="clock-card">
      <div className="card-header">
      </div>
      <div className="card-content">
        <div className="clock-display">
          <div className="time">
            {formatTime(currentTime)}
          </div>
          <div className="date-day">
            {formatDate(currentTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
