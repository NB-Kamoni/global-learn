import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './WelcomeMessage.css';

const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return 'Good morning';
  } else if (currentHour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

const extractFirstName = (email) => {
  const namePart = email.split('@')[0];
  const firstName = namePart.split('.')[0]; // Get the first part before any dots
  return firstName.charAt(0).toUpperCase() + firstName.slice(1); // Capitalize
};

const WelcomeMessage = () => {
  const { currentUser } = useAuth();
  const greeting = getGreeting();

  const userName = currentUser.displayName
    ? currentUser.displayName.split(' ')[0] // Extract first name from display name
    : extractFirstName(currentUser.email); // Extract from email if no display name

  return (
    <div className="welcome-card">
      <div className="profile-circle">
        {/* Display user's profile picture or initials */}
        {currentUser.photoURL ? (
          <img src={currentUser.photoURL} alt="Profile" className="profile-image" />
        ) : (
          <div className="profile-initials">{userName.charAt(0)}</div>
        )}
      </div>
      <div className="welcome-greeting">
        {greeting}, {userName}!
      </div>
      <div className="welcome-message">
        {/* TypingEffect component can be added here */}
        <div className="welcome-buttons">
          <button className="welcome-button">Profile</button>
          <button className="welcome-button">Updates</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
