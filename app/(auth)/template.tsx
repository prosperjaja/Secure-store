import React, { ReactNode } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center h-[100dvh] overflow-auto w-full flex-1">
      {children}
    </div>
  );
};

export default Template;
