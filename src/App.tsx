import React, { useState } from 'react';
import { dropdownIcon, lendsqrLogo, notificationIcon, searchIcon, user1 } from './assets';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {

   const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

   const toggleSidebar = () => {
      console.log('Toggle sidebar toggled');
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
