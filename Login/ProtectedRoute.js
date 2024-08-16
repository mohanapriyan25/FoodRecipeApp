import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('currentUser');

  if (!user) {
    alert('Please login or sign up first');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
