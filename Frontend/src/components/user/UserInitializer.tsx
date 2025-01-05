import { useEffect } from 'react';
import { initializeUser } from '~/stores/store';

const UserInitializer = () => {
  useEffect(() => {
    initializeUser();
  }, []);

  return null;
};

export default UserInitializer;
