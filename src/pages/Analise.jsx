import React, { useState } from "react";
import AnaliseHeader from "../components/Analise/AnaliseHeader";
import UploadCard from "../components/Analise/UploadCard";
import AnaliseCards from "../components/Analise/AnaliseCards";
import ResultadoVazio from "../components/Analise/ResultadoVazio";
import ResultadoCarregando from "../components/Analise/ResultadoCarregando";

export default function Analise() {
  const [arquivo, setArquivo] = useState(null);
  const [estado, setEstado] = useState("vazio"); // vazio, analisando ou concluido

  function selecionarArquivo(novoArquivo) {
    setArquivo(novoArquivo);
    setEstado("vazio");
  }

  function iniciarAnalise() {
    setEstado("analisando");
    setTimeout(() => setEstado("concluido"), 2500);
  }

  return (
    <div className="flex flex-col gap-4">
      <AnaliseHeader />
      <UploadCard
        arquivo={arquivo}
        estado={estado}
        onSelecionarArquivo={selecionarArquivo}
        onIniciarAnalise={iniciarAnalise}
      />
      {estado === "vazio" && <ResultadoVazio />}
      {estado === "analisando" && <ResultadoCarregando arquivo={arquivo} />}
      {estado === "concluido" && <AnaliseCards />}
    </div>
  );
}
