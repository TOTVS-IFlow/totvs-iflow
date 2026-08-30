import React from "react";
import SummaryCard from "../Dashboard/SummaryCard";
import { ListChecks, CheckCircle, Clock } from "lucide-react";

const cardsContent = [
  { title: "Total de pendências", value: 5, description: "nas reuniões do periodo", icon: ListChecks, valueColor: "text-slate-100"},
  { title: "Em aberto", value: 3, description: "aguardando ação", icon: Clock, valueColor: "text-warning"},
  { title: "Concluídas", value: 2, description: "resolvidas no período", icon: CheckCircle, valueColor: "text-success"}
];

export default function SummaryCards(){
    return (
        <div className="flex flex-wrap gap-4">
            {cardsContent.map((card) => (
                <SummaryCard
                    key={card.title}
                    title={card.title}
                    value={card.value}
                    description={card.description}
                    icon={card.icon}
                    valueColor={card.valueColor}
                    className="min-w-[260px] px-7 py-6"
                />
            ))}
        </div>
    )
}