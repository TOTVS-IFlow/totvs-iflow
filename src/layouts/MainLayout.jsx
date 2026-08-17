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
    <div className="min-h-screen flex bg-navy-950">
      <Sidebar user={currentUser} />
      <div className="flex flex-col flex-1">
        <Topbar user={currentUser} />
        <main className="flex-1 px-7 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
