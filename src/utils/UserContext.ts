import { useState, useEffect } from 'react';
import axios from 'axios';
import localforage from 'localforage';
import { UserDetails, Users } from './types';

interface UseUserReturn {
   users: Users[] | null;
   user: UserDetails | null;
   loading: boolean;
   error: string | null;
   fetchUsers: () => void;
   fetchUserById: (id: string) => void;
   updateUserStatus: (userId: string, newStatus: string) => void;
}

const useUser = (): UseUserReturn => {
   // console.log('running user hook')
   const [users, setUsers] = useState<Users[] | any>(null);
   const [user, setUser] = useState<UserDetails | null >(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);

   const API_USERS_URL = 'https://run.mocky.io/v3/e2610d51-3549-47c5-bc2f-41f4ffd25b38';
   const API_DETAILS_URL = 'https://run.mocky.io/v3/c4087e71-851a-43e5-9dff-eaab28a6cddc';

   const storage = localforage.createInstance({
      name: 'user-data',
   });

   const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
         const cachedUsers = await storage.getItem<Users[]>('users');
         if (cachedUsers) {
            setUsers(cachedUsers);
         } else {
            const response = await axios.get<Users[]>(API_USERS_URL);
            // console.log(response);
            setUsers(response.data);
            await storage.setItem('users', response.data);
         }
      } catch (err) {
         if (axios.isAxiosError(err)) {
            setError(err.message);
         } else {
            setError('An unexpected error occurred');
         }
      } finally {
         setLoading(false);
      }
   };

   const fetchUserById = async (id: string) => {
      setLoading(true);
      setError(null);

      try {
         const cachedUsers = await storage.getItem<UserDetails[]>('user-details');
         const cachedUser = cachedUsers?.find((user) => user.id === id);

         if (cachedUser) {
            setUser(cachedUser);
         } else {
            const response = await axios.get<UserDetails[]>(API_DETAILS_URL);
            const user = response.data.find((user) => user.id === id);

            if (!user) {
               throw new Error(`User with ID ${id} not found`);
            }

            setUser(user);
            const updatedUsers = cachedUsers ? [...cachedUsers, user] : [user];
            await storage.setItem('user-details', updatedUsers);
         }
      } catch (err) {
         if (axios.isAxiosError(err)) {
            setError(err.message);
         } else {
            setError('An unexpected error occurred');
         }
      } finally {
         setLoading(false);
      }
   };

   const updateUserStatus = async (userId: string, newStatus: string) => {
      const updatedUserList = users?.map((user: Users) => {
        if (user.id === userId) {
          return { ...user, status: newStatus };
        }
        return user;
      });
      setUsers(updatedUserList);
      await localforage.setItem("userList", updatedUserList); // Persist the updated list
    };

   return {
      users,
      user,
      loading,
      error,
      fetchUsers,
      fetchUserById,
      updateUserStatus
   };
};

export default useUser;
