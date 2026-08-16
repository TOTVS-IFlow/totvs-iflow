import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Pendencias from "./pages/Pendencias.jsx";
import Analise from "./pages/analise.jsx";
import Historico from "./pages/historico.jsx";
import Clientes from "./pages/clientes.jsx";

import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="analise" element={<Analise />} />
        <Route path="pendencias" element={<Pendencias />} />
        <Route path="historico" element={<Historico />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
