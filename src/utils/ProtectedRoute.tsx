import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from './DataContext';

const ProtectedRoute: React.FC = () => {
   const { isAuthenticated } = useUserContext();


   // useEffect(() => {
   //    const user = localStorage.getItem('lendqr_user'); // Assume 'user' key holds login info
   //    if (!user) {
   //       navigate('/login'); // Redirect to login if not logged in
   //    }
   // }, [navigate]);

   const user = localStorage.getItem('lendqr_user'); // Assume 'user' key holds login info

   if (!user) {
      return <Navigate to="/login" replace />; // Redirect if not authenticated
   }

   return <Outlet />; // Render child routes if authenticated
};

export default ProtectedRoute;
