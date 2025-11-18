"use client";

import { CommodityMgmntSetup } from "@/src/components/commodity-mgmnt/commodity-mgmnt-setup";
import { WarehouseManagerCommodityDashboard } from "@/src/components/commodity-management/warehouse-manager-dashboard";
import { useAuth } from "@/src/contexts/auth-context";
import { UserRole } from "@/src/types/auth";

const CommodityMgmnt = () => {
  const { user } = useAuth();

  // Warehouse manager sees the dashboard view with overview cards and all receipts
  if (user?.role === UserRole.WAREHOUSE_MANAGER) {
    return <WarehouseManagerCommodityDashboard />;
  }

  // Clients see their individual commodity details view
  return <CommodityMgmntSetup />;
};

export default CommodityMgmnt;
