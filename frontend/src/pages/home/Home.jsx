import MessageContainer from "../../components/messages/MessageContainer";
import { Sidebar } from "../../components/sidebar/Sidebar";


const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg p-1overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 shadow-2xl border-2 border-blue-700">
    <Sidebar/>
    <MessageContainer/>
    </div>
  )
}

export default Home;