"use client";

import { TxnReportsSetup } from "@/src/components/transaction-reports/txn-reports-setup";
import { WarehouseManagerTransactionDashboard } from "@/src/components/transaction-reports/warehouse-manager-dashboard";
import { useAuth } from "@/src/contexts/auth-context";
import { UserRole } from "@/src/types/auth";

const TransactionReports = () => {
  const { user } = useAuth();

  // Warehouse manager sees the dashboard view with overview cards and all transactions
  if (user?.role === UserRole.WAREHOUSE_MANAGER) {
    return <WarehouseManagerTransactionDashboard />;
  }

  // Clients see their individual transaction reports view
  return <TxnReportsSetup />;
};

export default TransactionReports;
