import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/NotAuthorized.css'; // Adjust the path as necessary

const NotAuthorized = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirect to the home page or any other page
    navigate('/');
  };

  return (
    <div className="not-authorized-container">
      <h1>403 - Not Authorized</h1>
      <p>You do not have permission to access this page.</p>
      <button onClick={handleRedirect} className="redirect-button">
        Go to Home
      </button>
    </div>
  );
};

export default NotAuthorized;
