"use client";

import { ClientsOverviewCards } from "@/src/components/clients-dashboard/overview-cards";
import { RegisteredClientsTable } from "@/src/components/clients-dashboard/registered-clients-table";
import { TextInput, Menu } from "@mantine/core";
import { SearchNormal1, ArrowDown2, ArrowLeft } from "iconsax-reactjs";
import { Button } from "@/src/components/ui/mantine/button";
import { useDrawerContext } from "@/src/components/providers/drawer-provider";
import { RegisterClientForm } from "@/src/components/warehouse-manager-dashboard/register-client-form";
import { useRouter } from "next/navigation";

// Mock data - replace with actual API call
const mockClients = [
  {
    id: "1",
    clientId: "CLT-001",
    name: "Amina Bello",
    type: "Farmer",
    allReceipts: 3,
    lastDeposit: "2025-01-01",
    outstandingFee: 15000,
    status: "active" as const,
  },
  {
    id: "2",
    clientId: "CLT-002",
    name: "Emeka Obi",
    type: "Trader",
    allReceipts: 5,
    lastDeposit: "2025-01-01",
    outstandingFee: 10000,
    status: "inactive" as const,
  },
  {
    id: "3",
    clientId: "CLT-003",
    name: "Amina Bello",
    type: "Farmer",
    allReceipts: 4,
    lastDeposit: "2025-01-01",
    outstandingFee: 10000,
    status: "active" as const,
  },
  {
    id: "4",
    clientId: "CLT-004",
    name: "Emeka Obi",
    type: "Trader",
    allReceipts: 2,
    lastDeposit: "2025-01-01",
    outstandingFee: 10000,
    status: "inactive" as const,
  },
  {
    id: "5",
    clientId: "CLT-005",
    name: "Emeka Obi",
    type: "Farmer",
    allReceipts: 3,
    lastDeposit: "2025-01-01",
    outstandingFee: 15000,
    status: "active" as const,
  },
  {
    id: "6",
    clientId: "CLT-006",
    name: "Cement",
    type: "Cement",
    allReceipts: 1000,
    lastDeposit: "2025-01-01",
    outstandingFee: 2025,
    status: "inactive" as const,
  },
  {
    id: "7",
    clientId: "CLT-007",
    name: "Cement",
    type: "Cement",
    allReceipts: 1000,
    lastDeposit: "2025-01-01",
    outstandingFee: 2025,
    status: "inactive" as const,
  },
  {
    id: "8",
    clientId: "CLT-008",
    name: "Cement",
    type: "Cement",
    allReceipts: 1000,
    lastDeposit: "2025-01-01",
    outstandingFee: 2025,
    status: "active" as const,
  },
  {
    id: "9",
    clientId: "CLT-009",
    name: "Cement",
    type: "Cement",
    allReceipts: 1000,
    lastDeposit: "2025-01-01",
    outstandingFee: 2025,
    status: "inactive" as const,
  },
  {
    id: "10",
    clientId: "CLT-010",
    name: "Cement",
    type: "Cement",
    allReceipts: 1000,
    lastDeposit: "2025-01-01",
    outstandingFee: 2025,
    status: "inactive" as const,
  },
];

export default function ClientsPage() {
  const { openDrawer } = useDrawerContext();
  const router = useRouter();
  const handleAddClient = () => {
    openDrawer({
      component: <RegisterClientForm />,
      size: "60%",
    });
  };

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      {/* Page Header */}
      <div className="flex items-center gap-2">
        <button
          className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeft size={20} color="#101828" />
        </button>
        <h1 className="text-xl font-bold text-[#101828]">Clients</h1>
      </div>

      {/* Overview Cards */}
      <ClientsOverviewCards />

      {/* Search and Filters */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search clients"
          rightSection={<SearchNormal1 size={16} color="#667085" />}
          classNames={{
            root: "w-80",
            input: "!h-10 !rounded-lg",
          }}
        />

        <div className="flex items-center gap-3">
          <Menu shadow="md" width="target">
            <Menu.Target>
              <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
                All Status
                <ArrowDown2 size={16} color="#667085" />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>All Status</Menu.Item>
              <Menu.Item>Active</Menu.Item>
              <Menu.Item>Inactive</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu shadow="md" width="target">
            <Menu.Target>
              <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
                All Clients type
                <ArrowDown2 size={16} color="#667085" />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>All Clients type</Menu.Item>
              <Menu.Item>Farmer</Menu.Item>
              <Menu.Item>Trader</Menu.Item>
              <Menu.Item>Processor</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Button
            onClick={handleAddClient}
            classNames={{
              root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-9 !px-4",
            }}
          >
            + Add Clients
          </Button>
        </div>
      </div>

      {/* Registered Clients Table */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[#101828]">
          Registered clients
        </h2>
        <RegisteredClientsTable clients={mockClients} />
      </div>
    </div>
  );
}
