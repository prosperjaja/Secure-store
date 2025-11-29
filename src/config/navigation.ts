import { UserRole } from "../types/auth";
import {
  Category2,
  Receipt1,
  Buildings2,
  Wallet,
  WalletRemove,
  ShoppingCart,
  MoneyTime,
  Setting2,
  Chart,
  People,
  Money,
  GlobalEdit,
} from "iconsax-reactjs";

export interface NavItem {
  label: string;
  href: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  children?: NavItem[];
}

/**
 * Navigation items for Client role
 */
export const clientNavigation: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Category2,
  },
  {
    label: "Receipt Management",
    href: "/receipt-management",
    icon: Receipt1,
  },
  {
    label: "Commodity Management",
    href: "/commodity-management",
    icon: Buildings2,
  },
  {
    label: "Take a Loan",
    href: "/loan",
    icon: Wallet,
  },
  {
    label: "Request Withdrawal",
    href: "/request-withdrawal",
    icon: WalletRemove,
  },
  {
    label: "Trade Commodity",
    href: "/trade-commodity",
    icon: ShoppingCart,
  },
  {
    label: "Reports",
    href: null,
    children: [
      {
        label: "Transaction Reports",
        href: "/transaction-reports",
        icon: MoneyTime,
      },
    ],
  },
  {
    label: "Account",
    href: null,
    children: [
      {
        label: "Settings",
        href: "/settings",
        icon: Setting2,
      },
    ],
  },
];

/**
 * Navigation items for Warehouse Manager role
 */
export const warehouseManagerNavigation: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Category2,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: People,
  },
  {
    label: "Commodity Management",
    href: "/commodity-management",
    icon: Buildings2,
  },

  {
    label: "Withdrawal Requests",
    href: "/withdrawal-management",
    icon: WalletRemove,
  },

  {
    label: "Reports",
    href: null,
    children: [
      {
        label: "Transaction Reports",
        href: "/transaction-reports",
        icon: MoneyTime,
      },
    ],
  },
  {
    label: "Account",
    href: null,
    children: [
      {
        label: "Settings",
        href: "/settings",
        icon: Setting2,
      },
    ],
  },
];

/**
 * Navigation items for Tenant Admin role
 */
export const tenantAdminNavigation: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Category2,
  },
  {
    label: "Managers",
    href: "/managers",
    icon: People,
  },
  {
    label: "Warehouse Management",
    href: "/warehouse-management",
    icon: Buildings2,
  },
  {
    label: "Receipt Management",
    href: "/receipt-management",
    icon: Receipt1,
  },

  {
    label: "Reports",
    href: null,
    children: [
      {
        label: "Transaction Reports",
        href: "/transaction-reports",
        icon: MoneyTime,
      },
    ],
  },
  {
    label: "Account",
    href: null,
    children: [
      {
        label: "Settings",
        href: "/settings",
        icon: Setting2,
      },
    ],
  },
];

/**
 * Navigation items for Financier role
 */
export const financierNavigation: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Category2,
  },
  {
    label: "Loan Applications",
    href: "/loan-applications",
    icon: Wallet,
  },
  {
    label: "Active Loans",
    href: "/active-loans",
    icon: Money,
  },
  {
    label: "Collateral Management",
    href: "/collateral",
    icon: Receipt1,
  },
  {
    label: "Reports",
    href: null,
    children: [
      {
        label: "Financial Reports",
        href: "/financial-reports",
        icon: Money,
      },
      {
        label: "Risk Assessment",
        href: "/risk-assessment",
        icon: Chart,
      },
    ],
  },
  {
    label: "Account",
    href: null,
    children: [
      {
        label: "Settings",
        href: "/settings",
        icon: Setting2,
      },
    ],
  },
];

/**
 * Navigation items for Global Admin role
 */
export const globalAdminNavigation: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Category2,
  },
  {
    label: "Tenant Management",
    href: "/tenants",
    icon: GlobalEdit,
  },
  {
    label: "User Management",
    href: "/users",
    icon: People,
  },
  {
    label: "Warehouse Management",
    href: "/warehouses",
    icon: Buildings2,
  },
  {
    label: "System Reports",
    href: null,
    children: [
      {
        label: "Platform Analytics",
        href: "/platform-analytics",
        icon: Chart,
      },
      {
        label: "Financial Overview",
        href: "/financial-overview",
        icon: Money,
      },
    ],
  },
  {
    label: "System Settings",
    href: "/system-settings",
    icon: Setting2,
  },
  {
    label: "Account",
    href: null,
    children: [
      {
        label: "Settings",
        href: "/settings",
        icon: Setting2,
      },
    ],
  },
];

/**
 * Get navigation items based on user role
 */
export function getNavigationForRole(role: UserRole): NavItem[] {
  const navigationMap: Record<UserRole, NavItem[]> = {
    [UserRole.CLIENT]: clientNavigation,
    [UserRole.WAREHOUSE_MANAGER]: warehouseManagerNavigation,
    [UserRole.TENANT_ADMIN]: tenantAdminNavigation,
    [UserRole.FINANCIER]: financierNavigation,
    [UserRole.GLOBAL_ADMIN]: globalAdminNavigation,
  };

  return navigationMap[role] || clientNavigation;
}
