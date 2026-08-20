import React from "react";
import { ChevronDown, Plus } from "lucide-react";

export default function DashboardHeader(){
    return (
        <header className="flex justify-between">
            <section>
                <h1 className="text-3xl text-slate-500">Dashboard</h1>
                <p className="text-slate-500">Inteligência consolidada de todas as reuniões analisadas.</p>
            </section>
            <section className="flex items-center gap-2">
                <div className="relative">
                    <select className="appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-accent-500 pl-3 pr-9 py-2 bg-surface border border-accent-950 rounded-xl">
                        <option value="" key="">Todas as empresas</option>
                        
                    </select>
                    <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
                <button className="flex items-center gap-2.5 px-3 py-2 font-semibold bg-accent-500 border border-accent-950 rounded-xl"><Plus size={18} /> Nova análise</button>
            </section>
        </header>
    )
}