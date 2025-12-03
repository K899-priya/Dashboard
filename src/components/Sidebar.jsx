import React from "react";
import { NavLink } from "react-router-dom";
import { Fa500Px } from "react-icons/fa";
import {
  FiHome,
  FiCreditCard,
  FiList,
  FiFileText,
  FiLayers,
  FiPieChart,
  FiInbox,
  FiGift,
  FiBarChart2,
  FiLock
} from "react-icons/fi";

const navItems = [
  { icon: <FiHome />, label: "Dashboard", to: "/dashboard" },
  { icon: <FiCreditCard />, label: "Payments" },
  { icon: <FiList />, label: "Transactions" },
  { icon: <FiFileText />, label: "Invoices" },
  { icon: <FiLayers />, label: "Cards" },
  { icon: <FiPieChart />, label: "Saving Plans" },
  { icon: <FiBarChart2 />, label: "Investments" },
  { icon: <FiInbox />, label: "Inbox" },
  { icon: <FiGift />, label: "Promos" },
  { icon: <FiBarChart2 />, label: "Insights" },
];

function Sidebar() {
  return (
    <aside className="w-52 bg-green-50 border-r border-green-50 hidden lg:flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-emerald-100">
        <div className="w-10 h-10 flex items-center justify-center text-white font-bold">
          <Fa500Px />
        </div>
        <div className="ml-3">
          <p className="font-semibold text-emerald-900">COINEST</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) =>
          item.to ? (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-xl text-sm font-medium transition
                ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-emerald-900/70 hover:bg-emerald-100"
                }`
              }
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {item.label}
            </NavLink>
          ) : (
            <button
              key={item.label}
              className="w-full flex items-center px-3 py-2 rounded-xl text-sm font-medium text-emerald-900/70 hover:bg-emerald-100 transition"
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {item.label}
            </button>
          )
        )}
      </nav>

      <div className="p-4">
        <div className="bg-emerald-900 text-emerald-50 rounded-2xl p-4 flex flex-col space-y-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-700">
            <FiLock className="text-xl" />
          </div>
          <div>
            <p className="font-semibold text-sm">
              Gain full access to your finances
            </p>
            <p className="text-xs text-emerald-100 mt-1">
              With detailed analytics and graphs.
            </p>
          </div>
          <button className="mt-1 bg-emerald-400 text-emerald-900 text-sm font-semibold rounded-xl px-3 py-2">
            Get Pro
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
