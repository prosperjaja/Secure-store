"use client";

import { useState } from "react";
import { WithdrawalOverviewCards } from "@/src/components/withdrawal-management/overview-cards";
import { WithdrawalRequestsTable } from "@/src/components/withdrawal-management/withdrawal-requests-table";
import { TextInput } from "@mantine/core";
import { SearchNormal1, Filter, ArrowLeft } from "iconsax-reactjs";
import { Button } from "@/src/components/ui/mantine/button";
import { FaDownload } from "react-icons/fa6";
import { useRouter } from "next/navigation";

// Mock data
const mockPendingRequests = [
  {
    id: "1",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Maize",
    quantity: 500,
    netWeight: "0.05mt",
    grade: 1,
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "2",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Shoes",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 2,
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "3",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Maize",
    quantity: 1500,
    netWeight: "0.05mt",
    grade: 1,
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "4",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Maize",
    quantity: 300,
    netWeight: "0.05mt",
    grade: 2,
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "5",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Shoes",
    quantity: 700,
    netWeight: "0.05mt",
    grade: 3,
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "6",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 1,
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "7",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 2,
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "8",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: "C",
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "9",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: "C",
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
  {
    id: "10",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: "C",
    requestDate: "2025-01-01",
    status: "pending" as const,
  },
];

const mockAllRequests = [...mockPendingRequests];
const mockCompletedRequests = [...mockPendingRequests].slice(0, 5);

export default function WithdrawalManagementPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"pending" | "all" | "completed">(
    "all"
  );

  const getCurrentRequests = () => {
    switch (activeTab) {
      case "pending":
        return mockPendingRequests;
      case "all":
        return mockAllRequests;
      case "completed":
        return mockCompletedRequests;
      default:
        return mockPendingRequests;
    }
  };

  const getTabCount = (tab: "pending" | "all" | "completed") => {
    switch (tab) {
      case "pending":
        return mockPendingRequests.length;
      case "all":
        return mockAllRequests.length;
      case "completed":
        return mockCompletedRequests.length;
      default:
        return 0;
    }
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
            Withdrawal Management
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
      <WithdrawalOverviewCards />

      {/* Search and Filters */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search receipt ID, client, or commodity"
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
            All withdrawals
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "pending"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            Pending request receipt
            {activeTab === "pending" && (
              <span className="px-2 py-0.5 bg-[#F2F4F7] text-[#344054] text-xs font-medium rounded-full">
                {getTabCount("pending")}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === "completed"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Table */}
        <WithdrawalRequestsTable requests={getCurrentRequests()} />
      </div>
    </div>
  );
}
