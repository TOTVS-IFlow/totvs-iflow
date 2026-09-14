import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getSentimentStyle } from "../../constants/sentiment";

export default function ClientesCard({
    name,
    sentiment,
    meetingCount,
    openPendingCount,
    highRiskCount,
    sector,
    product,
    className = "",
}){
    const sentimentStyle = getSentimentStyle(sentiment);
    const SentimentIcon = sentimentStyle.icon;
    return (
        <article className={`group bg-surface border border-accent-950 px-5 py-4 rounded-2xl transition-colors hover:border-accent-800 ${className}`}>
            <div className="flex justify-between items-start gap-2">
                <p className="font-bold text-lg">{name} </p>
                <p className={`flex gap-1.5 px-3 py-1 font-semibold rounded-full items-center font-sora text-xs uppercase shrink-0 ${sentimentStyle.className}`}>
                    <SentimentIcon size={14} />
                    {sentimentStyle.label}
                </p>
            </div>
            <p className="text-slate-500 mt-2 mb-3 text-sm">{sector} · {product}</p>
            <ul className="flex gap-6">
                <li>
                    <p className="text-2xl font-display font-bold leading-none">{meetingCount}</p>
                    <p className="text-slate-400 text-xs">reuniões</p>
                </li>
                <li>
                    <p className={`text-2xl font-display font-bold leading-none ${openPendingCount > 0 ? "text-yellow-200" : ""}`}>{openPendingCount}</p>
                    <p className="text-slate-400 text-xs">pendências</p>
                </li>
                <li>
                    <p className={`text-2xl font-display font-bold leading-none ${highRiskCount > 0 ? "text-red-200" : ""}`}>{highRiskCount}</p>
                    <p className="text-slate-400 text-xs">riscos altos</p>
                </li>
            </ul>
            <hr className="my-4 border-slate-700" />
            <Link to="/historico" className="flex gap-2 items-center text-accent-500 hover:text-accent-400 font-semibold text-[15px] rounded transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-500">
                Ver histórico
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
        </article>
    )
}
