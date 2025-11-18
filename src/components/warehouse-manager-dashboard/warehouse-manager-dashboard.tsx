"use client";

import { OverviewCards } from "./overview-cards";
import { CommodityMovementChart } from "./commodity-movement-chart";
import { WRPStatusOverview } from "./wrp-status-overview";
import { WarehouseCapacity } from "./warehouse-capacity";
import { RegisteredClients } from "./registered-clients";
import { RecentActivities } from "./recent-activities";
import { StorageDistribution } from "./storage-distribution";
import { useDrawerContext } from "../providers/drawer-provider";
import { RegisterClientForm } from "./register-client-form";

export const WarehouseManagerDashboard = () => {
  const { setDrawerState } = useDrawerContext();

  const handleAddClient = () => {
    setDrawerState({
      opened: true,
      component: <RegisterClientForm />,
      size: "60%",
    });
  };

  return (
    <div className="flex flex-col h-full p-4 gap-4 overflow-auto">
      {/* Main Layout: Left (Overview + Chart) and Right (4 cards) */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* Left Section - flex-1 */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Overview Cards - 2x2 Grid */}
          <OverviewCards />

          {/* Commodity Movement Chart */}
          <CommodityMovementChart />
        </div>

        {/* Right Section - 45% width with 2x2 grid */}
        <div className="lg:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-4">
          <StorageDistribution />
          <RecentActivities />
          <WRPStatusOverview />
          <WarehouseCapacity />
        </div>
      </div>

      {/* Registered Clients Table */}
      <RegisteredClients onAddClient={handleAddClient} />
    </div>
  );
};
