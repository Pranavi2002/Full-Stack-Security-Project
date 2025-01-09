import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import useAuth from './hooks/useAuth';

const App = () => {
  const { authData } = useAuth(); // Access authentication data

  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={!authData.isAuthenticated ? <Login /> : <Navigate to={authData.role === 'ROLE_ADMIN' ? '/admin/dashboard' : '/user/dashboard'} replace />} />
        <Route path="/register" element={!authData.isAuthenticated ? <Register /> : <Navigate to={authData.role === 'ROLE_ADMIN' ? '/admin/dashboard' : '/user/dashboard'} replace />} />

        {/* Protected Routes */}
        <Route path="/user/dashboard" element={<PrivateRoute roles={['ROLE_USER']} component={UserDashboard} />} />
        <Route path="/admin/dashboard" element={<PrivateRoute roles={['ROLE_ADMIN']} component={AdminDashboard} />} />

        {/* Default Route */}
        <Route path="/" element={<Home />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
