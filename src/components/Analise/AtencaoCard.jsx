import React from "react";
import { AlertTriangle } from "lucide-react";
import GenericCard from "./GenericCard";

const DEFAULT_TEXT =
  "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ";

export default function AtencaoCard({ text = DEFAULT_TEXT, className }) {
  return (
    <GenericCard icon={AlertTriangle} title={"PONTOS DE ATENÇÃO"} className={className}>
      <p>{text}</p>
    </GenericCard>
  );
}
