import React from "react";
import ClientesCard from "./ClientesCard";
import { CLIENTS } from "../../mocks/clients";

export default function ClientesCards({ clients = CLIENTS }){
    return (
        <div className="flex flex-wrap gap-4">
            {clients.map((client) => (
                <ClientesCard
                    key={client.id}
                    name={client.name}
                    sentiment={client.sentiment}
                    meetingCount={client.meetingCount}
                    openPendingCount={client.openPendingCount}
                    highRiskCount={client.highRiskCount}
                    sector={client.sector}
                    product={client.product}
                    className="flex-1 min-w-[290px] max-w-[350px]"
                />
            ))}
        </div>
    )
}
