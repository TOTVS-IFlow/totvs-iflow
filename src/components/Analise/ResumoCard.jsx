import React from "react";
import { Text } from "lucide-react";
import GenericCard from "./GenericCard";

const DEFAULT_TEXT =
  "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ";

export default function ResumoCard({ text = DEFAULT_TEXT, className }) {
  return (
    <GenericCard icon={Text} className={`border-l-2 border-accent-500 ${className ?? ""}`} title={"RESUMO"}>
      <p>{text}</p>
    </GenericCard>
  );
}
