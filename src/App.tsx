import React from 'react';
import { lendsqrLogo, notificationIcon, searchIcon } from './assets';

function App() {
   return (
      <main>
         <header style={{ color: '#213F7D' }}>
            <nav style={{ display: 'flex', padding: '1rem 2rem', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
               <div style={{ display: 'flex', width: '60%', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div className='logo'>
                     <img src={lendsqrLogo} alt="" width={116} height={30} />
                  </div>
                  <div style={{ display: 'flex', overflow: 'clip', width: '400px', height: '40px', borderRadius: '8px', border: '1px solid #213F7D' }}>
                     <input style={{ width: '85%', padding: '0.5rem', border: 'none', outline: 'none', }} type="text" placeholder='search for anything' />
                     <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#39CDCC', }}>
                        <img src={searchIcon} alt="" />
                     </div>
                  </div>
               </div>
               <div style={{ display: 'flex' }}>
                  <a href="#">Docs</a>
                  <i>bell</i>
                  <div style={{ display: 'flex' }}>
                     <img src={notificationIcon} alt="notification" width={26} height={26} color='black'/>
                     <p>Adedeji</p>
                     <div>
                        <img src="" alt="" />
                     </div>
                  </div>
               </div>
            </nav>
         </header>
      </main>
   );
}

export default App;
