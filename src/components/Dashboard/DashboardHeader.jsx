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
                <button className="flex items-center gap-2.5 px-3 py-2 bg-surface border border-accent-950 rounded-xl">Todas as empresas <ChevronDown size={18} /></button>
                <button className="flex items-center gap-2.5 px-3 py-2 font-semibold bg-accent-500 border border-accent-950 rounded-xl"><Plus size={18} /> Nova análise</button>
            </section>
        </header>
    )
}