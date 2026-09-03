import React from "react";
import { CheckCircle2 } from "lucide-react";
import ResumoCard from "./ResumoCard";
import AtencaoCard from "./AtencaoCard";
import OportunidadesCard from "./OportunidadesCard";
import RiscosCard from "./RiscosCard";
import PendenciasCard from "./PendenciasCard";
import { getSentimentStyle } from "../../constants/sentiment";

export default function AnaliseCards({
  sentiment,
  summary,
  attentionPoint,
  opportunities = [],
  risks = [],
  pendingItems = [],
}) {
  const sentimentStyle = getSentimentStyle(sentiment);
  const SentimentIcon = sentimentStyle.icon;

  return (
    <section>
      <header className="flex justify-between">
        <div className="font-bold text-xl flex gap-2 items-center">
          <CheckCircle2 size={18} className="text-accent-500" />
          Resultado da análise
        </div>
        <p className={`flex gap-1.5 px-3 font-semibold rounded-full items-center font-sora text-xs uppercase ${sentimentStyle.className}`}>
          <SentimentIcon size={14} />
          {sentimentStyle.label}
        </p>
      </header>
      <main className="flex flex-col gap-3 mt-3">
        <div className="flex gap-3">
          <ResumoCard text={summary} />
          <AtencaoCard text={attentionPoint} />
        </div>
        <div className="flex gap-3">
          <OportunidadesCard items={opportunities} />
          <RiscosCard items={risks} />
        </div>
        <div className="flex gap-3">
          <PendenciasCard items={pendingItems} className="flex-1" />
        </div>
      </main>
    </section>
  );
}
