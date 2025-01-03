import { useStore } from '@nanostores/react';
import { userStore  } from '../../stores/store';

function ButtonReact() {
  const user = useStore(userStore);

  return (
    <a
      className="ml-2 py-2 px-5.5 md:px-6 font-semibold shadow-none text-[15px] w-auto btn btn-primary"
      href={user && user.plan ? 'https://pitchfy.zapier.app' : user._id  !== '' ? `/plan/starter` : '/login'}
    >
      <span>Start Your Story Now</span>
    </a>
  );
}

  export default ButtonReact;
