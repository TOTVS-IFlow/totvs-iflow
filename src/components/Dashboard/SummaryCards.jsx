import React from "react";
import SummaryCard from "./SummaryCard";
import { Mic, ListChecks, TrendingUp, TriangleAlert } from "lucide-react";

const cardsContent = [
  { title: "Reuniões", value: 3, description: "analisadas no periodo", icon: Mic, valueColor: "text-accent-500"},
  { title: "Pendências", value: 8, description: "em aberto", icon: ListChecks, valueColor: "text-warning"},
  { title: "Oportunidades", value: 7, description: "upsell/cross-sell", icon: TrendingUp, valueColor: "text-success"},
  { title: "Riscos de churn", value: 0, description: "nivel alto", icon: TriangleAlert, valueColor: "text-danger"}
];

export default function SummaryCards(){
    return (
        <div className="grid grid-cols-4 gap-4 max-w-[970px]">
            {cardsContent.map((card) => (
                <SummaryCard
                    key={card.title}
                    title={card.title}
                    value={card.value}
                    description={card.description}
                    icon={card.icon}
                    valueColor={card.valueColor}
                />
            ))}
        </div>
    )
}