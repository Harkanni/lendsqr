import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { useUserContext } from './utils/DataContext';

function App() {
  const { isAuthenticated, login, logout } = useUserContext();
  const navigate = useNavigate();

  // Check user authentication on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if user is not authenticated
    }
  }, [isAuthenticated, navigate]);

  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <main className='layout'>
      <Header toggleSidebar={toggleSidebar} />

      <Sidebar isVisible={sidebarVisible} />

      <section className='main__content'>
        <Outlet />
      </section>
    </main>
  );
}

export default App;
