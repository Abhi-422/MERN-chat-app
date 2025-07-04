import toast from 'react-hot-toast';
import { useAuthContext } from '../context/useAuthContext';
import { useState } from 'react';
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async(username, password) => {

    const success = handleInputErrors({username, password});
        if (!success) return;

    setLoading(true);
    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify({username, password}),
            credentials: "include",
        });

        const data = await res.json();
        
        if(data.error) {
            throw new Error(data.error);
        }

        localStorage.setItem('chat-user', JSON.stringify(data));
        setAuthUser(data);

        
    } catch (error) {
        toast.error(error.message);    
    }finally{
        setLoading(false);
    }
  };
  return {loading, login};
}

export default useLogin;

function handleInputErrors({username, password}) {
    if (!username || !password) {
        toast.error('please fill in all the fields');
        return false;
    }
    return true;
}