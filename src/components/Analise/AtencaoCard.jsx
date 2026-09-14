import React from "react";
import { AlertTriangle } from "lucide-react";
import GenericCard from "./GenericCard";

export default function AtencaoCard({ text = "", className }) {
  return (
    <GenericCard icon={AlertTriangle} title={"PONTO DE ATENÇÃO"} className={className}>
      <p>{text}</p>
    </GenericCard>
  );
}
