"use client";

import { ClientDashboardCards } from "./client-dashboard-cards";
import { ClientDashboardCharts } from "./client-dashboard-charts";
import { ClientDashboardTable } from "./client-dashboard-table";
import { QuickActions } from "./quick-actions";

export const ClientDashboard = () => {
  return (
    <div className="flex flex-col h-full p-4 gap-3">
      <div className="flex flex-col">
        <h3 className="text-2xl font-medium text-[#0E1C43]">
          Welcome back, John!
        </h3>
        <p className="text-sm text-[#0E1C43]">
          Here&apos;s what&apos;s happening with your warehouse today
        </p>
      </div>
      <section className="flex flex-col flex-1 gap-3">
        <QuickActions />
        <ClientDashboardCards />
        <ClientDashboardCharts />
        <ClientDashboardTable />
      </section>
    </div>
  );
};
