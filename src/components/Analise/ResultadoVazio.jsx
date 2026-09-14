import React from "react";
import { FileSearch } from "lucide-react";

export default function ResultadoVazio() {
  return (
    <section className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-700 py-14 text-center">
      <FileSearch size={28} className="text-slate-600" />
      <p className="font-medium text-slate-400">Nenhuma análise em andamento</p>
      <p className="text-sm text-slate-600 max-w-md">
        Envie uma transcrição (.txt) e inicie a análise para ver aqui o resumo, o ponto de atenção, as oportunidades e as pendências.
      </p>
    </section>
  );
}
