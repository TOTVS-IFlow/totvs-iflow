import React from "react";
import { TrendingUp } from "lucide-react";
import GenericCard from "./GenericCard";

const DEFAULT_ITEMS = [
  { tag: "Upsell", description: "Ponto Eletrônico para ~10 mil colaboradores" },
  { tag: "Cross-sell", description: "Módulo de escalas (organizador de escalas)" },
  { tag: "Cross-sell", description: "Módulo de sindicatos" },
];

export default function OportunidadesCard({ items = DEFAULT_ITEMS, className }) {
  return (
    <GenericCard icon={TrendingUp} title={`OPORTUNIDADES (${items.length})`} className={className}>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-[15px] font-medium items-center">
            <p className="text-accent-500 font-normal rounded-full px-2 py-0.5 text-xs bg-accent-950">{item.tag}</p>
            {item.description}
          </li>
        ))}
      </ul>
    </GenericCard>
  );
}
