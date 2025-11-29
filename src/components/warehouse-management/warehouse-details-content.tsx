"use client";

import { useRouter } from "next/navigation";
import { TextInput, Menu } from "@mantine/core";
import {
  SearchNormal1,
  ArrowDown2,
  Filter,
  ArrowRight2,
  Calendar,
} from "iconsax-reactjs";
import { WarehouseDetailsHeader } from "./warehouse-details-header";
import { WarehousePortfolioCards } from "./warehouse-portfolio-cards";
import { WarehouseReceiptsTable } from "./warehouse-receipts-table";

// Mock data
const mockManager = {
  id: "1",
  name: "Mr. Ben",
  phone: "08104444456",
  managerId: "MNG-2025-045",
  warehouse: "Kano Central Depot",
  status: "active" as const,
  residentialAddress: "Lekki, Nigeria",
  lastActivity: "10/26/2025",
};

const mockReceipts = [
  {
    id: "1",
    receiptId: "RCP-001",
    clientName: "Amina Bello",
    commodity: "Maize",
    weight: "5.5 MT",
    depositDate: "2025-01-15",
    storageFee: "₦15,000",
    status: "active" as const,
  },
  {
    id: "2",
    receiptId: "RCP-002",
    clientName: "Emeka Obi",
    commodity: "Rice",
    weight: "10.0 MT",
    depositDate: "2025-01-10",
    storageFee: "₦25,000",
    status: "active" as const,
  },
  {
    id: "3",
    receiptId: "RCP-003",
    clientName: "Fatima Yusuf",
    commodity: "Sorghum",
    weight: "3.2 MT",
    depositDate: "2025-01-08",
    storageFee: "₦8,000",
    status: "released" as const,
  },
  {
    id: "4",
    receiptId: "RCP-004",
    clientName: "Chidi Nnamdi",
    commodity: "Wheat",
    weight: "7.8 MT",
    depositDate: "2025-01-05",
    storageFee: "₦18,000",
    status: "active" as const,
  },
  {
    id: "5",
    receiptId: "RCP-005",
    clientName: "Blessing Eze",
    commodity: "Maize",
    weight: "2.5 MT",
    depositDate: "2024-12-28",
    storageFee: "₦6,000",
    status: "expired" as const,
  },
  {
    id: "6",
    receiptId: "RCP-006",
    clientName: "Tunde Adeyemi",
    commodity: "Soybeans",
    weight: "4.0 MT",
    depositDate: "2024-12-20",
    storageFee: "₦10,000",
    status: "active" as const,
  },
  {
    id: "7",
    receiptId: "RCP-007",
    clientName: "Ngozi Okwu",
    commodity: "Rice",
    weight: "6.5 MT",
    depositDate: "2024-12-15",
    storageFee: "₦16,000",
    status: "released" as const,
  },
  {
    id: "8",
    receiptId: "RCP-008",
    clientName: "Yusuf Mohammed",
    commodity: "Millet",
    weight: "8.0 MT",
    depositDate: "2024-12-10",
    storageFee: "₦20,000",
    status: "active" as const,
  },
];

const mockTransactions = [
  {
    id: "1",
    transactionId: "TXN-001",
    clientName: "Amina Bello",
    type: "deposit" as const,
    amount: "₦150,000",
    date: "2025-01-15",
    status: "completed" as const,
  },
  {
    id: "2",
    transactionId: "TXN-002",
    clientName: "Emeka Obi",
    type: "fee_payment" as const,
    amount: "₦25,000",
    date: "2025-01-14",
    status: "completed" as const,
  },
  {
    id: "3",
    transactionId: "TXN-003",
    clientName: "Fatima Yusuf",
    type: "withdrawal" as const,
    amount: "₦80,000",
    date: "2025-01-12",
    status: "completed" as const,
  },
  {
    id: "4",
    transactionId: "TXN-004",
    clientName: "Chidi Nnamdi",
    type: "deposit" as const,
    amount: "₦200,000",
    date: "2025-01-10",
    status: "pending" as const,
  },
  {
    id: "5",
    transactionId: "TXN-005",
    clientName: "Blessing Eze",
    type: "fee_payment" as const,
    amount: "₦12,000",
    date: "2025-01-08",
    status: "failed" as const,
  },
  {
    id: "6",
    transactionId: "TXN-006",
    clientName: "Tunde Adeyemi",
    type: "deposit" as const,
    amount: "₦95,000",
    date: "2025-01-05",
    status: "completed" as const,
  },
  {
    id: "7",
    transactionId: "TXN-007",
    clientName: "Ngozi Okwu",
    type: "withdrawal" as const,
    amount: "₦175,000",
    date: "2025-01-03",
    status: "completed" as const,
  },
  {
    id: "8",
    transactionId: "TXN-008",
    clientName: "Yusuf Mohammed",
    type: "fee_payment" as const,
    amount: "₦20,000",
    date: "2025-01-01",
    status: "pending" as const,
  },
];

type WarehouseDetailsPageContentProps = {
  id: string;
};

export function WarehouseDetailsPageContent({
  id,
}: WarehouseDetailsPageContentProps) {
  const router = useRouter();

  // You can use the id to fetch warehouse data
  console.log("Warehouse ID:", id);

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-sm">
        <span
          onClick={() => router.push("/warehouse-management")}
          className="text-[#667085] cursor-pointer hover:text-[#101828]"
        >
          Warehouses
        </span>
        <ArrowRight2 size={16} color="#667085" />
        <span className="text-[#101828] font-medium">
          Warehouse Details
        </span>
      </div>

      {/* Manager Header */}
      <WarehouseDetailsHeader manager={mockManager} />

      {/* Portfolio Overview Cards */}
      <WarehousePortfolioCards
        totalClients={23}
        totalCommodity={1000}
        totalReceipts={85}
        totalStorageFee="₦2,500,000"
      />

      {/* Search and Filters Section */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search receipts"
          rightSection={<SearchNormal1 size={16} color="#667085" />}
          classNames={{
            root: "w-80",
            input: "!h-10 !rounded-lg border-[#D0D5DD]",
          }}
        />

        <div className="flex items-center gap-3">
          <Menu shadow="md" width="target">
            <Menu.Target>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
                <Calendar size={16} color="#667085" />
                Last 2 months
                <ArrowDown2 size={16} color="#667085" />
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

          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
            <Filter size={16} color="#667085" />
            Filter
          </button>
        </div>
      </div>

      {/* Receipts and Transactions Table with Tabs */}
      <WarehouseReceiptsTable
        receipts={mockReceipts}
        transactions={mockTransactions}
      />
    </div>
  );
}
