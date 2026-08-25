import React from "react";
import { ShieldAlert } from "lucide-react";
import GenericCard from "./GenericCard";

const RISK_LABELS = {
  baixo: "Risco Baixo",
  medio: "Risco Médio",
  alto: "Risco Alto",
};

const RISK_STYLES = {
  baixo: "text-slate-300 bg-slate-700 bg-opacity-45",
  medio: "text-yellow-100 bg-warning bg-opacity-45",
  alto: "text-red-300 bg-red-900 bg-opacity-45",
};

const DEFAULT_ITEMS = [
  { level: "baixo", description: "Banco de horas ainda em Excel" },
];

export default function RiscosCard({ items = DEFAULT_ITEMS, className }) {
  return (
    <GenericCard icon={ShieldAlert} title={`RISCOS (${items.length})`} className={className}>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-[15px] font-medium items-center">
            <p className={`font-normal rounded-full px-2 py-0.5 text-xs ${RISK_STYLES[item.level] ?? RISK_STYLES.baixo}`}>
              {RISK_LABELS[item.level] ?? item.level}
            </p>
            {item.description}
          </li>
        ))}
      </ul>
    </GenericCard>
  );
}
