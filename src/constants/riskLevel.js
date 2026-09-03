// Valores possiveis do campo de level de um risco: low, medium ou high.
export const RISK_LEVEL_STYLES = {
  low: {
    label: "Risco Baixo",
    shortLabel: "baixo",
    badge: "text-slate-300 bg-slate-700 bg-opacity-45",
    border: "border-l-slate-500",
    text: "text-slate-300",
  },
  medium: {
    label: "Risco Médio",
    shortLabel: "médio",
    badge: "text-yellow-100 bg-warning bg-opacity-45",
    border: "border-l-warning",
    text: "text-yellow-200",
  },
  high: {
    label: "Risco Alto",
    shortLabel: "alto",
    badge: "text-red-300 bg-red-900 bg-opacity-45",
    border: "border-l-danger",
    text: "text-danger",
  },
};

export const DEFAULT_RISK_LEVEL = "low";

export function getRiskLevelStyle(level) {
  return RISK_LEVEL_STYLES[level] ?? RISK_LEVEL_STYLES[DEFAULT_RISK_LEVEL];
}

export function countHigh(risks = []) {
  return risks.filter((risk) => risk.level === "high").length;
}
