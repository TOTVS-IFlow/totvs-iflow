import React from "react";
import { Search } from "lucide-react";
import { formatarDataHora } from "../../utils/formatDate";
import { countOpen } from "../../constants/pendingStatus";

export default function ReuniaoList({ meetings = [], selectedId, onSelect }) {
  return (
    <aside className="border-accent-950 border px-3 py-2 flex flex-col rounded-l-2xl gap-2 w-80 shrink-0 h-full min-h-0">
        <header className="flex justify-between items-center">
            <p className="font-bold text-lg">Reuniões</p>
            {meetings.length > 0 && (
                <p className="text-xs font-semibold text-success bg-green-950 px-2 py-0.5 rounded-full">{meetings.length} analisadas</p>
            )}
        </header>
        <div className="relative">
            <Search size={15} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="text" className="bg-surface rounded-lg border-accent-950 pl-8 pr-2 py-1.5 border w-full outline-none transition-shadow focus:ring-2 focus:ring-accent-500" placeholder="Buscar reunião ou cliente" />
        </div>
        <ul className="mt-2 flex flex-col gap-1 flex-1 min-h-0 overflow-y-auto">
            {meetings.map((reuniao) => {
                const openPendingCount = countOpen(reuniao.pendingItems);
                return (
                    <li className={`p-2 rounded-lg cursor-pointer transition-colors ${reuniao.id === selectedId ? "bg-navy-800" : "hover:bg-navy-850"}`} key={reuniao.id} onClick={() => onSelect(reuniao.id)}>
                        <p className="text-accent-500 font-semibold text-xs">{reuniao.client}</p>
                        <p className="font-semibold text-sm">{reuniao.title}</p>
                        <p className="text-slate-500 font-mono text-xs text-[10px]">{formatarDataHora(reuniao.date)}</p>
                        {openPendingCount > 0 && (
                            <span className="text-yellow-200 font-semibold rounded-full px-2 py-0.5 text-[10px] bg-yellow-900">• {openPendingCount} pendências</span>
                        )}
                    </li>
                );
            })}
        </ul>
    </aside>
  );
}
