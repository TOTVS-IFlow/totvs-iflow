import React, { useState } from "react";
import AnaliseHeader from "../components/Analise/AnaliseHeader";
import UploadCard from "../components/Analise/UploadCard";
import AnaliseCards from "../components/Analise/AnaliseCards";
import ResultadoVazio from "../components/Analise/ResultadoVazio";
import ResultadoCarregando from "../components/Analise/ResultadoCarregando";
import { MEETINGS } from "../mocks/meetings";
import { CLIENTS } from "../mocks/clients";

export default function Analise() {
  const [arquivo, setArquivo] = useState(null);
  const [clientId, setClientId] = useState("");
  const [newClientName, setNewClientName] = useState("");
  const [estado, setEstado] = useState("vazio"); // vazio, analisando ou concluido
  const [analise, setAnalise] = useState(null);

  function selecionarArquivo(novoArquivo) {
    setArquivo(novoArquivo);
    setEstado("vazio");
  }

  async function iniciarAnalise() {
    setEstado("analisando");
    const transcript = await arquivo.text();
    console.info(`Transcrição lida: ${transcript.length} caracteres`);
    setTimeout(() => {
      setAnalise(MEETINGS[0]);
      setEstado("concluido");
    }, 2500);
  }

  return (
    <div className="flex flex-col gap-4">
      <AnaliseHeader />
      <UploadCard
        clients={CLIENTS}
        arquivo={arquivo}
        clientId={clientId}
        newClientName={newClientName}
        estado={estado}
        onSelecionarArquivo={selecionarArquivo}
        onSelecionarCliente={setClientId}
        onAlterarNovaEmpresa={setNewClientName}
        onIniciarAnalise={iniciarAnalise}
      />
      {estado === "vazio" && <ResultadoVazio />}
      {estado === "analisando" && <ResultadoCarregando arquivo={arquivo} />}
      {estado === "concluido" && analise && (
        <AnaliseCards
          sentiment={analise.sentiment}
          summary={analise.summary}
          attentionPoint={analise.attentionPoint}
          opportunities={analise.opportunities}
          risks={analise.risks}
          pendingItems={analise.pendingItems}
        />
      )}
    </div>
  );
}
