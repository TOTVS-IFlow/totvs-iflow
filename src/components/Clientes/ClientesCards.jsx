import React from "react";
import ClientesCard from "./ClientesCard";

const cardsContent = [
  {client: "Grupo Vetor Logistica", sentiment: "positivo", reunioes: 6, pendencias: 2, riscos: 0, setor: "Logistica", produto: "Protheus"},
  {client: "Cooperativa AgroSul", sentiment: "negativo", reunioes: 5, pendencias: 1, riscos: 2, setor: "Agronegócio", produto: "Fluig"},
  {client: "Construtora Horizonte", sentiment: "neutro", reunioes: 3, pendencias: 3, riscos: 1, setor: "Construção Civil", produto: "RM"},
  {client: "Rede Saúde Vitalis", sentiment: "positivo", reunioes: 8, pendencias: 0, riscos: 0, setor: "Saúde", produto: "Protheus"},
  {client: "Fashion Mais Varejo", sentiment: "negativo", reunioes: 4, pendencias: 4, riscos: 3, setor: "Varejo", produto: "Winthor"},
];

export default function ClientesCards(){
    return (
        <div className="flex flex-wrap gap-4">
            {cardsContent.map((card) => (
                <ClientesCard
                    key={card.client}
                    sentiment={card.sentiment}
                    client={card.client}
                    reunioes={card.reunioes}
                    pendencias={card.pendencias}
                    riscos={card.riscos}
                    setor={card.setor}
                    produto={card.produto}
                    className="flex-1 min-w-[290px] max-w-[350px]"
                />
            ))}
        </div>
    )
}