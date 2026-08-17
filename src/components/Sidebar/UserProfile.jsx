import React from "react";
import { LogOut } from "lucide-react";

export default function UserProfile({ name, role, initials, onLogout }) {
  return (
    <footer className="flex font-sans mt-auto px-3 py-3 gap-2 items-center border-t border-slate-700">
      <p className="bg-accent-500 rounded-full flex items-center justify-center w-8 h-8 text-sm text-white font-bold">{initials}</p>
      <div>
        <h6 className="text-white font-semibold text-sm leading-tight">{name}</h6>
        <p className="text-slate-400 leading-tight text-xs">{role}</p>
      </div>
      <LogOut size={18} onClick={onLogout} className="ml-auto mr-3 cursor-pointer text-slate-400 hover:text-accent-500" />
    </footer>
  )
}