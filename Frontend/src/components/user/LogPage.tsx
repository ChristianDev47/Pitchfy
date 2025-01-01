import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import { useEffect } from 'react';
import { setUser } from '~/stores/store';
import type { User } from '~/types';

const LogPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const token = params.get('token');
    
    if (token) {
      Cookies.set('authToken', token);
      const userData: User = jwtDecode(token); 
      setUser(userData)
    }
    window.location.href = '/';
  }, []);

  return ''
};

export default LogPage;
