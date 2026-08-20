import React from "react";

export default function ChartCard({ title, icon, children }) {
  const Icon = icon;
  return (
    <article className="bg-surface border border-accent-950 rounded-2xl p-5 flex-1 min-w-[320px] flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon size={18} className="text-accent-500" />}
        <h3 className="text-white font-semibold text-base leading-tight">{title}</h3>
      </div>
      <div className="flex-1 flex">{children}</div>
    </article>
  );
}
