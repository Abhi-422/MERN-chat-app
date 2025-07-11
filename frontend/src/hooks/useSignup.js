import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/useAuthContext.jsx";



const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });

        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: "include",
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { loading, signup };
}

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('please fill in all the fields');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('password doesn\'t match');
        return false;
    }

    if (password.length < 6) {
        toast.error('password must be at least 6 characters');
        return false;
    }
    return true;
}