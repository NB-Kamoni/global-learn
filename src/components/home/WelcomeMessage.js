import React from 'react';
import { useAuth } from '../../contexts/authContext/AuthContext';
import TypingEffect from '../TypingEffect';
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
    <div className="welcome-card"> {/* Main card element */}
      <div className="welcome-greeting"> {/* Header for greeting */}
        {greeting}, {userName}!
      </div>
      <div className="welcome-message"><div>
      <TypingEffect
      texts={[
        "Welcome to your ultimate farm management hub!",
        "Here's what you can achieve with our platform:",
        "Keep detailed Notebooks to record every aspect of your production.",
        "Unlock Analytics to boost efficiency and improve yields.",
        "Manage Inventory effortlessly, ensuring you're always in control.",
        "Connect with a thriving Market to sell your products with ease.",
        "Access a wide range of Services—need a Vet? We've got you covered!",
        "Empower your farm through expert-led Training sessions.",
        "Get instant answers to your agriculture questions with 'Ask Hodari.'"
    ]}
      speed={100} // Speed in milliseconds
      pause={1000} // Pause for 1 second after typing
    />
    </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;