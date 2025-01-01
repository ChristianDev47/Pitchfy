// stores/userStore.ts
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';
import { atom } from 'nanostores';
import { GetUser } from "~/services/user";

export type User = {
  _id: string;
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  password: string;
  createdAt: string;
  plan?: string;
  planExpiration?: string;
  planId?: string;
};

export const InitalData: User = {
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

// Store de usuario utilizando Nanostores
export const userStore = atom<User>(InitalData);

// Función para actualizar el usuario en el store
export const setUser = (user: User) => {
  userStore.set(user);
};

// Función para recuperar el usuario desde localStorage
export const initializeUser = () => {
  const token = Cookies.get('authToken');

  if (token) {
    const userData: User = jwtDecode(token); 
    const response = async () => {
      const user = await GetUser(userData._id)
      console.log(user);
      setUser(user)
    }
    response()
  }
};

// Función para limpiar el usuario (logout)
export const clearUser = () => {
  Cookies.remove('authToken');
  userStore.set(InitalData);
};
