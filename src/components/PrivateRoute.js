import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ roles, component: Component }) => {
  const { authData } = useAuth();

  if (!authData.isAuthenticated) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  if (!roles.includes(authData.role)) {
    // Redirect to a "Not Authorized" page or dashboard if the user lacks permissions
    return <Navigate to="/" />;
  }

  // Render the component if the user is authorized
  return <Component />;
};

export default PrivateRoute;
