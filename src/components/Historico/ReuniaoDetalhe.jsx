import React from "react";
import { formatarDataHoraExtensa } from "../../utils/formatDate";
import { Calendar } from "lucide-react";

export default function ReuniaoDetalhe({ reuniao }) {
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
    </div>
  );
}