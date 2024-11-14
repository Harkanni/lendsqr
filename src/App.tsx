import React from 'react';
import { dropdownIcon, lendsqrLogo, notificationIcon, searchIcon, user1 } from './assets';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
   return (
      <main>
         <Header />

         <aside className="sidebar">
            <nav>
               <ul>
                  <li><a href="/users">Users List</a></li>
                  <li><a href="/user/123">User details</a></li>
               </ul>
            </nav>
         </aside>

         <Sidebar />

         <section className='bodyContent'>
            <Outlet />
         </section>
      </main>
   );
}

export default App;
