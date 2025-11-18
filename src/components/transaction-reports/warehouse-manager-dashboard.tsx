"use client";

import { useState } from "react";
import { TransactionOverviewCards } from "./overview-cards";
import { TransactionTable } from "./transaction-table";
import { TextInput } from "@mantine/core";
import { SearchNormal1, Filter, ArrowLeft } from "iconsax-reactjs";
import { Button } from "@/src/components/ui/mantine/button";
import { FaDownload } from "react-icons/fa6";
import { useRouter } from "next/navigation";

// Mock data
const mockAllTransactions = [
  {
    id: "1",
    transactionId: "TXN-2025-001",
    status: "success" as const,
    clientName: "Amina Bello",
    date: "2025-01-15",
    type: "deposit" as const,
    commodity: "Maize",
    quantity: "50.5",
    receiptId: "RCP-2025-001",
  },
  {
    id: "2",
    transactionId: "TXN-2025-002",
    status: "pending" as const,
    clientName: "Emeka Obi",
    date: "2025-01-14",
    type: "withdrawal" as const,
    commodity: "Rice",
    quantity: "30.0",
    receiptId: "RCP-2025-002",
  },
  {
    id: "3",
    transactionId: "TXN-2025-003",
    status: "success" as const,
    clientName: "Fatima Yusuf",
    date: "2025-01-13",
    type: "pledge" as const,
    commodity: "Wheat",
    quantity: "45.2",
    receiptId: "RCP-2025-003",
  },
  {
    id: "4",
    transactionId: "TXN-2025-004",
    status: "failed" as const,
    clientName: "Chukwudi Eze",
    date: "2025-01-12",
    type: "deposit" as const,
    commodity: "Sorghum",
    quantity: "25.8",
    receiptId: "RCP-2025-004",
  },
  {
    id: "5",
    transactionId: "TXN-2025-005",
    status: "success" as const,
    clientName: "Aisha Mohammed",
    date: "2025-01-11",
    type: "withdrawal" as const,
    commodity: "Maize",
    quantity: "60.0",
    receiptId: "RCP-2025-005",
  },
  {
    id: "6",
    transactionId: "TXN-2025-006",
    status: "pending" as const,
    clientName: "Oluwaseun Adeyemi",
    date: "2025-01-10",
    type: "pledge" as const,
    commodity: "Rice",
    quantity: "35.5",
    receiptId: "RCP-2025-006",
  },
  {
    id: "7",
    transactionId: "TXN-2025-007",
    status: "success" as const,
    clientName: "Zainab Ibrahim",
    date: "2025-01-09",
    type: "deposit" as const,
    commodity: "Wheat",
    quantity: "40.0",
    receiptId: "RCP-2025-007",
  },
  {
    id: "8",
    transactionId: "TXN-2025-008",
    status: "success" as const,
    clientName: "Nnamdi Okeke",
    date: "2025-01-08",
    type: "withdrawal" as const,
    commodity: "Sorghum",
    quantity: "28.5",
    receiptId: "RCP-2025-008",
  },
  {
    id: "9",
    transactionId: "TXN-2025-009",
    status: "pending" as const,
    clientName: "Hafsat Suleiman",
    date: "2025-01-07",
    type: "deposit" as const,
    commodity: "Maize",
    quantity: "55.0",
    receiptId: "RCP-2025-009",
  },
  {
    id: "10",
    transactionId: "TXN-2025-010",
    status: "success" as const,
    clientName: "Chioma Nwosu",
    date: "2025-01-06",
    type: "pledge" as const,
    commodity: "Rice",
    quantity: "42.8",
    receiptId: "RCP-2025-010",
  },
];

export const WarehouseManagerTransactionDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "all" | "withdrawal" | "pledge" | "deposit"
  >("all");

  const getCurrentTransactions = () => {
    if (activeTab === "all") {
      return mockAllTransactions;
    }
    return mockAllTransactions.filter(
      (transaction) => transaction.type === activeTab
    );
  };

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <header className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeft size={20} color="#101828" />
          </button>
          <h1 className="text-xl font-bold text-[#101828]">
            Transaction Report
          </h1>
        </header>
        <Button
          variant="primary"
          leftSection={<FaDownload color="#fff" size={16} />}
          classNames={{
            root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-9 !px-4",
          }}
        >
          Export
        </Button>
      </div>

      {/* Overview Cards */}
      <TransactionOverviewCards />

      {/* Search and Filters */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search transaction ID, client, or commodity"
          rightSection={<SearchNormal1 size={16} color="#667085" />}
          classNames={{
            root: "flex-1 max-w-md",
            input: "!h-10 !rounded-lg",
          }}
        />

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
            <Filter size={20} color="#667085" />
            Filter
          </button>
        </div>
      </div>

      {/* Tabs and Table */}
      <div className="flex flex-col gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === "all"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            All transactions
          </button>
          <button
            onClick={() => setActiveTab("withdrawal")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === "withdrawal"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            Withdrawal
          </button>
          <button
            onClick={() => setActiveTab("pledge")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === "pledge"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            Pledge
          </button>
          <button
            onClick={() => setActiveTab("deposit")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === "deposit"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            Deposit
          </button>
        </div>

        {/* Table */}
        <TransactionTable transactions={getCurrentTransactions()} />
      </div>
    </div>
  );
};
