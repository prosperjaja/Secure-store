"use client";

import { MantineProvider } from "@mantine/core";
import DrawerProvider from "./drawer-provider";
import RouteProgress from "./route-progress";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalsProvider } from "@mantine/modals";
import { Toaster } from "sonner";
import { theme } from "../ui/theme";
import { AuthProvider } from "../../contexts/auth-context";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <DrawerProvider>
              <RouteProgress />
              <Toaster visibleToasts={6} theme="dark" position="bottom-right" />
              {children}
            </DrawerProvider>
          </ModalsProvider>
        </MantineProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
