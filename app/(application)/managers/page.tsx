"use client";

import { TextInput, Menu } from "@mantine/core";
import {
  SearchNormal1,
  ArrowDown2,
  Filter,
  Add,
  Calendar,
} from "iconsax-reactjs";
import { ManagersOverviewCards } from "@/src/components/managers/overview-cards";
import { ManagersTable } from "@/src/components/managers/managers-table";
import { Button } from "@/src/components/ui/mantine/button";
import { useDrawerContext } from "@/src/components/providers/drawer-provider";
import { AddManagerForm } from "@/src/components/managers/add-manager/add-manager-form";

// Mock data for managers
const mockManagers = [
  {
    id: "1",
    managerId: "WH-001",
    name: "Amina Bello",
    assignedWarehouse: "Kano Central Depot",
    capacity: "3100 MT / 3,800 MT",
    dateAssigned: "2025-01-01",
    clients: 250,
    status: "active" as const,
  },
  {
    id: "2",
    managerId: "WH-002",
    name: "Emeka Obi",
    assignedWarehouse: "Kano Central Depot",
    capacity: "1100 MT / 1500 MT",
    dateAssigned: "2025-01-01",
    clients: 300,
    status: "inactive" as const,
  },
  {
    id: "3",
    managerId: "WH-003",
    name: "Amina Bello",
    assignedWarehouse: "Kano Central Depot",
    capacity: "900 MT / 1,000 MT",
    dateAssigned: "2025-01-01",
    clients: 400,
    status: "active" as const,
  },
  {
    id: "4",
    managerId: "WH-004",
    name: "Emeka Obi",
    assignedWarehouse: "Kano Central Depot",
    capacity: "100 MT / 500 MT",
    dateAssigned: "2025-01-01",
    clients: 1000,
    status: "suspended" as const,
  },
  {
    id: "5",
    managerId: "WH-005",
    name: "Emeka Obi",
    assignedWarehouse: "Kano Central Depot",
    capacity: "3,800 MT",
    dateAssigned: "2025-01-01",
    clients: 900,
    status: "active" as const,
  },
  {
    id: "6",
    managerId: "WH-006",
    name: "Amina Bello",
    assignedWarehouse: "Kano Central Depot",
    capacity: "2000 MT",
    dateAssigned: "2025-01-01",
    clients: 200,
    status: "inactive" as const,
  },
  {
    id: "7",
    managerId: "WH-007",
    name: "Amina Bello",
    assignedWarehouse: "Kano Central Depot",
    capacity: "1,000 MT",
    dateAssigned: "2025-01-01",
    clients: 300,
    status: "suspended" as const,
  },
  {
    id: "8",
    managerId: "WH-008",
    name: "Emeka Obi",
    assignedWarehouse: "Kano Central Depot",
    capacity: "600 MT",
    dateAssigned: "2025-01-01",
    clients: 400,
    status: "active" as const,
  },
  {
    id: "9",
    managerId: "WH-009",
    name: "Amina Bello",
    assignedWarehouse: "Kano Central Depot",
    capacity: "3,800 MT",
    dateAssigned: "2025-01-01",
    clients: 500,
    status: "inactive" as const,
  },
  {
    id: "10",
    managerId: "WH-010",
    name: "Emeka Obi",
    assignedWarehouse: "Kano Central Depot",
    capacity: "1,000 MT",
    dateAssigned: "2025-01-01",
    clients: 600,
    status: "active" as const,
  },
];

export default function ManagersPage() {
  const { openDrawer, closeDrawer } = useDrawerContext();

  const handleAddNewManager = () => {
    openDrawer({
      component: (
        <AddManagerForm
          onClose={closeDrawer}
          onSuccess={() => {
            console.log("Manager added successfully!");
          }}
        />
      ),
      size: "70%",
    });
  };

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#101828]">Managers</h1>
      </div>

      {/* Overview Cards */}
      <ManagersOverviewCards />

      {/* Search and Filters Section */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search warehouse"
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

          <Button
            onClick={handleAddNewManager}
            leftSection={<Add size={16} color="#fff" />}
            classNames={{
              root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-10 !px-4",
            }}
          >
            Add New Managers
          </Button>
        </div>
      </div>

      {/* Assigned Managers Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[#101828]">
          Assigned Managers
        </h2>
        <ManagersTable managers={mockManagers} />
      </div>
    </div>
  );
}
