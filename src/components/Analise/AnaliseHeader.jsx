import React from "react";

export default function AnaliseHeader({
  title = "Análise de reunião",
  description = "Envie a transcrição bruta (.txt), a IA resume, classifica o sentimento e extrai pendências automaticamente",
}) {
  return (
    <header className="flex justify-between">
      <section>
        <h1 className="text-3xl text-slate-500">{title}</h1>
        <p className="text-slate-500">{description}</p>
      </section>
    </header>
  );
}
