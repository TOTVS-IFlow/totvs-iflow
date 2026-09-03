import React from "react";
import { FileText, Upload, RotateCcw, ChevronDown, Building2 } from "lucide-react";

export default function UploadCard({
  clients = [],
  arquivo,
  clientId,
  newClientName,
  estado,
  onSelecionarArquivo,
  onSelecionarCliente,
  onAlterarNovaEmpresa,
  onIniciarAnalise,
}) {
  const analisando = estado === "analisando";
  const criandoEmpresa = clientId === "new";
  const clienteDefinido = criandoEmpresa ? newClientName.trim().length > 0 : clientId !== "";
  const podeAnalisar = Boolean(arquivo) && clienteDefinido && !analisando;

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

      <div className="bg-surface flex items-center justify-between gap-4 py-3 px-5 border-b border-navy-800">
        <div className="flex items-center gap-2 text-sm text-slate-400 shrink-0">
          <Building2 size={16} className="text-accent-700" />
          Empresa da reunião
        </div>
        <div className="flex items-center gap-2 flex-1 justify-end">
          {criandoEmpresa && (
            <input
              type="text"
              value={newClientName}
              onChange={(e) => onAlterarNovaEmpresa(e.target.value)}
              placeholder="Nome da nova empresa"
              className="bg-navy-950 border border-accent-950 rounded-xl px-3 py-2 text-sm w-56 outline-none transition-shadow focus:ring-2 focus:ring-accent-500"
            />
          )}
          <div className="relative">
            <select
              value={clientId}
              onChange={(e) => onSelecionarCliente(e.target.value)}
              className="appearance-none cursor-pointer outline-none transition-colors hover:border-accent-800 focus:ring-2 focus:ring-accent-500 pl-3 pr-9 py-2 bg-navy-950 border border-accent-950 rounded-xl text-sm"
            >
              <option value="" className="bg-surface text-slate-100">Selecione a empresa</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id} className="bg-surface text-slate-100">{client.name}</option>
              ))}
              <option value="new" className="bg-surface text-slate-100">+ Nova empresa</option>
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
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
