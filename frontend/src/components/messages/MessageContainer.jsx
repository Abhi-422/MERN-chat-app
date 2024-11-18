import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/useAuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  useEffect(() => {

    // clean up (Unmounts)
    return () => {setSelectedConversation(null)};
  },[setSelectedConversation]);
  
  return (
    <div className="md:min-w-[450px] backdrop-blur-2 flex flex-col">
      {!selectedConversation ? (<NoChatSelected />) : (
        <>
          <div className=" px-4 py-3 rounded-tr bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 shadow-xl">
            <span className="label-text text-gray-400">To:</span><span className="text-gray-300 font-bold"> {selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName}🥰</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-3xl text-center" />
      </div>
    </div>
  )
};