import React from "react";
import { Fa500Px } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { RiExchangeDollarFill } from "react-icons/ri"
import { BsSoundwave } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoWarning, IoHome } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const cashflowData = [
  { month: "Jan", income: 8000, expense: 4000 },
  { month: "Feb", income: 9000, expense: 5000 },
  { month: "Mar", income: 8500, expense: 4200 },
  { month: "Apr", income: 10000, expense: 6000 },
  { month: "May", income: 9500, expense: 5800 },
  { month: "Jun", income: 11000, expense: 7000 },
];

const expenseData = [
  { name: "Rent & Living", value: 2100, color: "#16a34a" },
  { name: "Investment", value: 525, color: "#4ade80" },
  { name: "Education", value: 420, color: "#86efac" },
  { name: "Food & Drink", value: 280, color: "#a3e635" },
  { name: "Entertainment", value: 175, color: "#bbf7d0" },
];

const transactions = [
  {
    name: "Electricity Bill",
    date: "2028-03-01",
    time: "02:48:43",
    amount: -295.81,
    note: "Payment for monthly electricity bill",
    status: "Failed",
  },
  {
    name: "Weekly Groceries",
    date: "2028-03-01",
    time: "02:48:43",
    amount: -204.07,
    note: "Groceries shopping at local supermarket",
    status: "Completed",
  },
  {
    name: "Movie Night",
    date: "2028-02-27",
    time: "09:59:47",
    amount: -87.84,
    note: "Tickets for movies and snacks",
    status: "Pending",
  },
  {
    name: "Medical Check-up",
    date: "2028-02-03",
    time: "02:33:33",
    amount: -323.33,
    note: "Routine health check-up and medications",
    status: "Pending",
  },
];

function StatusBadge({ status }) {
  const map = {
    Failed: "bg-red-50 text-red-600",
    Completed: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}
    >
      {status}
    </span>
  );
}

function Dashboard() {
  const totalBalance = 562000;
  const totalIncome = 78000;
  const totalExpense = 43000;
  const totalSaving = 56000;

  const totalExpenseValue = expenseData.reduce((s, e) => s + e.value, 0);

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900 px-5 py-3">
      <div className="max-w-6xl mx-auto grid xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-2">
        <div className="space-y-4">
          <div className="grid xl:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))] gap-2">
            <div className="bg-gradient-to-br text-emerald-50 rounded-3xl p-5 flex flex-col shadow-sm">
              <div className="flex justify-between">
              <Fa500Px />
              <BsSoundwave />
              </div>
              <p className="mt-3 text-lg font-medium">
                Andrew Forbist
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase">Balance Amount</p>
                  <p className="text-sm font-semibold">
                    ${totalBalance.toLocaleString()}
                  </p>
                </div>
                <div className="text-left text-xs text-emerald-200">
                  <div className="mt-3 flex items-center gap-6">
                    <div>
                      <p className="uppercase tracking-wide text-[10px]">EXP</p>
                      <p className="font-medium text-[10px] mt-1">11/29</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-wide text-[10px]">CVV</p>
                      <p className="font-medium text-[10px] mt-1">323</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
              <div className="flex justify-between">
              <RiExchangeDollarFill />
              <CiMenuKebab />
              </div>
              <span className="inline-flex mt-3 px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-medium">
                +13.2%
              </span>
              <p className="text-2xl font-semibold">
                ${totalIncome.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400 mb-1">Total Income</p>
            </div>

            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
              <div className="flex justify-between">
              <RiExchangeDollarFill />
              <CiMenuKebab />
              </div>
              <span className="inline-flex mt-3 px-2 py-1 rounded-full bg-rose-50 text-rose-600 text-[11px] font-medium">
                -8.1%
              </span>
              <p className="text-2xl font-semibold">
                ${totalExpense.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400 mb-1">Total Expense</p>
            </div>

            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
              <div className="flex justify-between">
               <GiWallet />
              <CiMenuKebab />
              </div>
              <span className="inline-flex mt-3 px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-medium">
                +12.4%
              </span>
              <p className="text-2xl font-semibold">
                ${totalSaving.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400 mb-1">Total Savings</p>
            </div>
          </div>

          <div className="grid grid-rows-[1fr,minmax(0,1fr)] gap-2">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-sm">Daily Limit</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-slate-500 mb-3">
                  $2,500.00 spent of $20,000.00
                </p>
                <p className="text-xs text-slate-400">12.5%</p>
              </div>

              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-1/6 bg-emerald-500 rounded-full" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-sm">Saving Plans</p>
                <button className="text-xs text-emerald-600 font-medium">
                  + Add Plan
                </button>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: <IoWarning />,
                    name: "Emergency Fund",
                    current: 5000,
                    target: 10000,
                    progress: 0.5,
                  },
                  {
                    icon: <MdFlight />,
                    name: "Vacation Fund",
                    current: 3000,
                    target: 5000,
                    progress: 0.6,
                  },
                  {
                    icon: <IoHome />,
                    name: "Home Down Payment",
                    current: 7250,
                    target: 20000,
                    progress: 0.36,
                  },
                ].map((plan) => (
                  <div
                    key={plan.name}
                    className="border border-slate-100 rounded-2xl p-2 bg-slate-40/30"
                  >
                    <div className="flex  justify-between mb-2">
                      <div className="flex justify-between items-center">
                      <p className="">{plan.icon}</p>
                      <p className="text-sm font-medium">{plan.name}</p>
                      </div>
                      <p className="text-xs text-slate-400">
                        Target: ${plan.target.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium">
                        ${plan.current.toLocaleString()}
                      </span>
                      <span className="text-slate-400">
                        {(plan.progress * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${plan.progress * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.3fr),minmax(0,1.7fr)] gap-4">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-400">Cashflow</p>
                  <p className="text-lg font-semibold">
                    Total Balance ${totalBalance.toLocaleString()}
                  </p>
                </div>
                <button className="text-xs px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                  This Year
                </button>
              </div>

              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cashflowData} margin={{ left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="income"
                      name="Income"
                      radius={[6, 6, 0, 0]}
                      fill="#14532d"
                    />
                    <Bar
                      dataKey="expense"
                      name="Expense"
                      radius={[6, 6, 0, 0]}
                      fill="#4ade80"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-sm">Recent Transactions</p>
                <button className="text-xs px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                  This Month
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="text-left text-slate-400 border-b border-slate-100">
                      <th className="py-2 pr-4 whitespace-nowrap">
                        Transaction Name
                      </th>
                      <th className="py-2 pr-4 whitespace-nowrap">
                        Date & Time
                      </th>
                      <th className="py-2 pr-4 whitespace-nowrap">Amount</th>
                      <th className="py-2 pr-4 whitespace-nowrap">Note</th>
                      <th className="py-2 pr-4 whitespace-nowrap text-right">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t) => (
                      <tr
                        key={t.name}
                        className="border-b border-slate-50 last:border-0"
                      >
                        <td className="py-3 pr-4 text-slate-700">{t.name}</td>
                        <td className="py-3 pr-4 text-slate-500">
                          <div>{t.date}</div>
                          <div className="text-[10px]">{t.time}</div>
                        </td>
                        <td className="py-3 pr-4 text-slate-700">
                          ${Math.abs(t.amount).toFixed(2)}
                        </td>
                        <td className="py-3 pr-4 text-slate-500 max-w-xs">
                          {t.note}
                        </td>
                        <td className="py-3 pr-2 text-right">
                          <StatusBadge status={t.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-sm">Statistic</p>
              <p className="text-xs text-slate-400">This Month</p>
            </div>

            <div className="h-52 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    outerRadius={80}
                    innerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute text-center">
                <p className="text-xs text-slate-400">Total Expense</p>
                <p className="text-lg font-semibold">$3,500</p>
              </div>
            </div>

            <div className="mt-2 space-y-1 text-xs">
              {expenseData.map((item) => {
                const pct = ((item.value / totalExpenseValue) * 100).toFixed(0);
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-slate-600">
                        {pct}% {item.name}
                      </span>
                    </div>
                    <span className="font-medium text-slate-800">
                      ${item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-sm">Recent Activity</p>
            </div>
            <div className="flex  mb-2">
              <p className="text-xs text-slate-400 items-start">Today</p>
            </div>

            <div className="space-y-5 text-xs">
              {[
                {
                  name: "Jamie Smith",
                  action: "updated account settings",
                  time: "16:05",
                },
                {
                  name: "Alex Johnson",
                  action: "logged in",
                  time: "13:05",
                },
                {
                  name: "Morgan Lee",
                  action: "added a new savings goal for vacation",
                  time: "02:05",
                },
                {
                  name: "Taylor Green",
                  action: "reviewed recent transactions",
                  time: "03:15",
                },
              ].map((item) => (
                <div key={item.name} className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[11px] font-semibold text-emerald-700">
                    {item.name.split(" ").map((n) => n[0])}
                  </div>
                  <div className="flex w-full ">
                    <p className="text-slate-700 ">
                      <span className="font-medium font-semibold">
                        {item.name}
                      </span>
                      <span className="font-medium"> {item.action}</span>
                    </p>
                  </div>

                  <div className=" items-start">
                    <p className="text-[10px] text-slate-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <br />
            <div className="flex  mb-2">
              <p className="text-xs text-slate-400 items-start">Yesterday</p>
            </div>

            <div className="space-y-5 text-xs">
              {[
                {
                  name: "Wailson Smith",
                  action: "updated account settings",
                  time: "16:05",
                },

                {
                  name: "Taylor Green",
                  action: "reviewed recent transactions",
                  time: "03:15",
                },
              ].map((item) => (
                <div key={item.name} className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[11px] font-semibold text-emerald-700">
                    {item.name.split(" ").map((n) => n[0])}
                  </div>
                  <div className="flex w-full ">
                    <p className="text-slate-700 ">
                      <span className="font-medium font-semibold">
                        {item.name}
                      </span>
                      <span className="font-medium"> {item.action}</span>
                    </p>
                  </div>

                  <div className=" items-start">
                    <p className="text-[10px] text-slate-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
