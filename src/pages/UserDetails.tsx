import React from 'react';
import UserSummary from '../components/UserSummary';
import UserDetails from '../components/UserSummaryDetails';

import './userDetails.scss';
import { backarrowIcon } from '../assets';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
   const navigate = useNavigate()

   const handleNavigateBack = () => {
      navigate('/users')
   }


   return (
      <div>
         <div style={{ marginBlock: '2.5rem' }}>
            <div onClick={handleNavigateBack} style={{ cursor: 'pointer', display: 'inline-flex', gap: '0.5rem', alignItems: 'center', color: '#545F7D', marginBottom: '1.25rem' }}>
               <img src={backarrowIcon} alt="back icon" />
               <p style={{ letterSpacing: '-0.5px', fontFamily: 'Work Sans', fontSize: '18px', fontWeight: '400', lineHeight: '18.77px', }}>Back to Users</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
               <p style={{ letterSpacing: '-0.3px', fontFamily: 'Work Sans', fontSize: '16px', fontWeight: '600', lineHeight: '28.15px', color: '#545F7D' }}>User Details</p>
               <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ padding: '0.75rem 1.75rem', borderRadius: '8px', border: '1px solid #E4033B', outline: 'none', color: '#E4033B', fontWeight: '400', fontSize: '14px', background: 'transparent', cursor: 'pointer' }}>Blacklist</button>
                  <button style={{ padding: '0.75rem 0.75rem', borderRadius: '8px', border: '1px solid #39CDCC', outline: 'none', color: '#39CDCC', fontWeight: '400', fontSize: '14px', background: 'transparent', cursor: 'pointer' }}>Activate User</button>
               </div>
            </div>
         </div>
         <UserSummary />
         <UserDetails />
      </div>
   );
};

export default UserPage;
