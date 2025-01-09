import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styling/NavBar.css';

const NavBar = () => {
  const { authData, logout } = useAuth();

  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link">Home</Link>
      <div className="nav-links">
        {authData.isAuthenticated ? (
          <>
            {authData.role === 'admin' && <Link to="/admin/dashboard" className="nav-link">Admin Dashboard</Link>}
            {authData.role === 'user' && <Link to="/user/dashboard" className="nav-link">User Dashboard</Link>}
            <button onClick={logout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
