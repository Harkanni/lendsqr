import React from 'react'
import { lendsqrLogo, searchIcon, notificationIcon, user1, dropdownIcon, unionIcon } from '../../assets'
import ResponsiveSearchBar from '../SearchBar'
import SearchBar from '../SearchBar'
import './Header.scss'

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
   return (
      <div className="header-container" data-testid={"Header"}>
      <header className="header">
        <nav className="nav">
          <div className="searchBarContainer">
            <div className="logo">
              <img src={lendsqrLogo} alt="lendsqr" width={116} height={30} className="hidden" />
              <img src={unionIcon} alt="lendsqr" className="hidden-lg" style={{ scale: '1.2' }} />
            </div>
            <SearchBar />
          </div>
          <div className="nav-right">
            <p className="hidden">Docs</p>
            <img className="hidden" src={notificationIcon} alt="notification" width={26} height={26} />
            <div className="user-menu">
              <div className="user-avatar">
                <img src={user1} alt="User" width={40} />
              </div>
              <p className="hidden">Adedeji</p>
              <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" onClick={toggleSidebar} />
            </div>
          </div>
        </nav>
      </header>
    </div>
   )
}

export default Header
