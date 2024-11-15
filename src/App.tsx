import React from 'react';
import { dropdownIcon, lendsqrLogo, notificationIcon, searchIcon, user1 } from './assets';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
   return (
      <>
         <main className='layout'>
            <Header />

            <Sidebar />

            <section className='main__content'>
               <Outlet />
            </section>
         </main>
      </>
   );
}

export default App;
