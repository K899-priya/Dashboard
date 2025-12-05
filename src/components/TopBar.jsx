import React from "react";
import { FiSearch, FiBell, } from "react-icons/fi";
import { IoChatbubbleEllipses } from "react-icons/io5";

function TopBar() {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-8">
      <h1 className="text-xl lg:text-2xl font-semibold text-slate-900">
        Dashboard
      </h1>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-slate-50 rounded-xl px-3 py-2 border border-slate-100 w-64">
          <FiSearch className="text-slate-400 mr-2" />
          <input
            placeholder="Search placeholder"
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>

        <div className="relative gap-3 flex items-center justify-between">
          <IoChatbubbleEllipses />
          <FiBell className="text-slate-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[7px] text-white flex items-center justify-center">
            3
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden sm:block">
            <p className="text-sm font-semibold">Andrew Forbist</p>
          </div>
          <div className="w-6 h-10 rounded-covered flex items-center justify-center  ">
            <img src="/public/kimg.jpg" alt="profile" />
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default TopBar;
