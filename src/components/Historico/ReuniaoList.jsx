import React from "react";
import { Search } from "lucide-react";
import { formatarDataHora } from "../../utils/formatDate";

export const DEFAULT_ITEMS = [
    {
        id: 0,
        client: "Grupo Vetor Logisitica",
        title: "Revisão trimestral de conta",
        date: "2026-08-22T14:30:00Z",
        pendingCount: 1,
        resumo: "Revisão de performance do trimestre. Adoção dos módulos contratados está acima da média. Cliente satisfeito, mas levantou um ponto de atenção sobre o tempo de resposta do suporte.",
        oportunidades: [
            { tag: "Upsell", description: "Ana sinalizou abertura para renovar com plano superior" },
        ],
        riscos: [
            { level: "baixo", description: "Banco de horas ainda em Excel", id: 0},
            { level: "alto", description: "Aplicação não funciona nos finais de semana", id: 1}
        ],
        pendencias: [
            { id: 1, description: "Escalar caso de suporte ao time de CS", owner: "Carla Mendes", status: "aberta" },
        ],
        pontosDeAtencao: "ONPS interno subiu para 72, ja a adoção do módulo financeiro em 89%, ONPS interno subiu para 72, ja a adoção do módulo financeiro em 89%, ONPS interno subiu para 72, ja a adoção do módulo financeiro em 89%.",
        transcricao:
            "[14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje. [14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje. [14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje. [14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje. [14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje. [14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje. [14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje. [14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje.",
    },
    {
        id: 1,
        client: "Cooperativa AgroSul",
        title: "Kickoff — Implantação ERP",
        date: "2026-07-04T10:17:00Z",
        pendingCount: 3,
        resumo: "Reunião de abertura do projeto de implantação do ERP. Escopo e cronograma alinhados, time do cliente engajado e disponível para os próximos passos.",
        oportunidades: [],
        riscos: [
            { level: "baixo", description: "Banco de horas ainda em Excel", id: 0},
            { level: "alto", description: "Aplicação não funciona nos finais de semana", id: 1}
        ],
        pendencias: [
            { id: 1, description: "Enviar plano de treinamento aos usuários-chave", owner: "Marcos Silva", status: "aberta" },
            { id: 2, description: "Validar cronograma de 90 dias com o time técnico", owner: "Renata Paz", status: "aberta" },
            { id: 3, description: "Nomear responsável técnico da Cooperativa", owner: "Marcos Silva", status: "concluida" },
        ],
        pontosDeAtencao: "",
        transcricao:
            "[10:20] Marcos Silva: Bom dia a todos, vamos começar apresentando o cronograma...\n[10:29] Renata Paz: Nosso time está pronto para iniciar assim que confirmarmos as datas.\n[10:35] Marcos Silva: Combinado. Vamos avançar com o kickoff técnico na próxima semana.",
    },
    {
        id: 2,
        client: "Construtora Horizonte",
        title: "Discovery — Automação fiscal",
        date: "2026-08-26T16:30:00Z",
        pendingCount: 0,
        resumo: "Levantamento inicial das dores fiscais da Construtora Horizonte. Processo hoje é manual e propenso a erro; cliente busca automação antes do fechamento do próximo exercício.",
        oportunidades: [
            { tag: "Cross-sell", description: "Automação fiscal como porta de entrada para o módulo financeiro completo" },
        ],
        riscos: [],
        pendencias: [],
        pontosDeAtencao: "",
        transcricao:
            "[16:31] Bruno Lima: Hoje fechamos os impostos manualmente, é bem sujeito a erro.\n[16:40] Equipe TOTVS: Entendido, vamos mapear os pontos de automação possíveis e voltamos com uma proposta.",
    },
]

export default function ReuniaoList({selectedId, onSelect}) {
  return (
    <aside className="border-accent-950 border px-3 py-2 flex flex-col rounded-l-2xl gap-2 w-80 shrink-0 h-full min-h-0">
        <header className="flex justify-between items-center">
            <p className="font-bold text-lg">Reuniões</p>
            {DEFAULT_ITEMS.length > 0 && (
                <p className="text-xs font-semibold text-success bg-green-950 px-2 py-0.5 rounded-full">{DEFAULT_ITEMS.length} analisadas</p>
            )}
        </header>
        <div className="relative">
            <Search size={15} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="text" className="bg-surface rounded-lg border-accent-950 pl-8 pr-2 py-1.5 border w-full outline-none transition-shadow focus:ring-2 focus:ring-accent-500" placeholder="Buscar reunião ou cliente" />
        </div>
        <ul className="mt-2 flex flex-col gap-1 flex-1 min-h-0 overflow-y-auto">
            {DEFAULT_ITEMS.map((reuniao) => (
                <li className={`p-2 rounded-lg cursor-pointer transition-colors ${reuniao.id === selectedId ? "bg-navy-800" : "hover:bg-navy-850"}`} key={reuniao.id} onClick={() => onSelect(reuniao.id)}>
                    <p className="text-accent-500 font-semibold text-xs">{reuniao.client}</p>
                    <p className="font-semibold text-sm">{reuniao.title}</p>
                    <p className="text-slate-500 font-mono text-xs text-[10px]">{formatarDataHora(reuniao.date)}</p>
                    {reuniao.pendingCount > 0 && (
                        <span className="text-yellow-200 font-semibold rounded-full px-2 py-0.5 text-[10px] bg-yellow-900">• {reuniao.pendingCount} pendências</span>
                    )}
                </li>
            ))}
        </ul>
    </aside>
  );
}