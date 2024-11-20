import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../services/context/DataContext';

const RedirectRoute: React.FC = () => {
   const { isAuthenticated } = useUserContext();

   // If authenticated, redirect to the dashboard or homepage
   return isAuthenticated ? <Navigate to="/users" replace /> : <Outlet />;
};

export default RedirectRoute;
