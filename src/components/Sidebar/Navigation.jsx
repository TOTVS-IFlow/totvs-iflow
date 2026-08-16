import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, ScanText, ListChecks, RotateCcwClock, Users } from 'lucide-react';

const links = [
  { to: "/", label: "Dashboard", end: true, icon: LayoutDashboard},
  { to: "/analise", label: "Análise", icon: ScanText},
  { to: "/pendencias", label: "Pendências", icon: ListChecks},
  { to: "/historico", label: "Histórico de reuniões", icon: RotateCcwClock},
  { to: "/clientes", label: "Clientes", icon: Users}
];

export default function Navigation() {
  return (
    <ul className="text-slate-500 font-sans pt-4 flex flex-col">
      <p className="font-bold tracking-wider pl-3 pb-2 font-sora text-xs">NAVEGAÇÃO</p>
      {links.map((link) => {
        const Icon = link.icon
        return (
        <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `h-11 pl-3 text-lg flex gap-2 items-center font-medium  transition-all ${
                  isActive
                    ? "bg-accent-950 text-accent-500"
                    : "text-slate-500 hover:bg-accent-950 hover:text-cyan-200"
                }`
              }
            >
              <Icon size={18} />
              {link.label}
            </NavLink>
          </li>
    )
    })}
    </ul>
  )
}