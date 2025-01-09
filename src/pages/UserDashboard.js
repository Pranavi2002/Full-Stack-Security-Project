import React, { useState } from 'react';
import { updateUser } from '../axios/api';
import useAuth from '../hooks/useAuth';
import '../styling/UserDashboard.css';

const UserDashboard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const { logout } = useAuth();

  const storedUsername = localStorage.getItem('username') || 'User';

  const handleUpdate = async () => {
    setError('');
    setMessage('');

    if (!username && !password) {
      setError('Please fill in at least one field before updating.');
      return;
    }

    try {
      const updateData = {};
      if (username) updateData.username = username;
      if (password) updateData.password = password;

      await updateUser(updateData);
      setMessage('Profile updated successfully!');
      if (username) {
        localStorage.setItem('username', username);
      }
      setUsername('');
      setPassword('');
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.response?.data || 'Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>
      <p>Welcome, {storedUsername}!</p>
      <div className="form-container">
        <input
          type="text"
          placeholder="New Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button onClick={handleUpdate} className="update-btn">
          Update Profile
        </button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
