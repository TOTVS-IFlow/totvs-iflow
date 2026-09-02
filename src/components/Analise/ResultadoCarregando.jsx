import React from "react";

export default function ResultadoCarregando({ arquivo }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 rounded-xl border border-accent-950 bg-surface py-14 text-center">
      <div className="wave-loader" />
      <div>
        <p className="font-medium text-slate-200">Analisando a transcrição...</p>
        <p className="text-sm text-slate-500 font-mono mt-1">
          {arquivo ? arquivo.name : "lendo o arquivo"}
        </p>
      </div>
    </section>
  );
}
