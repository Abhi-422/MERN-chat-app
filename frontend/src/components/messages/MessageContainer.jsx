import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w-[450px] backdrop-blur-2 flex flex-col">
      {noChatSelected ? (<NoChatSelected />) : (
        <>
          <div className=" px-4 py-3 rounded-tr bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 shadow-xl">
            <span className="label-text text-gray-700">To:</span><span className="text-gray-900 font-bold">Abhishek Patange</span>
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
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Abhishek🥰</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-3xl text-center" />
      </div>
    </div>
  )
};