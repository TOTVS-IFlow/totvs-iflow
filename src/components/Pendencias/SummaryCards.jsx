import React from "react";
import SummaryCard from "../Dashboard/SummaryCard";
import { ListChecks, CheckCircle, Clock } from "lucide-react";
import { PENDING_ITEMS } from "../../mocks/pendingItems";
import { countOpen } from "../../constants/pendingStatus";

export default function SummaryCards({ items = PENDING_ITEMS }){
    const open = countOpen(items);
    const cardsContent = [
      { title: "Total de pendências", value: items.length, description: "nas reuniões do período", icon: ListChecks, valueColor: "text-slate-100"},
      { title: "Em aberto", value: open, description: "aguardando ação", icon: Clock, valueColor: "text-warning"},
      { title: "Concluídas", value: items.length - open, description: "resolvidas no período", icon: CheckCircle, valueColor: "text-success"}
    ];

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
