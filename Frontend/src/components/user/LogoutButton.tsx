import Cookies from 'js-cookie';
import { InitalData, setUser } from '~/stores/store';

const LogoutButton = () => {
  const handleLogout = () => {
    setTimeout(() => {
      Cookies.remove('authToken'); 
      setUser(InitalData)
      window.location.href = '/';
    }, 500)
  }

  return (
    <button className="block text-[12px] text-start w-full px-5 py-2 whitespace-no-wrap dark:hover:bg-gray-700 dark:hover:text-white first:rounded-t hover:text-link last:rounded-b md:hover:bg-gray-100" onClick={handleLogout}>
      Logout
    </button> 
  )
};

export default LogoutButton;
