import React from 'react'
import { lendsqrLogo, searchIcon, notificationIcon, user1, dropdownIcon } from '../assets'

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
   return (
      <div style={{ position: 'fixed', zIndex: '9999999999999' }}>
         <header style={{ height: 'fit-content', background: 'white', color: '#213F7D', zIndex: '999999999999', position: 'fixed', inset: 0, }}>
            <nav style={{ display: 'flex', padding: '1rem 2rem', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
               <div style={{ display: 'flex', width: '60%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className='logo'>
                     <img src={lendsqrLogo} alt="" width={116} height={30} />
                  </div>
                  <div className='hidden' style={{ display: 'flex', overflow: 'clip', width: '400px', height: '40px', borderRadius: '8px', border: '1px solid #213F7D' }}>
                     <input style={{ width: '85%', padding: '0.5rem', border: 'none', outline: 'none', }} type="text" placeholder='search for anything' />
                     <div style={{ width: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#39CDCC', }}>
                        <img src={searchIcon} alt="" />
                     </div>
                  </div>
               </div>
               <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  {/* // TODO */}
                  <p className='hidden'>Docs</p> { /* link to docs  */}
                  <img src={notificationIcon} alt="notification" width={26} height={26} color='black' />

                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', fontFamily: 'Work Sans' }}>
                     <div className='' style={{ borderRadius: '100px' }}>
                        <img src={user1} alt="" style={{ borderRadius: '100px' }} />
                     </div>
                     <p>Adedeji</p>
                     <img src={dropdownIcon} alt="" style={{ cursor: 'pointer' }} onClick={toggleSidebar}/>
                  </div>
               </div>
            </nav>
         </header>
      </div>
   )
}

export default Header
