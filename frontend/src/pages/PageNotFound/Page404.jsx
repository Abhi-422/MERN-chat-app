import { TbError404 } from "react-icons/tb";


const Page404 = () => {
  return (
    <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 shadow-2xl p-4 rounded-3xl" >
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <TbError404 className="text-9xl md:text-9xl text-center" />
        <p>Page Not Found </p>
        
        <a href="/"><p className="underline text-blue-400 touch-pinch-zoom">Click to go on home Page</p></a>
      </div>
    </div>
    </div>
  )
}

export default Page404;