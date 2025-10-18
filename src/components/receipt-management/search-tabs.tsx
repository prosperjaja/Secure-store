"use client";

import { useState } from "react";

export const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "active" | "cancelled" | "lien"
  >("all");

  return (
    <div className="flex items-center  justify-between gap-4 w-full">
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === "all"
              ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
              : "bg-transparent text-[#667085]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("active")}
          className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === "active"
              ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
              : "bg-transparent text-[#667085]"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveTab("cancelled")}
          className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === "cancelled"
              ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
              : "bg-transparent text-[#667085]"
          }`}
        >
          Cancelled
        </button>
        <button
          onClick={() => setActiveTab("lien")}
          className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === "lien"
              ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
              : "bg-transparent text-[#667085]"
          }`}
        >
          Lien
        </button>
      </div>
    </div>
  );
};
