import { useState, useEffect, useCallback } from 'react';
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
   setUser?: (user: UserDetails) => void;
   setUsers?: (users: Users[]) => void;
}
const useUser = () => {
   
}

// const useUser = (): UseUserReturn => {
//    // console.log('running user hook')
//    const [users, setUsers] = useState<Users[]>([]);
//    const [user, setUser] = useState<UserDetails | null>(null);
//    const [loading, setLoading] = useState<boolean>(false);
//    const [error, setError] = useState<string | null>(null);

//    const API_USERS_URL = 'https://run.mocky.io/v3/e2610d51-3549-47c5-bc2f-41f4ffd25b38';
//    const API_DETAILS_URL = 'https://run.mocky.io/v3/c4087e71-851a-43e5-9dff-eaab28a6cddc';

//    const storage = localforage.createInstance({
//       name: 'user-data',
//    });

//    const fetchUsers = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//          const cachedUsers = await storage.getItem<Users[]>('user-data');
//          console.log('Data fetched from localForage:', cachedUsers);

//          if (cachedUsers?.length) {
//             console.log('users mounted successfully');
//             setUsers(cachedUsers);
//          } else {
//             console.log('fetching users from API');
//             const response = await axios.get<Users[]>(API_USERS_URL);
//             setUsers(response.data);
//             await storage.setItem('user-data', response.data);
//          }
//       } catch (err) {
//          if (axios.isAxiosError(err)) {
//             console.log(err);
//             setError(err.message);
//          } else {
//             setError('An unexpected error occurred');
//          }
//       } finally {
//          setLoading(false);
//       }
//    };

//    const fetchUserById = async (id: string) => {
//       setLoading(true);
//       setError(null);
   
//       try {
//          // Check if user details are already cached
//          const cachedDetails = await storage.getItem<UserDetails[]>('user-details');
//          const cachedUser = cachedDetails?.find((user) => user.id === id);
   
//          if (cachedUser) {
//             console.log('User found in cache:', cachedUser);
//             setUser(cachedUser);
//          } else {
//             console.log('Fetching user details from API...');
//             const response = await axios.get<UserDetails[]>(API_DETAILS_URL);
   
//             const user = response.data.find((user) => user.id === id);
//             if (!user) {
//                throw new Error(`User with ID ${id} not found`);
//             }
   
//             // Set the user and update the cache
//             setUser(user);
//             const updatedCache = cachedDetails ? [...cachedDetails, user] : [user];
//             await storage.setItem('user-details', updatedCache);
//             console.log('User details fetched and cached:', user);
//          }
//       } catch (err) {
//          if (axios.isAxiosError(err)) {
//             console.error('Axios error:', err.message);
//             setError(err.message);
//          } else {
//             console.error('Unexpected error:', err);
//             setError('An unexpected error occurred');
//          }
//       } finally {
//          setLoading(false);
//       }
//    };
   

//    // Update a user's status
//    const updateUserStatus = async (userId: string, newStatus: string) => {
//       if (!users) {
//          console.error("Users list is not initialized");
//          return;
//       }
//       console.log('users from hook: ', users, userId, newStatus);

//       const updatedUserList = users.map((user: Users) => {
//          if (user.id === userId) {
//             let res = { ...user, status: newStatus };
//             return res;
//          } else {
//             return user;
//          }
//       });


//       try {
//          await storage.setItem('user-data', updatedUserList);
//          console.log('Data set in localForage:', updatedUserList);
//          // Persist updated list
//          console.log("User status updated successfully in localforage");


//          setUsers([...updatedUserList]); // Update local state
//          console.log('updated user: ', updatedUserList);


//       } catch (error) {
//          console.error("Failed to update user status in localforage:", error);
//       }
//    };


//    // Initialize users on first load
//    useEffect(() => {
//       if (!users.length) {
//          console.log("No users found fetching users..........")
//          fetchUsers();
//       } else {
//          console.log("no worries guys, all cleared. Users are in storage.........")

//       }

//    }, []);

//    return {
//       users,
//       user,
//       loading,
//       error,
//       fetchUsers,
//       fetchUserById,
//       updateUserStatus,
//       setUser,
//       setUsers
//    };
// };

export default useUser;
