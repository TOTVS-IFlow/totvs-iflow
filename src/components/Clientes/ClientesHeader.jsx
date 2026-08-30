import React from "react";

export default function ClientesHeader({
  title = "Clientes",
  description = "Visão separada por clientes",
}) {
  return (
    <header className="flex justify-between">
      <section>
        <h1 className="text-3xl text-slate-500">{title}</h1>
        <p className="text-slate-500">{description}</p>
      </section>
    </header>
  );
}
