import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RequireAuthProps {
  children: React.ReactElement;
}

/**
 * Protects routes by ensuring that a valid admin session exists. If
 * loading, a placeholder is rendered. Unauthenticated users are
 * redirected to the login page with the return location saved in state.
 */
const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { session, loading } = useAuth();
  const location = useLocation();
  if (loading) return <div>Loading...</div>;
  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
