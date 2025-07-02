import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        let socketInstance;

        if (authUser) {
            socketInstance = io(import.meta.env.VITE_SOCKET_URL, {
                query: { userId: authUser._id },
                withCredentials: true,
            });
            setSocket(socketInstance);

            socketInstance.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
        }

        return () => {
            if (socketInstance) {
                socketInstance.disconnect(); // ✅ use disconnect() for a clean shutdown
                setSocket(null);
            }
        };
    }, [authUser]);

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};