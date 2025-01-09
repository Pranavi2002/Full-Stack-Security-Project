import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [authData, setAuthData] = useState({
    isAuthenticated: !!localStorage.getItem('token'),
    role: localStorage.getItem('role') || '',
  });
  
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const login = (token, role) => {
    setAuthData({ isAuthenticated: true, role });
    localStorage.setItem('token', token); // Store token
    localStorage.setItem('role', role); // Store role
  };

  const logout = () => {
    setAuthData({ isAuthenticated: false, role: '' });
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/'); // Redirect to home page after logout
  };

  return { authData, login, logout };
};

export default useAuth;
