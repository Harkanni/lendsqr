import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
   const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

   const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
   };

   return (
      <main className="layout">
         <Header toggleSidebar={toggleSidebar} />

         <Sidebar isVisible={sidebarVisible} />

         <section className="main__content">
            <Outlet />
         </section>
      </main>
   );
}

export default App;
