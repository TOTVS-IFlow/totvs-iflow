import React from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import SummaryCards from "../components/Dashboard/SummaryCards";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardHeader />
      <SummaryCards />
    </div>
  );
}
