import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

function MainLayout() {
  return (
    <div className="min-h-screen flex bg-navy-950">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
