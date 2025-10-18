import { Header } from "@/src/components/shared/header";
import { Sidebar } from "@/src/components/shared/sidebar";
import React, { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-start h-[100dvh] w-full flex-1 bg-[#f5f5f6]">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full">
        <Header />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Template;
