import { TrendingUp, Minus, TrendingDown } from "lucide-react";

// Valores possiveis do campo sentiment: positive, neutral ou negative.
export const SENTIMENT_STYLES = {
  positive: {
    label: "Positivo",
    icon: TrendingUp,
    className: "text-accent-500 bg-accent-950",
    color: "#31ccb9",
  },
  neutral: {
    label: "Neutro",
    icon: Minus,
    className: "text-slate-300 bg-slate-700 bg-opacity-45",
    color: "#94a3b8",
  },
  negative: {
    label: "Negativo",
    icon: TrendingDown,
    className: "text-red-300 bg-red-900 bg-opacity-45",
    color: "#dc4b4b",
  },
};

export const DEFAULT_SENTIMENT = "positive";

export function getSentimentStyle(sentiment) {
  return SENTIMENT_STYLES[sentiment] ?? SENTIMENT_STYLES[DEFAULT_SENTIMENT];
}
