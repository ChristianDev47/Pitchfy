import { useStore } from '@nanostores/react';
import { userStore  } from '../../stores/store';

function ButtonReact() {
  const user = useStore(userStore);
  return (
    <a
      className="ml-2 py-1.5 px-5 md:px-6 font-semibold shadow-none text-[15px] w-auto btn-primary"
      href={user && user.plan ? 'https://pitchfy.zapier.app' : user._id  !== '' ? `/plan/starter` : '/login'}
    >
      <span>{user && user._id !== '' && user.plan  ? 'Chat' : user._id !== '' ? 'Get a plan' : 'Login'}</span>
    </a>
  );
}

  export default ButtonReact;
