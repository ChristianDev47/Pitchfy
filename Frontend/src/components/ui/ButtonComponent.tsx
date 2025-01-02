import { useStore } from '@nanostores/react';
import { userStore  } from '../../stores/store';

function ButtonReact() {
  const user = useStore(userStore);
  return (
    <a
      className="ml-2 py-1.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto btn-primary"
      href={user && user.googleId !== '' ? 'https://pitchfy.zapier.app' : '/login'}
    >
      <span>{user && user.googleId !== '' ? 'Chat' : 'Login'}</span>
    </a>
  );
}

  export default ButtonReact;
