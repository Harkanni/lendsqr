import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../services/context/DataContext';

const ProtectedRoute: React.FC = () => {
   // eslint-disable-next-line
   const { isAuthenticated } = useUserContext();

   const user = localStorage.getItem('lendqr_user'); // Assume 'user' key holds login info

   if (!user) {
      return <Navigate to="/login" replace />; // Redirect if not authenticated
   }

   return <Outlet />; // Render child routes if authenticated
};

export default ProtectedRoute;
