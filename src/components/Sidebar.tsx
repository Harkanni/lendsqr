// Sidebar.js
import React from 'react';
import './Sidebar.scss'; // Importing the CSS file for styling
import { briefcaseIcon, dropdownIcon2, homeIcon, usersIcon } from '../assets';

const Sidebar = () => {
   return (
      <aside className="sidebar">
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
               <img src={usersIcon} alt="user icon" className='sidebar__icon' />
               <a href="/users">Users</a>
            </div>
            <div className="sidebar__item">
               <i className="icon-guarantors" />
               Guarantors
            </div>
            <div className="sidebar__item">
               <i className="icon-loans" />
               Loans
            </div>
            <div className="sidebar__item">
               <i className="icon-decision" />
               Decision Models
            </div>
            <div className="sidebar__item">
               <i className="icon-savings" />
               Savings
            </div>
            <div className="sidebar__item">
               <i className="icon-loan-request" />
               Loan Requests
            </div>
            <div className="sidebar__item">
               <i className="icon-whitelist" />
               Whitelist
            </div>
            <div className="sidebar__item">
               <i className="icon-karma" />
               Karma
            </div>
         </div>

         <div className="sidebar__section">
            <p className="sidebar__title">BUSINESSES</p>
            <div className="sidebar__item">
               <i className="icon-organization" />
               Organization
            </div>
            <div className="sidebar__item">
               <i className="icon-loan-products" />
               Loan Products
            </div>
            <div className="sidebar__item">
               <i className="icon-savings-products" />
               Savings Products
            </div>
            <div className="sidebar__item">
               <i className="icon-fees" />
               Fees and Charges
            </div>
            <div className="sidebar__item">
               <i className="icon-transactions" />
               Transactions
            </div>
            <div className="sidebar__item">
               <i className="icon-services" />
               Services
            </div>
            <div className="sidebar__item">
               <i className="icon-service-account" />
               Service Account
            </div>
            <div className="sidebar__item">
               <i className="icon-settlements" />
               Settlements
            </div>
            <div className="sidebar__item">
               <i className="icon-reports" />
               Reports
            </div>
         </div>

         <div className="sidebar__section">
            <p className="sidebar__title">SETTINGS</p>
            <div className="sidebar__item">
               <i className="icon-preferences" />
               Preferences
            </div>
            <div className="sidebar__item">
               <i className="icon-fees-pricing" />
               Fees and Pricing
            </div>
            <div className="sidebar__item">
               <i className="icon-audit-logs" />
               Audit Logs
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
