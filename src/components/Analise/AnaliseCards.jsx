import React from "react";
import { CheckCircle2, TrendingUp, Minus, TrendingDown } from "lucide-react";
import ResumoCard from "./ResumoCard";
import AtencaoCard from "./AtencaoCard";
import OportunidadesCard from "./OportunidadesCard";
import RiscosCard from "./RiscosCard";
import PendenciasCard from "./PendenciasCard";

const SENTIMENT_STYLES = {
  positivo: { label: "POSITIVO", icon: TrendingUp, className: "text-accent-500 bg-accent-950" },
  neutro: { label: "NEUTRO", icon: Minus, className: "text-slate-300 bg-slate-700 bg-opacity-45" },
  negativo: { label: "NEGATIVO", icon: TrendingDown, className: "text-red-300 bg-red-900 bg-opacity-45" },
};

export default function AnaliseCards({
  sentiment = "positivo",
  resumo,
  pontosDeAtencao,
  oportunidades,
  riscos,
  pendencias,
}) {
  const sentimentStyle = SENTIMENT_STYLES[sentiment] ?? SENTIMENT_STYLES.positivo;
  const SentimentIcon = sentimentStyle.icon;

  return (
    <section>
      <header className="flex justify-between">
        <div className="font-bold  text-xl flex gap-2 items-center">
          <CheckCircle2 size={18} className="text-accent-500" />
          Resultado da análise
        </div>
        <p className={`flex gap-1.5 px-3 font-semibold rounded-full items-center font-sora text-xs ${sentimentStyle.className}`}>
          <SentimentIcon size={14} />
          {sentimentStyle.label}
        </p>
      </header>
      <main className="flex flex-col gap-3 mt-3">
        <div className="flex gap-3">
          <ResumoCard text={resumo} />
          <AtencaoCard text={pontosDeAtencao} />
        </div>
        <div className="flex gap-3">
          <OportunidadesCard items={oportunidades} />
          <RiscosCard items={riscos} />
        </div>
        <div className="flex gap-3">
          <PendenciasCard items={pendencias} className="flex-1" />
        </div>
      </main>
    </section>
  );
}
