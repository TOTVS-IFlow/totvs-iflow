import React from "react";
import { TrendingUp, Minus, TrendingDown, ArrowRight } from "lucide-react";

const SENTIMENT_STYLES = {
  positivo: { label: "POSITIVO", icon: TrendingUp, className: "text-accent-500 bg-accent-950" },
  neutro: { label: "NEUTRO", icon: Minus, className: "text-slate-300 bg-slate-700 bg-opacity-45" },
  negativo: { label: "NEGATIVO", icon: TrendingDown, className: "text-red-300 bg-red-900 bg-opacity-45" },
};

export default function ClientesCard({ client, sentiment, reunioes, pendencias, riscos, setor, produto, className = "" }){
    const sentimentStyle = SENTIMENT_STYLES[sentiment] ?? SENTIMENT_STYLES.positivo;
    const SentimentIcon = sentimentStyle.icon;
    return (
        <article className={`bg-surface border border-accent-950 px-5 py-4 rounded-2xl ${className}`}>
            <div className="flex justify-between items-start gap-2">
                <p className="font-bold text-lg">{client} </p>
                <p className={`flex gap-1.5 px-3 py-1 font-semibold rounded-full items-center font-sora text-xs shrink-0 ${sentimentStyle.className}`}>
                    <SentimentIcon size={14} />
                    {sentimentStyle.label}
                </p>
            </div>
            <p className="text-slate-500 mt-2 mb-3 text-sm">{setor} · {produto}</p>
            <ul className="flex gap-6">
                <li>
                    <p className="text-2xl font-display font-bold leading-none">{reunioes}</p>
                    <p className="text-slate-400 text-xs">reuniões</p>
                </li>
                <li>
                    <p className={`text-2xl font-display font-bold leading-none ${pendencias > 0 ? "text-yellow-200" : ""}`}>{pendencias}</p>
                    <p className="text-slate-400 text-xs">pendências</p>
                </li>
                <li>
                    <p className={`text-2xl font-display font-bold leading-none ${riscos > 0 ? "text-red-200" : ""}`}>{riscos}</p>
                    <p className="text-slate-400 text-xs">riscos altos</p>
                </li>
            </ul>
            <hr className="my-4 border-slate-700" />
            <a href="" className="flex gap-2 text-center items-center text-accent-500 font-semibold text-[15px]">Ver histórico <ArrowRight size={15} /> </a>
        </article>
    )
}