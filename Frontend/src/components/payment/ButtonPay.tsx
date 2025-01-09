import { useAuth } from "../../hooks/useAuth";

interface Props {
  item: string | undefined
}

function ButtonPay({item}: Props) {
  const {user} = useAuth()
  
  return (
    <a
      className={`ml-2 py-1.5 px-12 transition-all font-semibold shadow-none text-sm btn-secondary 
      ${item === 'starter' ? 'hover:bg-[#FF7130]' : ''}
      ${item === 'pro' ? 'hover:bg-[#FF3C68]' : ''}
      ${item === 'premium' ? 'hover:bg-[#872B97]' : ''}`}
      href={user && user.plan ? 'https://pitchfy.zapier.app' : user._id !== '' ? `/plan/${item}` : '/login'}
    >
      {user && user.plan ? 
        user.plan === item 
          ? 'Plan Active' 
          : 'You already have a plan' 
        : 'Get Plan'}
    </a>

  );
}

  export default ButtonPay;
