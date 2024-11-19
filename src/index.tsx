import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import App from './App';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import UsersList from './pages/UsersList';
import { UserProvider } from './utils/DataContext'; // Import UserProvider

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />}>
            <Route path="/users" element={<UsersList />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
