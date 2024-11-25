import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import localforage from 'localforage';
import { UserCredentials, UserDetails, Users } from '../../types/types';
import clearCache from '../../utils/clearCache';

interface UserContextType {
   users: Users[] | null;
   userDetails: UserDetails[] | null;
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

const API_USERS_URL = "https://run.mocky.io/v3/49262322-0373-4dda-bdd9-721b4e1a116f";
const API_DETAILS_URL = "https://run.mocky.io/v3/bbcc2e5c-503f-468c-998c-7fd450eec3fd";

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [users, setUsers] = useState<Users[]>([]);
   const [userDetails, setUserDetails] = useState<UserDetails[] | null>(null);
   const [user, setUser] = useState<UserDetails | null>(null);
   const [userCredentials, setUserCredentials] = useState<UserCredentials>({ email: '', password: '' });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

   const USER_CACHE_KEY = "user-data-v1";
   const USER_DETAILS_CACHE_KEY = "user-details-v1";

   const storage = localforage.createInstance({
      name: 'USER_CACHE',
   });

   // Fetch all users
   const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
         const cachedUsers = await storage.getItem<Users[]>(USER_CACHE_KEY);
         if (cachedUsers?.length) {
            setUsers(cachedUsers);
         } else {
            await clearCache(storage);
            const response = await axios.get<Users[]>(API_USERS_URL);
            setUsers(response.data);
            await storage.setItem(USER_CACHE_KEY, response.data);
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
         const cachedDetails = await storage.getItem<UserDetails[]>(USER_DETAILS_CACHE_KEY);
         const cachedUser = cachedDetails?.find((u) => u.id === id);

         if (cachedUser) {
            setUser(cachedUser);
         } else {
            const response = await axios.get<UserDetails[]>(API_DETAILS_URL);
            const fetchedUser = response.data.find((u) => u.id === id);
            if (!fetchedUser) throw new Error(`User with ID ${id} not found`);

            setUser(fetchedUser);
            const updatedCache = cachedDetails ? [...cachedDetails, fetchedUser] : [fetchedUser];
            await storage.setItem(USER_DETAILS_CACHE_KEY, updatedCache);
            setUserDetails(updatedCache);
         }
      } catch (err) {
         setError(axios.isAxiosError(err) ? err.message : 'An unexpected error occurred');
      } finally {
         setLoading(false);
      }
   };

   // Update user status
   const updateUserStatus = async (userId: string, newStatus: string) => {
      if (!users) return;

      // Update `users` and `userDetails` state
      const updatedUsers = users.map((u) =>
         u.id === userId ? { ...u, status: newStatus } : u
      );

      const updatedUserDetails = userDetails?.map((u) =>
         u.id === userId ? { ...u, status: newStatus } : u
      );

      // Update the `user` state if the current user matches
      const updatedUser = updatedUserDetails?.find((u) => u.id === userId) || null;

      try {
         await Promise.all([
            storage.setItem(USER_CACHE_KEY, updatedUsers),
            storage.setItem(USER_DETAILS_CACHE_KEY, updatedUserDetails),
         ]);

         setUsers(updatedUsers);
         setUserDetails(updatedUserDetails!);
         setUser(updatedUser);
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

      // eslint-disable-next-line
   }, []);

   return (
      <UserContext.Provider
         value={{
            users,
            userDetails,
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
