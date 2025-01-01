import { useStore } from '@nanostores/react';
import { userStore  } from '../../stores/store';


interface Props {
  item: string | undefined
}


function ButtonPay({item}: Props) {
  const user = useStore(userStore);
  return (
    <a
      className="ml-2 py-1.5 px-12 transition-all font-semibold shadow-none text-sm btn-secondary"
      href={user && user.plan !== '' ? 'https://pitchfy.zapier.app' : `/plan/${item}`}
    >
      {user && user.plan !== '' ? 'Active plan' : 'Get Plan'}
    </a>
  );
}

  export default ButtonPay;
