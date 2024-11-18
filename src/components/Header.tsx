import React from 'react'
import { lendsqrLogo, searchIcon, notificationIcon, user1, dropdownIcon, unionIcon } from '../assets'
import ResponsiveSearchBar from './SearchBar'
import SearchBar from './SearchBar'

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
   return (
      <div style={{ position: 'fixed', zIndex: '9999999999999' }}>
         <header style={{ height: 'fit-content', background: 'white', color: '#213F7D', zIndex: '999999999999', position: 'fixed', inset: 0, }}>
            <nav style={{ display: 'flex', padding: '1rem 2rem', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
               <div className='searchBarContainer' style={{ display: 'flex', gap: '2.5rem', width: '60%', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <div className='logo' style={{ }}>
                     <img src={lendsqrLogo} alt="lendsqr" style={{ }} width={116} height={30} className='hidden' />
                     <img src={unionIcon} alt="lendsqr" style={{ scale: '1.5'}} className='hidden-lg'/>
                  </div>
                  <SearchBar />
               </div>
               <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                  {/* // TODO */}
                  <p className='hidden'>Docs</p> { /* link to docs  */}
                  <img className='hidden' src={notificationIcon} alt="notification" width={26} height={26} color='black' />

                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', fontFamily: 'Work Sans' }}>
                     <div className='' style={{ borderRadius: '100px' }}>
                        <img src={user1} alt="" style={{ borderRadius: '100px' }} width={40} />
                     </div>
                     <p className='hidden'>Adedeji</p>
                     <img src={dropdownIcon} alt="" style={{ cursor: 'pointer' }} onClick={toggleSidebar}/>
                  </div>
               </div>
            </nav>
         </header>
      </div>
   )
}

export default Header
