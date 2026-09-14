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
  PieChart,
  Pie,
} from "recharts";
import ChartCard from "./ChartCard";
import { SENTIMENT_STYLES, getSentimentStyle } from "../../constants/sentiment";
import { DASHBOARD_SUMMARY } from "../../mocks/dashboard";
import { formatarMesCurto } from "../../utils/formatDate";

function MeetingsPerMonthChart({ data }) {
  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke="#334155" strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickFormatter={formatarMesCurto}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={{ stroke: "#334155" }}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.04)" }}
            labelFormatter={formatarMesCurto}
            formatter={(value) => [`${value} ${value === 1 ? "reunião" : "reuniões"}`, "Analisadas"]}
            contentStyle={{
              background: "#0C2132",
              border: "1px solid #103A46",
              borderRadius: 8,
              color: "#fff",
            }}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={40} fill={SENTIMENT_STYLES.positive.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function SentimentDonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const positive = data.find((item) => item.sentiment === "positive");
  const positivePct = total === 0 ? 0 : Math.round(((positive?.value ?? 0) / total) * 100);

  return (
    <div className="flex-1 flex items-center justify-center gap-8">
      <div className="relative w-36 h-36 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="sentiment"
              innerRadius="70%"
              outerRadius="100%"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.sentiment} fill={getSentimentStyle(entry.sentiment).color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-bold text-accent-500">{positivePct}%</span>
          <span className="text-xs text-slate-400">positivo</span>
        </div>
      </div>

      <ul className="flex flex-col gap-2 text-sm">
        {data.map((item) => (
          <li key={item.sentiment} className="flex items-center gap-2 text-slate-300">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: getSentimentStyle(item.sentiment).color }}
            />
            <span className="flex-1">{getSentimentStyle(item.sentiment).label}</span>
            <span className="text-white font-semibold">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Charts({
  meetingsPerMonth = DASHBOARD_SUMMARY.meetingsPerMonth,
  distributionData = DASHBOARD_SUMMARY.sentimentDistribution,
}) {
  return (
    <div className="flex flex-wrap gap-4">
      <ChartCard title="Reuniões por mês" icon={BarChart3}>
        <MeetingsPerMonthChart data={meetingsPerMonth} />
      </ChartCard>
      <ChartCard title="Distribuição de sentimento" icon={PieChartIcon}>
        <SentimentDonutChart data={distributionData} />
      </ChartCard>
    </div>
  );
}
