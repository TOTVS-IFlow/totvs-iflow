import React from "react";
import { TrendingUp } from "lucide-react";
import GenericCard from "./GenericCard";
import { getOpportunityTagLabel } from "../../constants/opportunityTag";

export default function OportunidadesCard({ items = [], className }) {
  return (
    <GenericCard icon={TrendingUp} title={`OPORTUNIDADES (${items.length})`} className={className}>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 text-[15px] font-medium items-center">
            <p className="text-accent-500 font-normal rounded-full px-2 py-0.5 text-xs bg-accent-950">{getOpportunityTagLabel(item.tag)}</p>
            {item.description}
          </li>
        ))}
      </ul>
    </GenericCard>
  );
}
