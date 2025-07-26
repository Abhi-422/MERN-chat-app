import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="px-4 py-3 shadow-[0px_-10px_40px_10px_#00000024] "
      onSubmit={handleSubmit}
    >
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <div className="loading loading-spinner"/> : <BsSend /> }
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
