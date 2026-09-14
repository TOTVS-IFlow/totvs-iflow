import React from "react";
import { Link } from "react-router-dom";
import { ListChecks, ExternalLink } from "lucide-react";
import GenericCard from "../Analise/GenericCard";
import { getPendingStatusStyle } from "../../constants/pendingStatus";
import { PENDING_ITEMS } from "../../mocks/pendingItems";

export default function ListaPendencias({ items = PENDING_ITEMS, className = "w-full" }) {
  return (
    <GenericCard icon={ListChecks} title={`TODAS AS PENDÊNCIAS (${items.length})`} className={className}>
      <ul className="flex flex-col divide-y divide-slate-700">
        {items.map((item, index) => {
          const statusStyle = getPendingStatusStyle(item.status);
          return (
            <li key={item.id} className="flex justify-between py-3 first:pt-0 last:pb-0">
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
                <Link
                  to="/historico"
                  title="Ver reunião de origem"
                  aria-label="Ver reunião de origem"
                  className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                >
                    <ExternalLink size={25} className="border-accent-950 border-2 p-1 w-8 rounded-full text-slate-100 transition-colors hover:border-accent-800 hover:text-accent-500" />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </GenericCard>
  );
}
