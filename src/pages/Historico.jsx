import React, { useState } from "react";
import ReuniaoList from "../components/Historico/ReuniaoList";
import ReuniaoDetalhe from "../components/Historico/ReuniaoDetalhe";
import { MEETINGS } from "../mocks/meetings";

export default function Historico() {
  const [selectedId, setSelectedId] = useState(MEETINGS[0].id)
  const reuniaoSelecionada = MEETINGS.find((r) => r.id === selectedId)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-[calc(100vh-100px)]">
        <ReuniaoList meetings={MEETINGS} selectedId={selectedId} onSelect={setSelectedId} />
        <ReuniaoDetalhe reuniao={reuniaoSelecionada} />
      </div>
    </div>
  );
}
