import React from "react";
import SummaryCard from "./SummaryCard";
import { Mic, ListChecks, TrendingUp, TriangleAlert } from "lucide-react";
import { DASHBOARD_SUMMARY } from "../../mocks/dashboard";

export default function SummaryCards({ summary = DASHBOARD_SUMMARY }){
    const cardsContent = [
        { title: "Reuniões", value: summary.meetingCount, description: "analisadas no período", icon: Mic, valueColor: "text-accent-500"},
        { title: "Pendências", value: summary.openPendingCount, description: "em aberto", icon: ListChecks, valueColor: "text-warning"},
        { title: "Oportunidades", value: summary.opportunityCount, description: "upsell/cross-sell", icon: TrendingUp, valueColor: "text-success"},
        { title: "Riscos de churn", value: summary.highRiskCount, description: "nível alto", icon: TriangleAlert, valueColor: "text-danger"}
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
