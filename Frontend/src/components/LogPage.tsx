import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const LogPage: React.FC = () => {
  const {login} = useAuth()
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      login(token)
    }
    window.location.href = '/';
  }, []);
  return ''
};

export default LogPage;
