import React from "react";
import { FileText, Upload, RotateCcw } from "lucide-react";

export default function UploadCard() {
  return (
    <article className="">
      <div className="bg-navy-800 rounded-t-xl flex justify-between py-3 px-5">
        <div className="flex gap-2 font-medium items-center">
          <FileText size={33} className="text-accent-500 rounded-lg bg-accent-900 px-1 py-1.5"/>
          Selecione o arquivo de transcrição
        </div>
        <button className="flex gap-1.5 text-sm border-[1.5px] border-slate-500 rounded-lg px-3 py-1 items-center text-white font-medium">
          <Upload size={18} />
          Enviar arquivo
        </button>
      </div>
      <div className="bg-surface rounded-b-xl flex items-center justify-between py-3 px-5">
        <p className="text-slate-600 font-mono text-xs">Aguardando transcrição</p>
        <button className="flex gap-1.5 text-sm border-[1.5px] border-slate-500 rounded-lg px-4 py-2 items-center text-slate-500 font-bold ">
          <RotateCcw size={16} />
          Iniciar análise
        </button>
      </div>
    </article>
  );
}
