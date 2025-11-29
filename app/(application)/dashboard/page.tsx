"use client";

import { ClientDashboard } from "@/src/components/client-dashboard/client-dashboard";
import { WarehouseManagerDashboard } from "@/src/components/warehouse-manager-dashboard";
import { TenantAdminDashboard } from "@/src/components/tenant-admin-dashboard/tenant-admin-dashboard";
import { useAuth } from "@/src/contexts/auth-context";
import { UserRole } from "@/src/types/auth";

const Dashboard = () => {
  const { user, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  // Render dashboard based on user role
  switch (user?.role) {
    case UserRole.CLIENT:
      return <ClientDashboard />;

    case UserRole.WAREHOUSE_MANAGER:
      return <WarehouseManagerDashboard />;

    case UserRole.TENANT_ADMIN:
      return <TenantAdminDashboard />;

    case UserRole.FINANCIER:
      // TODO: Create FinancierDashboard component
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Financier Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome to the Financier dashboard. This view is under development.
          </p>
        </div>
      );

    case UserRole.GLOBAL_ADMIN:
      // TODO: Create GlobalAdminDashboard component
      return (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Global Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Welcome to the Global Admin dashboard. This view is under
            development.
          </p>
        </div>
      );

    default:
      // Default to client dashboard if role is unknown
      return <ClientDashboard />;
  }
};

export default Dashboard;
