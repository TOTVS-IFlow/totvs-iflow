import React, { useState } from "react";
import { formatarDataHoraExtensa } from "../../utils/formatDate";
import { Calendar, Sparkle, ListChecks, TrendingUp, FileText, CheckCircle, UserCircle, Check } from "lucide-react";
import { getRiskLevelStyle } from "../../constants/riskLevel";
import { getPendingStatusStyle, countOpen } from "../../constants/pendingStatus";
import { getOpportunityTagLabel } from "../../constants/opportunityTag";

export default function ReuniaoDetalhe({ reuniao }) {
  const [abaAtiva, setAbaAtiva] = useState("resumo")
  const openPendingCount = countOpen(reuniao.pendingItems);
  return (
    <div className="border-accent-950 border rounded-r-2xl px-5 py-4 flex-1 h-full min-h-0 overflow-y-auto">
      <header>
        <div className="flex text-center items-center gap-2.5">
            <p className="font-semibold text-accent-500 text-sm">{reuniao.client}</p>
            <p className="text-xs font-semibold text-success bg-green-950 px-2 py-0.5 rounded-full">• Analisada</p>
        </div>
        <div>
            <p className="text-2xl font-bold">{reuniao.title}</p>
            <p className="flex items-center mt-2 gap-2 text-xs font-mono tracking-tighter text-slate-500"><Calendar size={16} /> {formatarDataHoraExtensa(reuniao.date)}</p>
        </div>
      </header>
      <nav className="mt-4">
        <ul className="flex gap-4 border-b border-slate-700">
          <li onClick={() => setAbaAtiva("resumo")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 transition-colors ${abaAtiva === "resumo" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}><Sparkle size={12} /> Resumo</li>
          <li onClick={() => setAbaAtiva("pendencias")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 transition-colors ${abaAtiva === "pendencias" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}><ListChecks size={12} /> Pendências <span className="bg-navy-850 text-white text-xs px-2 rounded-full font-semibold">{openPendingCount}</span></li>
          <li onClick={() => setAbaAtiva("oportunidades")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 transition-colors ${abaAtiva === "oportunidades" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}><TrendingUp size={12} /> Oportunidades <span className="bg-navy-850 text-white text-xs px-2 rounded-full font-semibold">{reuniao.opportunities.length}</span></li>
          <li onClick={() => setAbaAtiva("transcricao")} className={`flex gap-2 pb-2 -mb-px text-sm items-center cursor-pointer border-b-2 transition-colors ${abaAtiva === "transcricao" ? "text-accent-500 border-accent-500" : "text-slate-500 border-transparent hover:text-slate-300"}`}><FileText size={12} /> Transcrição</li>
        </ul>
      </nav>
      <main>
        {abaAtiva === "resumo" &&
          <section className="pt-5">
            <div className="bg-gradient-to-br from-accent-900 to-navy-900 rounded-xl p-4">
              <div className="text-[11px] flex gap-1 items-center tracking-wider font-display font-bold text-accent-500 ">
                <Sparkle size={8} />
                <p>RESUMO GERADO POR IA</p>
              </div>
              <p className="text-sm mt-1">{reuniao.summary}</p>
            </div>
            <div className="my-4">
              <div className="flex gap-1 items-center font-semibold">
                <ListChecks size={13} className="text-slate-500" />
                <p>Ponto de atenção</p>
              </div>
              <div className="flex gap-1 text-sm">
                <CheckCircle size={13} className="text-success mt-1.5 shrink-0" />
                <p>{reuniao.attentionPoint}</p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              {reuniao.opportunities.length > 0 &&
                <div className="bg-navy-900 items-start gap-1 border-l-2 border-l-accent-500 p-2 rounded-lg flex-none basis-[calc(50%-0.5rem)] min-w-[200px] flex flex-col">
                  <p className="font-semibold text-accent-500 text-xs">OPORTUNIDADE</p>
                  <p className="font-semibold text-sm mb-1">{reuniao.opportunities[0].description}</p>
                  <p className="mt-auto self-end text-accent-500 rounded-full px-2 py-0.5 text-xs bg-accent-950">{getOpportunityTagLabel(reuniao.opportunities[0].tag)}</p>
                </div>
              }
              {reuniao.risks.length > 0 &&
                <div className={`bg-navy-900 border-l-2 p-2 rounded-lg flex-none basis-[calc(50%-0.5rem)] min-w-[200px] flex flex-col ${getRiskLevelStyle(reuniao.risks[0].level).border}`}>
                  <p className={`font-semibold text-xs ${getRiskLevelStyle(reuniao.risks[0].level).text}`}>RISCO</p>
                  <p className="font-semibold text-sm">{reuniao.risks[0].description}</p>
                  <p className={`mt-auto self-end rounded-full px-2 py-0.5 text-xs ${getRiskLevelStyle(reuniao.risks[0].level).badge}`}>{getRiskLevelStyle(reuniao.risks[0].level).shortLabel}</p>
                </div>
              }
            </div>
          </section>
        }
        {abaAtiva === "pendencias" &&
          <section className="pt-5">
            {reuniao.pendingItems.length > 0 &&
              <ul className="flex flex-col divide-y divide-slate-700">
                {reuniao.pendingItems.map((pendencia)=>(
                  <li key={pendencia.id} className="flex gap-2.5 items-center py-3 first:pt-0 last:pb-0">
                    <label className="flex gap-2.5 items-center cursor-pointer group">
                      <span className="relative flex items-center justify-center w-4 h-4 shrink-0">
                        <input type="checkbox" className="peer appearance-none w-4 h-4 rounded border border-slate-600 bg-transparent checked:bg-accent-500 checked:border-accent-500 group-hover:border-accent-500 transition-colors cursor-pointer" />
                        <Check size={11} strokeWidth={3} className="pointer-events-none absolute text-navy-950 opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </span>
                      <div>
                        <p className="font-medium">{pendencia.description}</p>
                        <p className="font-sora text-xs text-slate-500 items-center flex gap-1"><UserCircle size={14} className="text-accent-700" /> {pendencia.owner}</p>
                      </div>
                    </label>
                    <p className={`ml-auto text-xs rounded-full py-0.5 px-2 ${getPendingStatusStyle(pendencia.status).wrapperClass}`}>{getPendingStatusStyle(pendencia.status).label}</p>
                  </li>
                ))}
              </ul>
            }
            {reuniao.pendingItems.length === 0 &&
              <p className="flex gap-1.5 items-center justify-center text-slate-400 py-6"><CheckCircle size={16} /> Não houve pendências nesta reunião</p>
            }
          </section>
        }
        {abaAtiva === "oportunidades" &&
          <section className="pt-5">
            <div className="flex gap-4 flex-wrap">
              {reuniao.opportunities.map((oportunidade, index)=>(
                <div key={`oportunidade-${index}`} className="bg-navy-900 items-start gap-1 border-l-2 border-l-accent-500 p-2 rounded-lg flex-none basis-[calc(50%-0.5rem)] min-w-[200px] flex flex-col">
                  <p className="font-semibold text-accent-500 text-xs">OPORTUNIDADE</p>
                  <p className="font-semibold text-sm mb-1">{oportunidade.description}</p>
                  <p className="mt-auto self-end text-accent-500 rounded-full px-2 py-0.5 text-xs bg-accent-950">{getOpportunityTagLabel(oportunidade.tag)}</p>
                </div>
              ))}
              {reuniao.risks.map((risco, index) => (
                <div key={`risco-${index}`} className={`bg-navy-900 gap-1 border-l-2 p-2 rounded-lg flex-none basis-[calc(50%-0.5rem)] min-w-[200px] flex flex-col ${getRiskLevelStyle(risco.level).border}`}>
                  <p className={`font-semibold text-xs ${getRiskLevelStyle(risco.level).text}`}>RISCO</p>
                  <p className="font-semibold text-sm">{risco.description}</p>
                  <p className={`mt-auto self-end rounded-full px-2 py-0.5 text-xs ${getRiskLevelStyle(risco.level).badge}`}>{getRiskLevelStyle(risco.level).shortLabel}</p>
                </div>
              ))}
            </div>
            {(reuniao.opportunities.length === 0 && reuniao.risks.length === 0)  &&
              <p className="flex gap-1.5 items-center justify-center text-slate-400 py-6"><CheckCircle size={16} /> Não houve oportunidades ou riscos nesta reunião</p>
            }
          </section>
        }
        {abaAtiva === "transcricao" &&
          <section className="pt-5">
            <p className="text-slate-400 p-2.5 border border-navy-800 font-mono text-xs">{reuniao.transcript}</p>
          </section>
        }
      </main>
    </div>
  );
}
