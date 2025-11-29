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
import { ManagerDetailsHeader } from "./manager-details-header";
import { ManagerPortfolioCards } from "./manager-portfolio-cards";
import { ManagerClientsTable } from "./manager-clients-table";

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

const mockClients = [
  {
    id: "1",
    clientId: "CLT-001",
    name: "Amina Bello",
    type: "Farmer",
    allReceipts: 3,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "15,000",
    status: "active" as const,
  },
  {
    id: "2",
    clientId: "CLT-002",
    name: "Emeka Obi",
    type: "Trader",
    allReceipts: 5,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "10,000",
    status: "inactive" as const,
  },
  {
    id: "3",
    clientId: "CLT-003",
    name: "Amina Bello",
    type: "Farmer",
    allReceipts: 4,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "10,000",
    status: "active" as const,
  },
  {
    id: "4",
    clientId: "CLT-004",
    name: "Emeka Obi",
    type: "Trader",
    allReceipts: 2,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "10,000",
    status: "inactive" as const,
  },
  {
    id: "5",
    clientId: "CLT-005",
    name: "Emeka Obi",
    type: "Farmer",
    allReceipts: 3,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "15,000",
    status: "active" as const,
  },
  {
    id: "6",
    clientId: "CLT-006",
    name: "Emeka Obi",
    type: "Cement",
    allReceipts: 7,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "2025-01-01",
    status: "inactive" as const,
  },
  {
    id: "7",
    clientId: "CLT-007",
    name: "Emeka Obi",
    type: "Cement",
    allReceipts: 8,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "2025-01-01",
    status: "inactive" as const,
  },
  {
    id: "8",
    clientId: "CLT-008",
    name: "Amina Bello",
    type: "Cement",
    allReceipts: 10,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "2025-01-01",
    status: "active" as const,
  },
  {
    id: "9",
    clientId: "CLT-009",
    name: "Emeka Obi",
    type: "Cement",
    allReceipts: 12,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "2025-01-01",
    status: "inactive" as const,
  },
  {
    id: "10",
    clientId: "CLT-010",
    name: "Amina Bello",
    type: "Cement",
    allReceipts: 13,
    weight: "0.05 MT",
    lastDeposit: "2025-01-01",
    outstandingFee: "2025-01-01",
    status: "inactive" as const,
  },
];

type ManagerDetailsPageContentProps = {
  id: string;
};

export function ManagerDetailsPageContent({
  id,
}: ManagerDetailsPageContentProps) {
  const router = useRouter();

  // You can use the id to fetch manager data
  console.log("Manager ID:", id);

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-sm">
        <span
          onClick={() => router.push("/managers")}
          className="text-[#667085] cursor-pointer hover:text-[#101828]"
        >
          Managers
        </span>
        <ArrowRight2 size={16} color="#667085" />
        <span className="text-[#101828] font-medium">
          Manager&apos;s portfolio
        </span>
      </div>

      {/* Manager Header */}
      <ManagerDetailsHeader manager={mockManager} />

      {/* Portfolio Overview Cards */}
      <ManagerPortfolioCards
        totalClients={23}
        activeClients={85}
        totalCommoditiesStored={1000}
      />

      {/* Search and Filters Section */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search clients"
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

      {/* Registered Clients Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[#101828]">
          Registered clients
        </h2>
        <ManagerClientsTable clients={mockClients} id={id} />
      </div>
    </div>
  );
}
