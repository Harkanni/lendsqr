import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import UsersList from './pages/UsersList';




const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<App />}> { /* The APP Component is the main LAYOUT i.e the Home Page of the App */}
               <Route path="/users" element={<UsersList />} />
               <Route path="/user/:id" element={<UserDetails />} />
            </Route>
         </Routes>
      </Router>
   </React.StrictMode>
);



