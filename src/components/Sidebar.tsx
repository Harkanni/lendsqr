// Sidebar.js
import React from 'react';
import './Sidebar.scss'; // Importing the CSS file for styling
import { badgeIcon, bankIcon, briefcaseIcon, chartbarIcon, clipboardIcon, coinsIcon, dropdownIcon2, galaxyIcon, handshakeIcon, handshakeIcon2, homeIcon, loansIcon, orgIcon, piggybankIcon, scrollIcon, slidersIcon, usersIcon, usersIcon2, usersIcon3, usersIcon4, usersIcon5 } from '../assets';

const Sidebar = ({ isVisible }: { isVisible: boolean }) => {
   return (
      <aside className={`sidebar ${isVisible ? 'visible' : ''}`}>
         <div className="sidebar__section">
            <div className="sidebar__item" style={{ background: '' }}>
               <img src={briefcaseIcon} alt="" className='sidebar__icon' style={{ marginRight: '1rem' }} />
               Switch Organization
               <img src={dropdownIcon2} alt="" style={{ marginLeft: '1rem' }} />
            </div>
         </div>
         <div className="sidebar__section">
            <div className="sidebar__item">
               <img src={homeIcon} alt="home icon" className='sidebar__icon' />
               Dashboard
            </div>
         </div>

         <div className="sidebar__section">
            <p className="sidebar__title">CUSTOMERS</p>
            <div className="sidebar__item">
               <img src={usersIcon2} alt="user icon" className='sidebar__icon' />
               <a href="/users">Users</a>
            </div>
            <div className="sidebar__item">
               <img src={usersIcon} alt="user icon" className='sidebar__icon' />
               Guarantors
            </div>
            <div className="sidebar__item">
               <img src={loansIcon} alt="user icon" className='sidebar__icon' />
               Loans
            </div>
            <div className="sidebar__item">
               <img src={handshakeIcon} alt="user icon" className='sidebar__icon' />
               Decision Models
            </div>
            <div className="sidebar__item">
               <img src={piggybankIcon} alt="user icon" className='sidebar__icon' />
               Savings
            </div>
            <div className="sidebar__item">
               <img src={handshakeIcon2} alt="user icon" className='sidebar__icon' />
               Loan Requests
            </div>
            <div className="sidebar__item">
               <img src={usersIcon3} alt="user icon" className='sidebar__icon' />
               Whitelist
            </div>
            <div className="sidebar__item">
               <img src={usersIcon4} alt="user icon" className='sidebar__icon' />
               Karma
            </div>
         </div>

         <div className="sidebar__section">
            <p className="sidebar__title">BUSINESSES</p>
            <div className="sidebar__item">
               <img src={briefcaseIcon} alt="brief case icon" className='sidebar__icon' />
               Organization
            </div>
            <div className="sidebar__item">
               <img src={handshakeIcon2} alt="user icon" className='sidebar__icon' />
               Loan Products
            </div>
            <div className="sidebar__item">
               <img src={bankIcon} alt="user icon" className='sidebar__icon' />
               Savings Products
            </div>
            <div className="sidebar__item">
               <img src={coinsIcon} alt="user icon" className='sidebar__icon' />
               Fees and Charges
            </div>
            <div className="sidebar__item">
               <img src={orgIcon} alt="user icon" className='sidebar__icon' />
               Transactions
            </div>
            <div className="sidebar__item">
               <img src={galaxyIcon} alt="user icon" className='sidebar__icon' />
               Services
            </div>
            <div className="sidebar__item">
               <img src={usersIcon5} alt="user icon" className='sidebar__icon' />
               Service Account
            </div>
            <div className="sidebar__item">
               <img src={scrollIcon} alt="user icon" className='sidebar__icon' />
               Settlements
            </div>
            <div className="sidebar__item">
               <img src={chartbarIcon} alt="user icon" className='sidebar__icon' />
               Reports
            </div>
         </div>

         <div className="sidebar__section">
            <p className="sidebar__title">SETTINGS</p>
            <div className="sidebar__item">
               <img src={slidersIcon} alt="user icon" className='sidebar__icon' />
               Preferences
            </div>
            <div className="sidebar__item">
               <img src={badgeIcon} alt="user icon" className='sidebar__icon' />
               Fees and Pricing
            </div>
            <div className="sidebar__item">
               <img src={clipboardIcon} alt="user icon" className='sidebar__icon' />
               Audit Logs
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
