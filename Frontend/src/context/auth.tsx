'use client';
import Cookies from 'js-cookie';
import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { User } from '../types';
import { GetUser } from '../services/user';
import { jwtDecode } from 'jwt-decode';


const InitialData: User = {
  _id: '',
  googleId: '',
  displayName: '',
  firstName: '',
  lastName: '',
  image: '',
  email: '',
  password: '',
  createdAt: '',
  plan: '',
  planExpiration: ''
};

// Context
export const AuthContext = createContext<{
  user: User;
  addUser: (newUser: string) => void;
  logout: () => void;
  login: (authTokens: string) => void;
}>({
  user: InitialData,
  addUser: () => {},
  logout: () => {},
  login: () => {},
});  

// Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(InitialData);
  
  useEffect(() => {    
    const token = Cookies.get('authToken');
    if (token) {
      const userData: User = jwtDecode(token); 
      const response = async () => {
        const user = await GetUser(userData._id)
        setUser(user)
      }
      response()
    }
  }, []);
  

  const login = useCallback((token: string) => {
    if (token) {
      Cookies.remove('authToken');
      Cookies.set('authToken', token);
      const userData: User = jwtDecode(token); 
      setUser(userData)
    }

  }, []);  

  const logout = useCallback(() => {
    Cookies.remove('authToken');
    setUser(InitialData);
  }, []);  

  const addUser = useCallback((newUser: string) => {
    Cookies.set('authToken', JSON.stringify(newUser));
    const userData: User = jwtDecode(newUser); 
    setUser(userData)
  }, []);    


  const value = useMemo(
    () => ({
      user,
      addUser,
      logout,
      login,
    }),
    [user, addUser, logout, login]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
