"use client";

import { useState } from "react";
import { ClientHeader } from "@/src/components/client-details/client-header";
import { ClientOverviewCards } from "@/src/components/client-details/client-overview-cards";
import { TransactionTable } from "@/src/components/client-details/transaction-table";
import { ReceiptsTable } from "@/src/components/client-details/receipts-table";
import { TextInput, Menu } from "@mantine/core";
import { SearchNormal1, Calendar, Filter } from "iconsax-reactjs";
import { ClientDetails, Transaction } from "@/src/types/transaction";
import { Receipt } from "@/src/types/receipt";

// Mock data - replace with actual API call
const mockClient: ClientDetails = {
  id: "1",
  name: "Amina Bello",
  status: "active",
  phoneNumber: "08104444456",
  clientId: "CLT-2025-045",
  occupation: "Farmer",
  lastActivity: "10/26/2025",
  residentialAddress: "Lekki, Nigeria",
  activeReceipt: 102,
  totalReceipt: 255,
  underLien: 23,
  cancelled: 15,
};

const mockTransactions: Transaction[] = [
  {
    id: "TNX-2025-01",
    status: "success",
    dateIssued: "2025-01-01",
    type: "withdrawal",
    commodity: "Dangote",
    quantity: "0.05mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "success",
    dateIssued: "2025-01-01",
    type: "pledge",
    commodity: "Dangote",
    quantity: "0.05mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "failed",
    dateIssued: "2025-01-01",
    type: "lien",
    commodity: "Dangote",
    quantity: "0.1mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "pending",
    dateIssued: "2025-01-01",
    type: "withdrawal",
    commodity: "Dangote",
    quantity: "0.05mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "success",
    dateIssued: "2025-01-01",
    type: "lien",
    commodity: "Dangote",
    quantity: "0.2mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "pending",
    dateIssued: "2025-01-01",
    type: "pledge",
    commodity: "Dangote",
    quantity: "0.2mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "success",
    dateIssued: "2025-01-01",
    type: "deposit",
    commodity: "Dangote",
    quantity: "0.2mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "failed",
    dateIssued: "2025-01-01",
    type: "pledge",
    commodity: "Dangote",
    quantity: "0.2mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "success",
    dateIssued: "2025-01-01",
    type: "deposit",
    commodity: "Dangote",
    quantity: "0.2mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
  {
    id: "TNX-2025-01",
    status: "pending",
    dateIssued: "2025-01-01",
    type: "pledge",
    commodity: "Dangote",
    quantity: "0.2mt",
    receiptId: "WR-2025-01",
    amount: "25,000",
  },
];

const mockReceipts: Receipt[] = [
  {
    id: "WR-2025-01",
    commodity: "Maize",
    quantity: 500,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "active",
  },
  {
    id: "WR-2025-01",
    commodity: "Shoes",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 2,
    dateIssued: "2025-01-01",
    status: "cancelled",
  },
  {
    id: "WR-2025-01",
    commodity: "Maize",
    quantity: 1500,
    netWeight: "0.05mt",
    grade: 3,
    dateIssued: "2025-01-01",
    status: "pledge",
  },
  {
    id: "WR-2025-01",
    commodity: "Maize",
    quantity: 300,
    netWeight: "0.05mt",
    grade: 3,
    dateIssued: "2025-01-01",
    status: "trade",
  },
  {
    id: "WR-2025-01",
    commodity: "Shoes",
    quantity: 700,
    netWeight: "0.05mt",
    grade: 2,
    dateIssued: "2025-01-01",
    status: "active",
  },
  {
    id: "WR-2025-01",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "pledge",
  },
  {
    id: "WR-2025-01",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 3,
    dateIssued: "2025-01-01",
    status: "cancelled",
  },
  {
    id: "WR-2025-01",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 2,
    dateIssued: "2025-01-01",
    status: "active",
  },
  {
    id: "WR-2025-01",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "cancelled",
  },
  {
    id: "WR-2025-01",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "pledge",
  },
];

export default async function ClientDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ClientDetailsPageContent id={id} />;
}

function ClientDetailsPageContent({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState<"receipts" | "transactions">(
    "receipts"
  );

  console.log(id);

  return (
    <div className="flex flex-col p-6 gap-4 ">
      {/* Client Header */}
      <ClientHeader client={mockClient} />

      {/* Overview Cards */}
      <ClientOverviewCards
        activeReceipt={mockClient.activeReceipt}
        totalReceipt={mockClient.totalReceipt}
        underLien={mockClient.underLien}
        cancelled={mockClient.cancelled}
      />

      {/* Container with white background and border radius */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        {/* Search and Filters */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <TextInput
            placeholder="Search receipt"
            rightSection={<SearchNormal1 size={16} color="#667085" />}
            classNames={{
              root: "w-80",
              input: "!h-10 !rounded-lg",
            }}
          />

          <div className="flex items-center gap-3">
            <Menu shadow="md" width="target">
              <Menu.Target>
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer">
                  <Calendar size={20} color="#667085" />
                  Last 2 months
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#667085"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Last 7 days</Menu.Item>
                <Menu.Item>Last month</Menu.Item>
                <Menu.Item>Last 2 months</Menu.Item>
                <Menu.Item>Last 6 months</Menu.Item>
                <Menu.Item>Last year</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <button className="flex items-center gap-2 px-3 py-1.5 cursor-pointer text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD]">
              <Filter size={20} color="#667085" />
              Filter
            </button>
          </div>
        </div>

        {/* Tabs - matching receipt management style */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 mb-6 w-fit">
          <button
            onClick={() => setActiveTab("receipts")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === "receipts"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            Registered receipt
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
              activeTab === "transactions"
                ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
                : "bg-transparent text-[#667085]"
            }`}
          >
            Transaction report
          </button>
        </div>

        {/* Table Content */}
        {activeTab === "transactions" && (
          <TransactionTable transactions={mockTransactions} />
        )}

        {activeTab === "receipts" && <ReceiptsTable receipts={mockReceipts} />}
      </div>
    </div>
  );
}
