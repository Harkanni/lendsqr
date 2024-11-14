// UserDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState<any>(null); // State to hold user details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<null | string>(null); // Error state


  return (
    <div>
      
        <p>No user found with ID {id}</p>
      
    </div>
  );
};

export default UserDetails;
