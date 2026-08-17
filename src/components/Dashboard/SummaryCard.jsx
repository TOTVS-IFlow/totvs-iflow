import React from "react";

export default function SummaryCard({ title, value, description, icon, valueColor = "text-white" }){
    const Icon = icon
    return (
        <article className="bg-surface border min-w-[180px] border-accent-950 px-5 py-4 rounded-2xl">
            <p className="flex justify-between items-center">{title} <Icon size={16} className="text-slate-400"/></p>
            <p className={`text-4xl ${valueColor}`}>{value}</p>
            <p className="text-sm text-slate-500">{description}</p>
        </article>
    )
}