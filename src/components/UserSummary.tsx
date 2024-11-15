import React from 'react';
import { ellipse, goldstarIcon, starIcon } from '../assets';

const UserSummary = () => {
   return (
      <div className="user-summary">
         <div className="user-summary-header">

            <div className='user-summary-header-item'>
               <div className="user-avatar">
                  <img src={ellipse} alt="User Avatar" width={100} height={100} style={{ borderRadius: '100px' }} />
               </div>
               <div className="user-details">
                  <h2 style={{ fontSize: '22px', fontWeight: 500 }}>Grace Effiom</h2>
                  <p style={{ fontSize: '14px', marginTop: '0.35rem' }}>LSQFf587g90</p>
               </div>
            </div>

            <hr className='divider' />

            <div className="user-tier user-summary-header-item">
               <p style={{ fontSize: '14px' }}>User's Tier</p>
               <div className="star-rating" style={{ marginTop: '0.35rem' }}>
                  <img
                     src={goldstarIcon}
                     alt="gold star"
                     style={{ width: '16px', height: '16px', marginRight: '5px' }}
                  />
                  <img
                     src={starIcon}
                     alt="gold star"
                     style={{ width: '16px', height: '16px', marginRight: '5px' }}
                  />
                  <img
                     src={starIcon}
                     alt="gold star"
                     style={{ width: '16px', height: '16px', marginRight: '5px' }}
                  />
               </div>
            </div>

            <hr className='divider' />

            <div className="user-balance user-summary-header-item">
               <h3 style={{ fontSize: '22px', fontWeight: 500 }}>₦200,000.00</h3>
               <p style={{ marginTop: '0.35rem' }}>9912345678/Providus Bank</p>
            </div>

            <hr className='divider' />
         </div>
         <div className="user-nav">
            <nav>
               <a href="#">General Details</a>
               <a href="#">Documents</a>
               <a href="#">Bank Details</a>
               <a href="#">Loans</a>
               <a href="#">Savings</a>
               <a href="#">App and System</a>
            </nav>
         </div>
      </div>
   );
};

export default UserSummary;
