import { useStore } from '@nanostores/react';
import { userStore , initializeUser  } from '../../stores/store';
import { useEffect } from 'react';

function ButtonReact() {
  const user = useStore(userStore);

  useEffect(() => {
    initializeUser()
  }, [])

  return (
    <a
      className="ml-2 py-1.5 px-5.5 md:px-6 font-semibold shadow-none text-[15px] w-auto btn btn-primary"
      href={user && user._id !== '' ? 'https://pitchfy.zapier.app' : '/login'}
    >
      <span>Start Your Story Now</span>
    </a>
  );
}

  export default ButtonReact;
