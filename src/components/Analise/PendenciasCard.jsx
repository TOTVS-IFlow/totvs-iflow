import React from "react";
import { ListChecks } from "lucide-react";
import GenericCard from "./GenericCard";
import { getPendingStatusStyle } from "../../constants/pendingStatus";

export default function PendenciasCard({ items = [], className = "w-full" }) {
  return (
    <GenericCard icon={ListChecks} title={`PENDÊNCIAS GERADAS (${items.length})`} className={className}>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => {
          const statusStyle = getPendingStatusStyle(item.status);
          return (
            <li key={item.id} className="flex justify-between">
              <div className="flex gap-2 text-sm font-medium items-center">
                <p className="text-accent-500 font-medium rounded-md px-2 py-0.5 text-xs bg-accent-950">{index + 1}</p>
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
