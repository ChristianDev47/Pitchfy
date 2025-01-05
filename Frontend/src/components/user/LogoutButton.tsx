import { useAuth } from "../../hooks/useAuth";

const LogoutButton = () => {
  const {logout} = useAuth()
  
  const handleLogout = () => {
    setTimeout(() => {
      logout()
      window.location.href = '/';
    }, 500)
  }

  return (
    <button className="block text-[12px] text-start w-full px-5 py-2 whitespace-no-wrap first:rounded-t hover:text-link last:rounded-b md:hover:bg-gray-100" onClick={handleLogout}>
      Logout
    </button> 
  )
};

export default LogoutButton;
