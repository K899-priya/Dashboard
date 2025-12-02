import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-900">
      <div className="min-h-screen flex bg-slate-50 text-slate-900">
    
        <Sidebar />

    
        <div className="flex-1 flex flex-col">
          <TopBar />
          <main className="flex-1 p-2 lg:p-2 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route
                path="/dashboard"
                element={
                  <div className="min-h-screen bg-[#f6f8fb] p-2">
                    <Dashboard />
                  </div>
                }
              />
              
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
