/**
 * Authentication and Authorization Types
 * Simple role-based system for multi-tenant warehouse management
 */

/**
 * User roles in the system
 */
export enum UserRole {
  CLIENT = "client",
  WAREHOUSE_MANAGER = "warehouse_manager",
  TENANT_ADMIN = "tenant_admin",
  FINANCIER = "financier",
  GLOBAL_ADMIN = "global_admin",
}

/**
 * User interface representing an authenticated user
 */
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  tenantId?: string; // For multi-tenant isolation
  warehouseId?: string; // For warehouse managers
  avatarUrl?: string;
  phoneNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Authentication state
 */
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

/**
 * Login credentials
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Registration data
 */
export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}

/**
 * Authentication response from API
 */
export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

/**
 * Helper function to get user's full name
 */
export function getUserFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

/**
 * Helper function to get role display name
 */
export function getRoleDisplayName(role: UserRole): string {
  const roleNames: Record<UserRole, string> = {
    [UserRole.CLIENT]: "Client/Depositor",
    [UserRole.WAREHOUSE_MANAGER]: "Warehouse Manager",
    [UserRole.TENANT_ADMIN]: "Tenant Administrator",
    [UserRole.FINANCIER]: "Financier",
    [UserRole.GLOBAL_ADMIN]: "Global Administrator",
  };
  return roleNames[role];
}
