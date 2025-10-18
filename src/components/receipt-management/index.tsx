"use client";

import { StatsCards } from "./stats-cards";
import { SearchTabs } from "./search-tabs";
import { ReceiptMgmntTable } from "./receipt-mgmnt-table";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "iconsax-reactjs";

export const ReceiptManagement = () => {
  const router = useRouter();
  return (
    <div className="flex h-full overflow-auto">
      <div className="flex-1 p-4 bg-white">
        <header className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft size={20} color="#101828" />
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-[#101828]">
                Receipt Management
              </h1>
              <p className="text-sm text-[#667085]">
                View and manage your receipts
              </p>
            </div>
          </div>
        </header>
        <div className=" flex flex-col gap-6">
          <StatsCards />
          <SearchTabs />
          <ReceiptMgmntTable />
        </div>
      </div>
    </div>
  );
};
