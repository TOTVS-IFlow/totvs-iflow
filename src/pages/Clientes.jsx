import React from "react";
import ClientesHeader from "../components/Clientes/ClientesHeader";
import ClientesCards from "../components/Clientes/ClientesCards";

export default function Clientes() {
  return (
    <div className="flex flex-col gap-4">
      <ClientesHeader />
      <ClientesCards />
    </div>
  );
}
