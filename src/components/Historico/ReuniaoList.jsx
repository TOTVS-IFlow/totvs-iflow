import React from "react";
import { Search } from "lucide-react";
import { formatarDataHora } from "../../utils/formatDate";

export const DEFAULT_ITEMS = [
    {id: 0, client: "Grupo Vetor Logisitica", title: "Revisão trimestral de conta", date: "2026-08-22T14:30:00Z", pendingCount: 1},
    {id: 1, client: "Cooperativa AgroSul", title: "Kickoff — Implantação ERP", date: "2026-07-04T10:17:00Z", pendingCount: 3},
    {id: 2, client: "Construtora Horizonte", title: "Discovery — Automação fiscal", date: "2026-08-26T16:30:00Z", pendingCount: 0}
    
]

export default function ReuniaoList({selectedId, onSelect}) {
  return (
    <aside className="border-accent-950 border px-3 py-2 flex flex-col rounded-l-2xl gap-2 w-80 shrink-0 h-full min-h-0">
        <header className="flex justify-between items-center">
            <p className="font-bold text-lg">Reuniões</p>
            {DEFAULT_ITEMS.length > 0 && (
                <p className="text-xs font-semibold text-success bg-green-950 px-2 py-0.5 rounded-full">{DEFAULT_ITEMS.length} analisadas</p>
            )}
        </header>
        <div className="relative">
            <Search size={15} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="text" className="bg-surface rounded-lg border-accent-950 pl-8 pr-2 py-1.5 border w-full" placeholder="Buscar reunião ou cliente" />
        </div>
        <ul className="mt-2 flex flex-col gap-1 flex-1 min-h-0 overflow-y-auto">
            {DEFAULT_ITEMS.map((reuniao) => (
                <li className={`hover:bg-navy-850 p-2 rounded-lg cursor-pointer ${reuniao.id == selectedId && "bg-navy-800"}`} key={reuniao.id} onClick={() => onSelect(reuniao.id)}>
                    <p className="text-accent-500 font-semibold text-xs">{reuniao.client}</p>
                    <p className="font-semibold text-sm">{reuniao.title}</p>
                    <p className="text-slate-500 font-mono text-xs text-[10px]">{formatarDataHora(reuniao.date)}</p>
                    {reuniao.pendingCount > 0 && (
                        <span className="text-yellow-200 font-semibold rounded-full px-2 py-0.5 text-[10px] bg-yellow-900">• {reuniao.pendingCount} pendências</span>
                    )}
                </li>
            ))}
        </ul>
    </aside>
  );
}