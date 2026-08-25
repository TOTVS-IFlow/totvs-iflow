import React from "react";
import AnaliseHeader from "../components/Analise/AnaliseHeader";
import UploadCard from "../components/Analise/UploadCard";
import AnaliseCards from "../components/Analise/AnaliseCards";

export default function Analise() {
  return (
    <div className="flex flex-col gap-4">
      <AnaliseHeader />
      <UploadCard />
      <AnaliseCards />
    </div>
  );
}
