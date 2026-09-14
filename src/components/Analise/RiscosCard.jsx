import React from "react";
import { ShieldAlert } from "lucide-react";
import GenericCard from "./GenericCard";
import { getRiskLevelStyle } from "../../constants/riskLevel";

export default function RiscosCard({ items = [], className }) {
  return (
    <GenericCard icon={ShieldAlert} title={`RISCOS (${items.length})`} className={className}>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => {
          const levelStyle = getRiskLevelStyle(item.level);
          return (
            <li key={index} className="flex gap-2 text-[15px] font-medium items-center">
              <p className={`font-normal rounded-full px-2 py-0.5 text-xs ${levelStyle.badge}`}>
                {levelStyle.label}
              </p>
              {item.description}
            </li>
          );
        })}
      </ul>
    </GenericCard>
  );
}
