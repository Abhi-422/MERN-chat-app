import { useState } from "react";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";
import SearchInput from "./SearchInput";
import { FiMenu } from "react-icons/fi";

export const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-2">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white bg-gray-800 p-2 rounded-md shadow-md hover:bg-gray-700 transition"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`border-r border-slate-500 p-4 flex flex-col transition-transform duration-300 ease-in-out
        ${mobileOpen ? "absolute top-0 left-0 w-72 h-full bg-gray-900 z-50" : "hidden md:flex md:relative md:translate-x-0"}`}
      >
        <SearchInput />
        <div className="divider px-3" />
        <Conversations />
        <LogoutBtn />
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};
