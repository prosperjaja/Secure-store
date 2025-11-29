"use client";

import { CommodityOverviewCards } from "./overview-cards";
import { RegisteredReceiptsTable } from "./registered-receipts-table";
import { TextInput, Menu } from "@mantine/core";
import { SearchNormal1, ArrowDown2 } from "iconsax-reactjs";
import { Button } from "../ui/mantine/button";
import { useDrawerContext } from "../providers/drawer-provider";
import { DepositCommodityForm } from "../commodity-deposit/deposit-commodity-form";

// Mock data
const mockReceipts = [
  {
    id: "1",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Maize",
    quantity: 500,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "active" as const,
  },
  {
    id: "2",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Shoes",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 2,
    dateIssued: "2025-01-01",
    status: "cancelled" as const,
  },
  {
    id: "3",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Maize",
    quantity: 1500,
    netWeight: "0.05mt",
    grade: 3,
    dateIssued: "2025-01-01",
    status: "active" as const,
  },
  {
    id: "4",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Maize",
    quantity: 300,
    netWeight: "0.05mt",
    grade: 3,
    dateIssued: "2025-01-01",
    status: "pledge" as const,
  },
  {
    id: "5",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Shoes",
    quantity: 700,
    netWeight: "0.05mt",
    grade: 2,
    dateIssued: "2025-01-01",
    status: "active" as const,
  },
  {
    id: "6",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "pledge" as const,
  },
  {
    id: "7",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 3,
    dateIssued: "2025-01-01",
    status: "cancelled" as const,
  },
  {
    id: "8",
    receiptId: "WR-2025-01",
    name: "Emeka Obi",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 2,
    dateIssued: "2025-01-01",
    status: "active" as const,
  },
  {
    id: "9",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "cancelled" as const,
  },
  {
    id: "10",
    receiptId: "WR-2025-01",
    name: "Amina Bello",
    commodity: "Cement",
    quantity: 1000,
    netWeight: "0.05mt",
    grade: 1,
    dateIssued: "2025-01-01",
    status: "pledge" as const,
  },
];

export const WarehouseManagerCommodityDashboard = () => {
  const { openDrawer, closeDrawer } = useDrawerContext();

  const handleNewDeposit = () => {
    openDrawer({
      component: (
        <DepositCommodityForm
          onClose={closeDrawer}
          onSuccess={() => {
            // Optionally refresh the receipts table here
            console.log("Receipt generated successfully!");
          }}
        />
      ),
      size: "70%",
    });
  };

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#101828]">
          Commodity Management
        </h1>
      </div>

      <CommodityOverviewCards />

      <div className="flex items-center justify-between gap-4">
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
              <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
                All Status
                <ArrowDown2 size={16} color="#667085" />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>All Status</Menu.Item>
              <Menu.Item>Active</Menu.Item>
              <Menu.Item>Cancelled</Menu.Item>
              <Menu.Item>Pledge</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Menu shadow="md" width="target">
            <Menu.Target>
              <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD] cursor-pointer bg-white">
                All commodity
                <ArrowDown2 size={16} color="#667085" />
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>All commodity</Menu.Item>
              <Menu.Item>Maize</Menu.Item>
              <Menu.Item>Cement</Menu.Item>
              <Menu.Item>Shoes</Menu.Item>
            </Menu.Dropdown>
          </Menu>

          <Button
            onClick={handleNewDeposit}
            classNames={{
              root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-9 !px-4",
            }}
          >
            + New Deposit
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-[#101828]">
            Registered receipt
          </h2>
          <span className="px-2 py-0.5 bg-[#F2F4F7] text-[#344054] text-xs font-medium rounded-full">
            100
          </span>
        </div>
        <RegisteredReceiptsTable receipts={mockReceipts} />
      </div>
    </div>
  );
};
