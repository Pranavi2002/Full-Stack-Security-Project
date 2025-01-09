import React, { useState } from 'react';
import { register } from '../axios/api';
import { useNavigate } from 'react-router-dom';
import '../styling/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;

    switch (strength) {
      case 0:
      case 1:
      case 2:
        return "Weak";
      case 3:
      case 4:
        return "Medium";
      case 5:
        return "Strong";
      default:
        return "";
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (passwordStrength !== 'Strong') {
      setError('Please choose a stronger password.');
      return;
    }

    try {
      await register(formData);
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Username might already exist.');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            autoComplete="username"
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              autoComplete="new-password"
              onChange={handlePasswordChange}
            />
            <span onClick={togglePasswordVisibility} className="password-toggle">
              {passwordVisible ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
          {passwordStrength && (
            <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
              Password Strength: {passwordStrength}
            </div>
          )}
          <div className="password-info">
            A strong password should:
            <ul>
              <li>Be at least 8 characters long</li>
              <li>Include uppercase and lowercase letters</li>
              <li>Contain numbers</li>
              <li>Have special characters (e.g., @, #, $, !)</li>
            </ul>
          </div>
        </div>
        <button type="submit" className="register-button">Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
