import React from "react";
import SidebarHeader from "./SidebarHeader.jsx";
import Navigation from "./Navigation.jsx"
import UserProfile from "./UserProfile.jsx";

export default function Sidebar() {
  return (
    <aside className="w-64 select-none shrink-0 bg-surface flex flex-col">
        <SidebarHeader />
        <Navigation />
        <UserProfile />
    </aside>
  )
}