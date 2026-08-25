import React from "react";
import { ListChecks } from "lucide-react";
import GenericCard from "./GenericCard";

const STATUS_STYLES = {
  aberta: {
    label: "aberta",
    wrapperClass:
      "bg-warning bg-opacity-45 font-semibold text-yellow-100 text-xs px-2 py-1 flex items-center gap-1.5 rounded-full",
    dotClass: "w-1 h-1 rounded-full bg-yellow-100 shrink-0",
  },
  concluida: {
    label: "concluida",
    wrapperClass: "text-gray-300 text-xs px-2 py-1 flex items-center gap-1.5",
    dotClass: "w-1 h-1 rounded-full bg-gray-300 shrink-0",
  },
};

const DEFAULT_ITEMS = [
  {
    number: 1,
    description: "Agendar 2ª fase com especialista de escalas e sindicatos",
    owner: "Eng. de vendas TOTVS",
    status: "aberta",
  },
  {
    number: 2,
    description: "Validar parametrização das 32 convenções coletivas",
    owner: "Especialista TOTVS",
    status: "concluida",
  },
];

export default function PendenciasCard({ items = DEFAULT_ITEMS, className = "w-full" }) {
  return (
    <GenericCard icon={ListChecks} title={`PENDÊNCIAS GERADAS (${items.length})`} className={className}>
      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const statusStyle = STATUS_STYLES[item.status] ?? STATUS_STYLES.aberta;
          return (
            <li key={item.number} className="flex justify-between">
              <div className="flex gap-2 text-sm font-medium items-center">
                <p className="text-accent-500 font-medium rounded-md px-2 py-0.5 text-xs bg-accent-950">{item.number}</p>
                {item.description}
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-400 text-sm">{item.owner}</p>
                <p className={statusStyle.wrapperClass}>
                  <span className={statusStyle.dotClass} />
                  {statusStyle.label}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </GenericCard>
  );
}
