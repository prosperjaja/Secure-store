"use client";

import { useAuth } from "../../contexts/auth-context";
import { UserRole } from "../../types/auth";
import { Select } from "../ui/mantine/select";

/**
 * Demo Role Switcher Component
 *
 * This component allows you to switch between different user roles for testing purposes.
 * It should only be used in development mode and removed in production.
 */
export const RoleSwitcher = () => {
  const { user, updateUser, isLoading } = useAuth();

  const roles = [
    { value: UserRole.CLIENT, label: "Client" },
    { value: UserRole.WAREHOUSE_MANAGER, label: "Warehouse Manager" },
    { value: UserRole.TENANT_ADMIN, label: "Tenant Admin" },
    { value: UserRole.FINANCIER, label: "Financier" },
    { value: UserRole.GLOBAL_ADMIN, label: "Global Admin" },
  ];

  const handleRoleChange = (value: string | null) => {
    if (!value || !user) return;

    const newUser = {
      ...user,
      role: value as UserRole,
    };

    updateUser(newUser);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-50 border border-yellow-300 rounded-lg">
        <span className="text-xs font-semibold text-yellow-800">
          Loading...
        </span>
      </div>
    );
  }

  // If no user, don't show the switcher
  if (!user) return null;

  return (
    <Select
      placeholder="Select Role"
      value={user.role}
      onChange={handleRoleChange}
      data={roles}
      classNames={{
        root: "min-w-[180px] ",
        dropdown: "text-black",
      }}
    />
  );
};
