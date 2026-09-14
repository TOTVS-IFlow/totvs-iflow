export const MEETINGS = [
  {
    id: 1,
    client: "Grupo Vetor Logística",
    title: "Revisão trimestral de conta",
    date: "2026-08-22T14:30:00Z",
    status: "analyzed",
    sentiment: "positive",
    summary:
      "Revisão de performance do trimestre. Adoção dos módulos contratados está acima da média. Cliente satisfeito, mas levantou um ponto de atenção sobre o tempo de resposta do suporte.",
    attentionPoint:
      "NPS interno subiu para 72 e a adoção do módulo financeiro chegou a 89%, mas o tempo de resposta do suporte segue acima do acordado.",
    transcript:
      "[14:32] Carla Mendes: Vamos revisar os números do trimestre...\n[14:41] Ana Paula: No geral estamos satisfeitos, só o suporte que precisa melhorar o tempo de resposta.\n[14:52] Carla Mendes: Anotado, vou escalar o caso ainda hoje.",
    opportunities: [
      { tag: "upsell", description: "Ana sinalizou abertura para renovar com plano superior" },
    ],
    risks: [
      { level: "low", description: "Banco de horas ainda em Excel" },
      { level: "high", description: "Aplicação não funciona nos finais de semana" },
    ],
    pendingItems: [
      { id: 1, description: "Escalar caso de suporte ao time de CS", owner: "Carla Mendes", status: "open" },
    ],
  },
  {
    id: 2,
    client: "Cooperativa AgroSul",
    title: "Kickoff — Implantação ERP",
    date: "2026-07-04T10:17:00Z",
    status: "analyzed",
    sentiment: "neutral",
    summary:
      "Reunião de abertura do projeto de implantação do ERP. Escopo e cronograma alinhados, time do cliente engajado e disponível para os próximos passos.",
    attentionPoint:
      "O time técnico da Cooperativa ainda não foi formalmente nomeado, o que pode atrasar o início do cronograma de 90 dias.",
    transcript:
      "[10:20] Marcos Silva: Bom dia a todos, vamos começar apresentando o cronograma...\n[10:29] Renata Paz: Nosso time está pronto para iniciar assim que confirmarmos as datas.\n[10:35] Marcos Silva: Combinado. Vamos avançar com o kickoff técnico na próxima semana.",
    opportunities: [],
    risks: [
      { level: "medium", description: "Cronograma depende de nomeação interna ainda pendente" },
      { level: "high", description: "Migração dos dados históricos sem responsável definido" },
    ],
    pendingItems: [
      { id: 1, description: "Enviar plano de treinamento aos usuários-chave", owner: "Marcos Silva", status: "open" },
      { id: 2, description: "Validar cronograma de 90 dias com o time técnico", owner: "Renata Paz", status: "open" },
      { id: 3, description: "Nomear responsável técnico da Cooperativa", owner: "Marcos Silva", status: "done" },
    ],
  },
  {
    id: 3,
    client: "Construtora Horizonte",
    title: "Discovery — Automação fiscal",
    date: "2026-08-26T16:30:00Z",
    status: "analyzed",
    sentiment: "positive",
    summary:
      "Levantamento inicial das dores fiscais da Construtora Horizonte. Processo hoje é manual e propenso a erro; cliente busca automação antes do fechamento do próximo exercício.",
    attentionPoint:
      "O fechamento fiscal é feito manualmente hoje, com risco alto de erro no próximo exercício se nada mudar.",
    transcript:
      "[16:31] Bruno Lima: Hoje fechamos os impostos manualmente, é bem sujeito a erro.\n[16:40] Equipe TOTVS: Entendido, vamos mapear os pontos de automação possíveis e voltamos com uma proposta.",
    opportunities: [
      { tag: "crosssell", description: "Automação fiscal como porta de entrada para o módulo financeiro completo" },
    ],
    risks: [],
    pendingItems: [],
  },
];
