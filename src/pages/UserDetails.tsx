import React from 'react';
import UserSummary from '../components/UserSummary';
import UserDetails from '../components/UserSummaryDetails';

import './userDetails.scss';

const UserPage = () => {
  return (
    <div>
      <UserSummary />
      <UserDetails />
    </div>
  );
};

export default UserPage;
