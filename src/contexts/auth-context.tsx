"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  User,
  UserRole,
  AuthState,
  LoginCredentials,
  RegisterData,
} from "../types/auth";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
          const user = JSON.parse(storedUser) as User;
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          // Create a default demo user for testing
          const defaultUser: User = {
            id: "demo-user-1",
            email: "demo@securestore.com",
            firstName: "John",
            lastName: "Doe",
            role: UserRole.CLIENT,
            tenantId: "tenant-1",
          };

          // Store in localStorage
          localStorage.setItem("user", JSON.stringify(defaultUser));
          localStorage.setItem("token", "demo-token-123");

          setAuthState({
            user: defaultUser,
            isAuthenticated: true,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error("Error loading user from localStorage:", error);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    loadUser();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/auth/login', credentials);
      // const { user, token } = response.data;

      // For now, mock login based on email domain or use a demo user
      const mockUser: User = {
        id: "1",
        email: credentials.email,
        firstName: "John",
        lastName: "Doe",
        role: UserRole.CLIENT, // Default role
        tenantId: "tenant-1",
      };

      // Store user and token in localStorage
      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", "mock-token-123");

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (data: RegisterData) => {
    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/auth/register', data);
      // const { user, token } = response.data;

      const mockUser: User = {
        id: "1",
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: UserRole.CLIENT,
        tenantId: "tenant-1",
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", "mock-token-123");

      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const updateUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setAuthState({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
