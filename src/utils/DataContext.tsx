import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import localforage from 'localforage';
import { UserCredentials, UserDetails, Users } from './types';

interface UserContextType {
   users: Users[] | null;
   user: UserDetails | null;
   loading: boolean;
   error: string | null;
   isAuthenticated: boolean;
   userCredentials: UserCredentials;
   fetchUsers: () => void;
   fetchUserById: (id: string) => void;
   updateUserStatus: (userId: string, newStatus: string) => void;
   login: (userCredentials: UserCredentials) => void;
   logout: () => void;
   setUser: (user: UserDetails) => void;
   setUsers: (users: Users[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// const API_USERS_URL = 'https://run.mocky.io/v3/e2610d51-3549-47c5-bc2f-41f4ffd25b38';
const API_USERS_URL = "https://run.mocky.io/v3/4989c9d5-ec0f-4b4f-9270-c4b456e7f9d8";
const API_DETAILS_URL = 'https://run.mocky.io/v3/c4087e71-851a-43e5-9dff-eaab28a6cddc';

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

   const [users, setUsers] = useState<Users[]>([]);
   const [user, setUser] = useState<UserDetails | null>(null);
   const [userCredentials, setUserCredentials] = useState<UserCredentials>({ email: '', password: '' });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

   const storage = localforage.createInstance({
      name: 'user-data',
   });

   // Fetch all users
   const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
         const cachedUsers = await storage.getItem<Users[]>('user-data');
         if (cachedUsers?.length) {
            setUsers(cachedUsers);
         } else {
            const response = await axios.get<Users[]>(API_USERS_URL);
            setUsers(response.data);
            await storage.setItem('user-data', response.data);
         }
      } catch (err) {
         setError(axios.isAxiosError(err) ? err.message : 'An unexpected error occurred');
      } finally {
         setLoading(false);
      }
   };

   // Fetch a user by ID
   const fetchUserById = async (id: string) => {
      setLoading(true);
      setError(null);

      try {
         // const cachedDetails = await storage.getItem<UserDetails[]>('user-details');
         // console.log(cachedDetails)
         // const cachedUser = cachedDetails?.find((u) => u.id === id);
         // console.log("this is cached users: ", cachedUser)
         // // const cachedUser = null;

         // if (cachedUser) {
         //    console.log("cached user found: ", cachedUser)
         //    setUser(cachedUser);
         // } else {
         const response = await axios.get<UserDetails[]>(API_DETAILS_URL);
         console.log('User details fetched..: ', response)
         const fetchedUser = response.data.find((u) => u.id === id);
         if (!fetchedUser) throw new Error(`User with ID ${id} not found`);

         setUser(fetchedUser);
         // const updatedCache = cachedDetails ? [...cachedDetails, fetchedUser] : [fetchedUser];
         // await storage.setItem('user-details', updatedCache);
         // }
      } catch (err) {
         setError(axios.isAxiosError(err) ? err.message : 'An unexpected error occurred');
      } finally {
         setLoading(false);
      }
   };

   // Update user status
   const updateUserStatus = async (userId: string, newStatus: string) => {
      if (!users) return;

      const updatedUsers = users.map((u) =>
         u.id === userId ? { ...u, status: newStatus } : u
      );

      try {
         await storage.setItem('user-data', updatedUsers);
         setUsers(updatedUsers);
      } catch (err) {
         console.error('Failed to update user status in localforage:', err);
      }
   };

   // User login
   const login = (userCredentials: UserCredentials) => {
      setUserCredentials(userCredentials);
      setIsAuthenticated(true);
      localStorage.setItem('lendqr_user', JSON.stringify(userCredentials)); // Store user info in localStorage
   };

   // User logout
   const logout = () => {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('lendqr_user'); // Remove user info from localStorage
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   return (
      <UserContext.Provider
         value={{
            users,
            user,
            loading,
            error,
            isAuthenticated,
            fetchUsers,
            fetchUserById,
            updateUserStatus,
            login,
            logout,
            setUser,
            setUsers,
            userCredentials,
         }}
      >
         {children}
      </UserContext.Provider>
   );
};

const useUserContext = (): UserContextType => {
   const context = useContext(UserContext);
   if (!context) {
      throw new Error('useUserContext must be used within a UserProvider');
   }
   return context;
};

export { UserProvider, useUserContext };
