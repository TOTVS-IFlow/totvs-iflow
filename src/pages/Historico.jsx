import React, { useState } from "react";
import ReuniaoList, { DEFAULT_ITEMS } from "../components/Historico/ReuniaoList";
import ReuniaoDetalhe from "../components/Historico/ReuniaoDetalhe";

export default function Historico() {
  const [selectedId, setSelectedId] = useState(DEFAULT_ITEMS[0].id)
  const reuniaoSelecionada = DEFAULT_ITEMS.find((r) => r.id === selectedId)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-[calc(100vh-100px)]">
        <ReuniaoList selectedId={selectedId} onSelect={setSelectedId} />
        <ReuniaoDetalhe reuniao={reuniaoSelecionada} />
      </div>
    </div>
  );
}
