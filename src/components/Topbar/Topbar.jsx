import React from "react";

export default function Topbar() {
  return (
    <header className="flex justify-between h-12 items-center px-5 border-b border-b-slate-700">
        <h6 className="text-cyan-200 text-xs font-medium tracking-widest">TOTVS IFLOW - PAINEL</h6>
        <aside className="flex gap-4">
            <div className="flex gap-2 px-3 border-r border-r-slate-600 items-center font-semibold text-slate-400 ">
                <p>☀️</p>
                <p className="bg-slate-700 rounded-full flex items-center justify-center w-6 h-6">?</p>
            </div>
            <p className="bg-cyan-500 text-xs rounded-full flex items-center justify-center w-7 h-7 text-white font-bold">RR</p>
        </aside>
    </header>
  )
}