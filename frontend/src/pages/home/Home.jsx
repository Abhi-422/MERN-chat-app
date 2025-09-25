import MessageContainer from "../../components/messages/MessageContainer";
import { Sidebar } from "../../components/sidebar/Sidebar";


const Home = () => {
  return (
    <div className="my-bg">
    <div className="flex sm:h-[80vh] sm:w-fit h-[100vh] w-fit rounded-lg p-1 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 shadow-2xl">
    <Sidebar/>
    <MessageContainer/>
    </div>
    </div>
  )
}

export default Home;