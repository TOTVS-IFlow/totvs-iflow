import React, { useState } from "react";
import { formatarDataHoraExtensa } from "../../utils/formatDate";
import { Calendar, Sparkle, ListChecks, TrendingUp, FileText } from "lucide-react";

export default function ReuniaoDetalhe({ reuniao }) {
  const [abaAtiva, setAbaAtiva] = useState("resumo")
  return (
    <div className="border-accent-950 border rounded-r-2xl px-5 py-4 flex-1 h-full min-h-0 overflow-y-auto">
      <header>
        <div className="flex text-center items-center gap-2.5">
            <p className="font-semibold text-accent-500 text-sm">{reuniao.client}</p>
            <p className="text-xs font-semibold text-success bg-green-950 px-2 py-0.5 rounded-full">• Analisada</p>
        </div>
        <div>
            <p className="text-2xl font-bold">{reuniao.title}</p>
            <p className="flex items-center mt-2 gap-2 text-xs font-mono tracking-tighter text-slate-500"><Calendar size={16} /> {formatarDataHoraExtensa(reuniao.date)}</p>
        </div>
      </header>
      <nav className="mt-4">
        <ul className="flex gap-4 border-b border-slate-700">
          <li onClick={() => setAbaAtiva("resumo")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 ${abaAtiva === "resumo" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent"}`}><Sparkle size={12} /> Resumo</li>
          <li onClick={() => setAbaAtiva("pendencias")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 ${abaAtiva === "pendencias" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent"}`}><ListChecks size={12} /> Pendências <span className="bg-navy-850 text-white text-xs px-2 rounded-full font-semibold">{reuniao.pendingCount}</span></li>
          <li onClick={() => setAbaAtiva("oportunidades")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 ${abaAtiva === "oportunidades" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent"}`}><TrendingUp size={12} /> Oportunidades <span className="bg-navy-850 text-white text-xs px-2 rounded-full font-semibold">{reuniao.oportunidades.length}</span></li>
          <li onClick={() => setAbaAtiva("transcricao")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 ${abaAtiva === "transcricao" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent"}`}><FileText size={12} /> Transcrição</li>
        </ul>
      </nav>
      <main>
        {abaAtiva === "resumo" && <p>{reuniao.resumo}</p>}
        {abaAtiva === "pendencias" && <p>pendencias</p>}
        {abaAtiva === "oportunidades" && <p>oportunidades</p>}
        {abaAtiva === "transcricao" && <p>transcricao</p>}
      </main>
    </div>
  );
}