"use client";

import { ReceiptManagement } from "@/src/components/receipt-management";
import { TenantAdminReceiptManagement } from "@/src/components/receipt-management/tenant-admin/tenant-admin-receipt-management";
import { useAuth } from "@/src/contexts/auth-context";
import { UserRole } from "@/src/types/auth";

const ReceiptManagementPage = () => {
  const { user } = useAuth();

  if (user?.role === UserRole.TENANT_ADMIN) {
    return <TenantAdminReceiptManagement />;
  }

  return <ReceiptManagement />;
};

export default ReceiptManagementPage;
