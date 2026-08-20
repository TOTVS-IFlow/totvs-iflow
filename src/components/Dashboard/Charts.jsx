import React from "react";
import { BarChart3, PieChart as PieChartIcon } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  PieChart,
  Pie,
} from "recharts";
import ChartCard from "./ChartCard";

const COLORS = {
  positivo: "#31ccb9",
  neutro: "#94a3b8",
  negativo: "#dc4b4b",
};

// score vai de -1 (totalmente negativo) a 1 (totalmente positivo)
const DEFAULT_TREND_DATA = [
  { month: "jan", score: 0.6 },
  { month: "fev", score: 0.1 },
  { month: "mar", score: -0.4 },
];

const DEFAULT_DISTRIBUTION_DATA = [
  { name: "Positivo", value: 1, color: COLORS.positivo },
  { name: "Neutro", value: 1, color: COLORS.neutro },
  { name: "Negativo", value: 1, color: COLORS.negativo },
];

function scoreToColor(score) {
  if (score > 0.2) return COLORS.positivo;
  if (score < -0.2) return COLORS.negativo;
  return COLORS.neutro;
}

function SentimentBarChart({ data }) {
  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke="#334155" strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={{ stroke: "#334155" }}
            tickLine={false}
          />
          <YAxis
            domain={[-1, 1]}
            ticks={[-1, -0.5, 0, 0.5, 1]}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <ReferenceLine y={0} stroke="#475569" />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            formatter={(value) => value.toFixed(1)}
            contentStyle={{
              background: "#0C2132",
              border: "1px solid #103A46",
              borderRadius: 8,
              color: "#fff",
            }}
          />
          <Bar dataKey="score" radius={[4, 4, 0, 0]} maxBarSize={40}>
            {data.map((entry) => (
              <Cell key={entry.month} fill={scoreToColor(entry.score)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function SentimentDonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const positivoPct = total === 0 ? 0 : Math.round((data[0].value / total) * 100);

  return (
    <div className="flex-1 flex items-center justify-center gap-8">
      <div className="relative w-36 h-36 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius="70%"
              outerRadius="100%"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-accent-500">{positivoPct}%</span>
          <span className="text-xs text-slate-400">positivo</span>
        </div>
      </div>

      <ul className="flex flex-col gap-2 text-sm">
        {data.map((item) => (
          <li key={item.name} className="flex items-center gap-2 text-slate-300">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="flex-1">{item.name}</span>
            <span className="text-white font-semibold">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Charts({
  trendData = DEFAULT_TREND_DATA,
  distributionData = DEFAULT_DISTRIBUTION_DATA,
}) {
  return (
    <div className="flex flex-wrap gap-4">
      <ChartCard title="Sentimento ao longo do tempo" icon={BarChart3}>
        <SentimentBarChart data={trendData} />
      </ChartCard>
      <ChartCard title="Distribuição de sentimento" icon={PieChartIcon}>
        <SentimentDonutChart data={distributionData} />
      </ChartCard>
    </div>
  );
}
