"use client";

import { ArrowLeft, Filter, SearchNormal } from "iconsax-reactjs";
import { Button } from "../ui/mantine/button";
import { FaDownload } from "react-icons/fa6";
import { TextInput } from "../ui/mantine/TextInput";
import { TxnReportTable } from "./txn-report-table";
import { TransactionSummaryCards } from "./transaction-summary-cards";
import { TransactionTabs, TransactionType } from "./transaction-tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const TxnReportsSetup = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TransactionType>("all");

  return (
    <div className="flex-1 flex flex-col gap-6 overflow-auto bg-white">
      {/* Page Header */}
      <header className="flex items-center justify-between p-3 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-3">
          <button
            className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeft size={20} color="#101828" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-[#101828]">
              Transaction Reports
            </h1>
            <p className="text-sm text-[#667085]">
              View and export detailed transaction reports
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          leftSection={<FaDownload color="#fff" size={16} />}
          classNames={{
            root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg",
          }}
        >
          Export Data
        </Button>
      </header>

      {/* Reports Section */}
      <div className="flex-1 flex flex-col gap-6 p-4 overflow-auto">
        {/* Summary Cards */}
        <TransactionSummaryCards />

        {/* Tabs and Search Bar */}
        <div className="flex items-center justify-between">
          <TransactionTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="flex items-center gap-3">
            <TextInput
              variant="default"
              placeholder="Search reports"
              rightSection={<SearchNormal size={18} color="#667085" />}
              classNames={{
                input: "!h-10 !w-[280px] !text-sm",
              }}
            />
            <Button
              variant="default"
              classNames={{
                root: "!rounded-lg !border-[#D0D5DD] !h-10",
              }}
              leftSection={<Filter size={18} color="#344054" />}
            >
              Filter
            </Button>
          </div>
        </div>

        {/* Table */}
        <TxnReportTable filterType={activeTab} />
      </div>
    </div>
  );
};
