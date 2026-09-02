import React from "react";
import { FileText, Upload, RotateCcw } from "lucide-react";

export default function UploadCard({ arquivo, estado, onSelecionarArquivo, onIniciarAnalise }) {
  const analisando = estado === "analisando";
  const podeAnalisar = Boolean(arquivo) && !analisando;

  return (
    <article>
      <div className="bg-navy-800 rounded-t-xl flex justify-between py-3 px-5">
        <div className="flex gap-2 font-medium items-center">
          <FileText size={33} className="text-accent-500 rounded-lg bg-accent-900 px-1 py-1.5"/>
          Selecione o arquivo de transcrição
        </div>
        <label className="flex gap-1.5 text-sm border-[1.5px] border-slate-500 rounded-lg px-3 py-1 items-center text-white font-medium cursor-pointer transition-colors hover:border-accent-500 hover:text-accent-500 focus-within:ring-2 focus-within:ring-accent-500">
          <Upload size={18} />
          Enviar arquivo
          <input
            type="file"
            accept=".txt"
            className="sr-only"
            onChange={(e) => onSelecionarArquivo(e.target.files[0] ?? null)}
          />
        </label>
      </div>
      <div className="bg-surface rounded-b-xl flex items-center justify-between py-3 px-5">
        <p className="text-slate-600 font-mono text-xs">
          {analisando ? "Analisando transcrição..." : arquivo ? arquivo.name : "Aguardando transcrição"}
        </p>
        <button
          onClick={onIniciarAnalise}
          disabled={!podeAnalisar}
          className={`flex gap-1.5 text-sm border-[1.5px] rounded-lg px-4 py-2 items-center font-bold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
            podeAnalisar
              ? "border-accent-500 text-accent-500 hover:border-accent-400 hover:text-accent-400 cursor-pointer"
              : "border-slate-500 text-slate-500 cursor-not-allowed"
          }`}
        >
          <RotateCcw size={16} className={analisando ? "animate-spin" : ""} />
          {analisando ? "Analisando..." : "Iniciar análise"}
        </button>
      </div>
    </article>
  );
}
