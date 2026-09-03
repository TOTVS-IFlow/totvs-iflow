import React from "react";
import { Text } from "lucide-react";
import GenericCard from "./GenericCard";

export default function ResumoCard({ text = "", className }) {
  return (
    <GenericCard icon={Text} className={`border-l-2 border-accent-500 ${className ?? ""}`} title={"RESUMO"}>
      <p>{text}</p>
    </GenericCard>
  );
}
