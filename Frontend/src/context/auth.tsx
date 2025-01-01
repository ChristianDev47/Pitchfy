// import Cookies from 'js-cookie';
// import { createContext, useCallback, useEffect, useMemo } from 'react';
// import type { ReactNode } from 'react';
// import { userStore, setUser } from '../stores/store'; 
// // import { findUser } from '~/services/user';  
// import type { User } from '~/types';

// // Contexto
// export const AuthContext = createContext<{
//   user: User;
//   addUser: (newUser: User) => void;
//   logout: () => void;
//   login: (authTokens: string) => void;
// }>({
//   user: {
//     googleId: '',
//     displayName: '',
//     firstName: '',
//     lastName: '',
//     image: '',
//     email: '',
//     password: '',
//     createdAt: '',
//   },
//   addUser: () => {},
//   logout: () => {},
//   login: () => {},
// });

// // Provider
// export function AuthProvider({ children }: { children: ReactNode }) {
//   // Obtenemos el estado del usuario desde el store
//   const user = userStore.get();

//   const login = useCallback((authTokens: string) => {
//     Cookies.set('sesion_security_token', JSON.stringify(authTokens));
//   }, []);

//   const logout = useCallback(() => {
//     setUser({
//       googleId: '',
//       displayName: '',
//       firstName: '',
//       lastName: '',
//       image: '',
//       email: '',
//       password: '',
//       createdAt: '',
//     });
//     Cookies.remove('sesion_security_token');
//     Cookies.remove('sesion');
//   }, []);

//   const addUser = useCallback((newUser: User) => {
//     const getUserData = async () => {
//       try {
//         // const newData = await findUser({ id: newUser.googleId });
//         setUser(newData[0] ?? newData); // Actualizamos el store con los datos del usuario
//       } catch (error) {
//         console.error('Error al obtener el usuario:', error);
//       }
//     };

//     if (newUser.googleId) {
//       getUserData();
//     }
//   }, []);

//   useEffect(() => {
//     const storedUser = Cookies.get('sesion');
//     if (storedUser && storedUser !== 'undefined') {
//       const getUserData = async () => {
//         try {
//           // const newData = await findUser({ id: storedUser.toString() });
//           setUser(newData[0] ?? newData); // Actualizamos el store con los datos del usuario
//         } catch (error) {
//           console.error('Error al obtener el usuario:', error);
//         }
//       };
//       getUserData();
//     }
//   }, []);

//   useEffect(() => {
//     if (user && user.password !== '') {
//       Cookies.set('sesion', user.googleId, { expires: 7 });
//     }
//   }, [user]);

//   const value = useMemo(
//     () => ({
//       user,
//       addUser,
//       logout,
//       login,
//     }),
//     [user, addUser, logout, login]
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
