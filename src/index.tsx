import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import App from './App';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import UsersList from './pages/UsersList';
import { UserProvider } from './utils/DataContext';
import ProtectedRoute from './utils/ProtectedRoute'; // Import ProtectedRoute
import RedirectRoute from './utils/RedirectRoute';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <Router>
         <UserProvider>
            <Routes>
               {/* Public Route */}
               <Route element={<RedirectRoute />}>
                  <Route path="/login" element={<Login />} />
               </Route>

               {/* Protected Routes */}
               <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<App />}>
                     <Route path="users" element={<UsersList />} />
                     <Route path="user/:id" element={<UserDetails />} />
                  </Route>
               </Route>
            </Routes>
         </UserProvider>
      </Router>
   </React.StrictMode>
);
