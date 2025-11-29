"use client";

import { TextInput, Menu } from "@mantine/core";
import { SearchNormal1, ArrowDown2, Filter, Add } from "iconsax-reactjs";
import { TenantAdminOverviewCards } from "./overview-cards";
import { RecentActivities } from "./recent-activities";
import { AssignedManagersTable } from "./assigned-managers-table";
import { Button } from "../ui/mantine/button";
import { useDrawerContext } from "../providers/drawer-provider";
import { AddManagerForm } from "../managers/add-manager/add-manager-form";

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
    clients: 350,
    status: "active" as const,
  },
];

export const TenantAdminDashboard = () => {
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
        <h1 className="text-2xl font-bold text-[#101828]">Dashboard</h1>
      </div>

      {/* Overview Section - Cards and Recent Activities */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left side - 4 Cards in 2x2 grid */}
        <div className="col-span-2">
          <TenantAdminOverviewCards />
        </div>

        {/* Right side - Recent Activities */}
        <div className="col-span-1">
          <RecentActivities />
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search warehouse"
          rightSection={<SearchNormal1 size={16} color="#667085" />}
          classNames={{
            root: "w-72",
            input: "!h-10 !rounded-lg border-[#D0D5DD]",
          }}
        />

        <div className="flex items-center gap-3">
          <Menu shadow="md" width="target">
            <Menu.Target>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
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
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#101828]">
            Assigned Managers
          </h2>
          <button className="py-1 px-2 flex items-center justify-center bg-white rounded-lg border border-[#e8e8e8]  cursor-pointer  active:scale-95 transition-transform duration-150">
            <p className="text-sm font-medium text-[#000]"> See All</p>
          </button>
        </div>
        <AssignedManagersTable managers={mockManagers} />
      </div>
    </div>
  );
};
