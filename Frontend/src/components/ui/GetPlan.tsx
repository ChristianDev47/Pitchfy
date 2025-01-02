import { useStore } from '@nanostores/react';
import { userStore , initializeUser  } from '../../stores/store';
import { useEffect } from 'react';

function ButtonReact() {
  const user = useStore(userStore);

  console.log(user);
  useEffect(() => {
    initializeUser()
  }, [])

  return (
    <a
      className="ml-2 py-1.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto btn btn-primary"
      href={user.googleId !== '' ? '' : '/login'}
    >
      <span>{user.googleId !== '' ? 'Chat' : 'Login'}</span>
    </a>
  );
}

  export default ButtonReact;