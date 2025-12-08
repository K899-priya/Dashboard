import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";


function Card({ icon, value, label, trend, direction = "up" }) {
  const isUp = direction === "up";
  const TrendIcon = isUp ? IoMdTrendingUp : IoMdTrendingDown;

  const trendStyle = isUp
    ? "bg-emerald-50 text-emerald-600"
    : "bg-rose-50 text-rose-600";

  return (
    <div className="bg-white rounded-2xl p-4 text-start shadow-sm border border-slate-100">
      <div className="flex justify-between">
        {icon}
        <CiMenuKebab />
      </div>

      <span
        className={`inline-flex mt-3 px-2 py-1 rounded-full text-[11px] font-medium items-center gap-1 ${trendStyle}`}
      >
        <TrendIcon className="w-4 h-4" />
        {trend}
      </span>

      <p className="text-xl font-semibold mt-1">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}

export default Card;
