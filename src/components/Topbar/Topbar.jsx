import React from "react";
import { Sun, CircleQuestionMark } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex justify-between h-[3.8rem] items-center px-5 border-b border-b-slate-700">
        <h6 className="text-accent-500 text-xs font-bold tracking-widest">TOTVS IFLOW</h6>
        <aside className="flex gap-4">
            <div className="flex gap-5 px-5 border-r border-r-slate-800 items-center font-semibold text-slate-500 ">
                <Sun size={18} className="cursor-pointer hover:text-white" />
                <CircleQuestionMark size={18} className="cursor-pointer hover:text-accent-500" />
            </div>
            <p className="bg-accent-500 select-none rounded-full flex items-center justify-center w-8 h-8 text-sm text-white font-bold">RR</p>
        </aside>
    </header>
  )
}