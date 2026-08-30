import React from "react";
import PendenciasHeader from "../components/Pendencias/PendenciasHeader";
import SummaryCards from "../components/Pendencias/SummaryCards";
import ListaPendencias from "../components/Pendencias/ListaPendencias";

export default function Pendencias() {
  return (
    <div className="flex flex-col gap-4">
      <PendenciasHeader />
      <SummaryCards />
      <ListaPendencias className="w-full max-w-4xl" />
    </div>
  );
}
