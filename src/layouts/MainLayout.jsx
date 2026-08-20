import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar/Topbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const currentUser = {
  name: "Ricardo Ribeiro",
  role: "Diretor Comercial",
  initials: "RR",
};

function MainLayout() {
  return (
    <div className="h-screen flex bg-navy-950 overflow-hidden">
      <Sidebar user={currentUser} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar user={currentUser} />
        <main className="flex-1 overflow-y-auto px-7 py-4">
          <div className="max-w-[1200px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
