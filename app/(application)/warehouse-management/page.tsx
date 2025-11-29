"use client";

import { TextInput, Menu } from "@mantine/core";
import {
  SearchNormal1,
  ArrowDown2,
  Filter,
  Calendar,
  Add,
} from "iconsax-reactjs";
import { WarehouseOverviewCards } from "@/src/components/warehouse-management/overview-cards";
import { WarehousesTable } from "@/src/components/warehouse-management/warehouses-table";
import { useDrawerContext } from "@/src/components/providers/drawer-provider";
import { AddWarehouseForm } from "@/src/components/warehouse-management/add-warehouse/add-warehouse-form";

// Mock data
const mockWarehouses = [
  {
    id: "1",
    warehouseId: "WHS-001",
    manager: "Mr. Ben",
    location: "Kano Central Depot",
    capacity: "500 MT",
    registeredDate: "2025-01-15",
    clients: 23,
    status: "active" as const,
  },
  {
    id: "2",
    warehouseId: "WHS-002",
    manager: "Mrs. Ada",
    location: "Lagos West Terminal",
    capacity: "750 MT",
    registeredDate: "2025-01-10",
    clients: 45,
    status: "active" as const,
  },
  {
    id: "3",
    warehouseId: "WHS-003",
    manager: "Mr. Chidi",
    location: "Abuja North Depot",
    capacity: "300 MT",
    registeredDate: "2025-01-08",
    clients: 18,
    status: "maintenance" as const,
  },
  {
    id: "4",
    warehouseId: "WHS-004",
    manager: "Ms. Fatima",
    location: "Port Harcourt Hub",
    capacity: "600 MT",
    registeredDate: "2025-01-05",
    clients: 32,
    status: "active" as const,
  },
  {
    id: "5",
    warehouseId: "WHS-005",
    manager: "Mr. Emeka",
    location: "Ibadan East Depot",
    capacity: "450 MT",
    registeredDate: "2024-12-28",
    clients: 27,
    status: "inactive" as const,
  },
  {
    id: "6",
    warehouseId: "WHS-006",
    manager: "Mrs. Ngozi",
    location: "Enugu South Terminal",
    capacity: "400 MT",
    registeredDate: "2024-12-20",
    clients: 15,
    status: "active" as const,
  },
  {
    id: "7",
    warehouseId: "WHS-007",
    manager: "Mr. Yusuf",
    location: "Kaduna Central",
    capacity: "550 MT",
    registeredDate: "2024-12-15",
    clients: 38,
    status: "active" as const,
  },
  {
    id: "8",
    warehouseId: "WHS-008",
    manager: "Ms. Blessing",
    location: "Onitsha Market Depot",
    capacity: "350 MT",
    registeredDate: "2024-12-10",
    clients: 21,
    status: "maintenance" as const,
  },
  {
    id: "9",
    warehouseId: "WHS-009",
    manager: "Mr. Tunde",
    location: "Jos Highland Store",
    capacity: "280 MT",
    registeredDate: "2024-12-05",
    clients: 12,
    status: "active" as const,
  },
  {
    id: "10",
    warehouseId: "WHS-010",
    manager: "Mrs. Aisha",
    location: "Sokoto North Depot",
    capacity: "320 MT",
    registeredDate: "2024-12-01",
    clients: 9,
    status: "inactive" as const,
  },
];

export default function WarehouseManagementPage() {
  const { openDrawer, closeDrawer } = useDrawerContext();

  const handleAddNewWarehouse = () => {
    openDrawer({
      component: (
        <AddWarehouseForm
          onClose={closeDrawer}
          onSuccess={() => {
            console.log("Warehouse added successfully!");
          }}
        />
      ),
      size: "45%",
    });
  };

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#101828]">Warehouses</h1>
          <p className="text-sm text-[#667085]">
            Manage and monitor all warehouses in your network
          </p>
        </div>
        <button
          onClick={handleAddNewWarehouse}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
        >
          <Add size={20} color="#FFFFFF" />
          Add New Warehouse
        </button>
      </div>

      {/* Overview Cards */}
      <WarehouseOverviewCards
        totalWarehouses={102}
        totalCapacity={400}
        totalUtilization={20}
      />

      {/* Search and Filters Section */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search warehouses"
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

      {/* Warehouses Table */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[#101828]">All Warehouses</h2>
        <WarehousesTable warehouses={mockWarehouses} />
      </div>
    </div>
  );
}
