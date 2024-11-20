import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserSummary from '../components/UserSummary';
import UserDetails from '../components/UserSummaryDetails';

import './userDetails.scss';
import { backarrowIcon } from '../assets';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../utils/DataContext';




const UserPage = () => {

   const navigate = useNavigate();

   const { id } = useParams<{ id: string }>(); // Get the dynamic `id` from the URL

   const { fetchUserById, error, loading, user, users } = useUserContext();


   useEffect(() => {
      if (id) {
         fetchUserById(id); // Make an API call or fetch from local storage
      }
   }, [id]); // Dependency array ensures the effect runs when `id` changes




   const handleNavigateBack = () => {
      navigate('/users')
   }


   if (loading) return <p>Loading user details...</p>;

   if (error) return <p>Error: {error}</p>;




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
         <UserSummary userInfo={user} />
         <UserDetails userInfo={user}/>
      </div>
   );
};

export default UserPage;
