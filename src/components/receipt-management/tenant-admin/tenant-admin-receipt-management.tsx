"use client";

import { useState } from "react";
import { TextInput, Menu } from "@mantine/core";
import {
  SearchNormal1,
  ArrowDown2,
  Filter,
  Calendar,
  ArrowLeft,
} from "iconsax-reactjs";
import { ReceiptOverviewCards } from "./receipt-overview-cards";
import { ReceiptTable, Receipt } from "./receipt-table";
import { ReceiptApprovalDrawer } from "./receipt-approval-drawer";
import { ReceiptDetailsModal } from "./receipt-details-modal";
import { useDrawerContext } from "@/src/components/providers/drawer-provider";
import { useRouter } from "next/navigation";

// Mock data for receipts
const mockReceipts: Receipt[] = [
  {
    id: "1",
    warehouseId: "WH-001",
    manager: "Mr Ben",
    client: "Amina Bello",
    clientId: "CLT-001",
    receiptId: "WR-2025-01",
    status: "active",
    commodityType: "Maize",
    quantity: "500 bags",
    quality: "Grade 1",
    weight: "0.05MT",
    warehouseLocation: "Lagos State Warehouse",
    whSection: "Section A-12",
    dateIssued: "2025-01-01",
    contact: "08135677188",
  },
  {
    id: "2",
    warehouseId: "WH-002",
    manager: "Mr Ben",
    client: "Emeka Obi",
    clientId: "CLT-002",
    receiptId: "WR-2025-01",
    status: "cancelled",
    commodityType: "Rice",
    quantity: "300 bags",
    quality: "Grade 2",
    weight: "0.03MT",
    warehouseLocation: "Kano Central Depot",
    whSection: "Section B-05",
    dateIssued: "2025-01-02",
    contact: "08123456789",
  },
  {
    id: "3",
    warehouseId: "WH-003",
    manager: "Mr Ben",
    client: "Amina Bello",
    clientId: "CLT-003",
    receiptId: "WR-2025-01",
    status: "pledge",
    commodityType: "Sorghum",
    quantity: "200 bags",
    quality: "Grade 1",
    weight: "0.02MT",
    warehouseLocation: "Abuja North Depot",
    whSection: "Section C-08",
    dateIssued: "2025-01-03",
    contact: "08198765432",
  },
  {
    id: "4",
    warehouseId: "WH-004",
    manager: "Mr Ben",
    client: "Emeka Obi",
    clientId: "CLT-004",
    receiptId: "WR-2025-01",
    status: "trade",
    commodityType: "Wheat",
    quantity: "400 bags",
    quality: "Grade 1",
    weight: "0.04MT",
    warehouseLocation: "Port Harcourt Hub",
    whSection: "Section D-03",
    dateIssued: "2025-01-04",
    contact: "08111222333",
  },
  {
    id: "5",
    warehouseId: "WH-005",
    manager: "Mr Ben",
    client: "Emeka Obi",
    clientId: "CLT-005",
    receiptId: "WR-2025-01",
    status: "active",
    commodityType: "Maize",
    quantity: "600 bags",
    quality: "Grade 2",
    weight: "0.06MT",
    warehouseLocation: "Ibadan East Depot",
    whSection: "Section E-11",
    dateIssued: "2025-01-05",
    contact: "08144555666",
  },
  {
    id: "6",
    warehouseId: "WH-006",
    manager: "Mr Ben",
    client: "Amina Bello",
    clientId: "CLT-006",
    receiptId: "WR-2025-01",
    status: "pledge",
    commodityType: "Rice",
    quantity: "350 bags",
    quality: "Grade 1",
    weight: "0.035MT",
    warehouseLocation: "Enugu South Terminal",
    whSection: "Section F-07",
    dateIssued: "2025-01-06",
    contact: "08177888999",
  },
  {
    id: "7",
    warehouseId: "WH-007",
    manager: "Mr Ben",
    client: "Amina Bello",
    clientId: "CLT-007",
    receiptId: "WR-2025-01",
    status: "cancelled",
    commodityType: "Sorghum",
    quantity: "250 bags",
    quality: "Grade 2",
    weight: "0.025MT",
    warehouseLocation: "Kaduna Central",
    whSection: "Section G-14",
    dateIssued: "2025-01-07",
    contact: "08100111222",
  },
  {
    id: "8",
    warehouseId: "WH-008",
    manager: "Mr Ben",
    client: "Emeka Obi",
    clientId: "CLT-008",
    receiptId: "WR-2025-01",
    status: "active",
    commodityType: "Wheat",
    quantity: "450 bags",
    quality: "Grade 1",
    weight: "0.045MT",
    warehouseLocation: "Onitsha Market Depot",
    whSection: "Section H-02",
    dateIssued: "2025-01-08",
    contact: "08133444555",
  },
  {
    id: "9",
    warehouseId: "WH-009",
    manager: "Mr Ben",
    client: "Amina Bello",
    clientId: "CLT-009",
    receiptId: "WR-2025-01",
    status: "cancelled",
    commodityType: "Maize",
    quantity: "550 bags",
    quality: "Grade 1",
    weight: "0.055MT",
    warehouseLocation: "Jos Highland Store",
    whSection: "Section I-09",
    dateIssued: "2025-01-09",
    contact: "08166777888",
  },
  {
    id: "10",
    warehouseId: "WH-010",
    manager: "Mr Ben",
    client: "Emeka Obi",
    clientId: "CLT-010",
    receiptId: "WR-2025-01",
    status: "pledge",
    commodityType: "Rice",
    quantity: "380 bags",
    quality: "Grade 2",
    weight: "0.038MT",
    warehouseLocation: "Sokoto North Depot",
    whSection: "Section J-16",
    dateIssued: "2025-01-10",
    contact: "08199000111",
  },
];

// Mock data for pending receipts (for the approval drawer)
const mockPendingReceipts = [
  {
    id: "1",
    title: "Maize withdrawal request",
    clientName: "John Smith",
    date: "2 Nov, 2005",
  },
  {
    id: "2",
    title: "Maize withdrawal request",
    clientName: "John Smith",
    date: "2 Nov, 2005",
  },
  {
    id: "3",
    title: "Maize withdrawal request",
    clientName: "John Smith",
    date: "2 Nov, 2005",
  },
  {
    id: "4",
    title: "Maize withdrawal request",
    clientName: "John Smith",
    date: "2 Nov, 2005",
  },
  {
    id: "5",
    title: "Maize withdrawal request",
    clientName: "John Smith",
    date: "2 Nov, 2005",
  },
];

export const TenantAdminReceiptManagement = () => {
  const { openDrawer, closeDrawer } = useDrawerContext();
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const handleActionNeeded = () => {
    openDrawer({
      component: (
        <ReceiptApprovalDrawer
          pendingReceipts={mockPendingReceipts}
          onClose={closeDrawer}
          onViewReceipt={handleViewPendingReceipt}
        />
      ),
      size: "500px",
    });
  };

  const handleViewPendingReceipt = (receiptId: string) => {
    // Find the receipt and show details modal
    const receipt = mockReceipts.find((r) => r.id === receiptId);
    if (receipt) {
      setSelectedReceipt(receipt);
      setIsModalOpen(true);
    } else {
      // If not found in main receipts, create a mock one for the pending receipt
      const pendingReceipt = mockPendingReceipts.find(
        (r) => r.id === receiptId
      );
      if (pendingReceipt) {
        setSelectedReceipt({
          id: receiptId,
          warehouseId: "500 tons",
          manager: "Mr Ben",
          client: "Amina Bello",
          clientId: "CLT-001",
          receiptId: "WR-2025-01",
          status: "active",
          commodityType: "Maize",
          quantity: "500 bags",
          quality: "Grade 1",
          weight: "0.05MT",
          warehouseLocation: "Lagos State Warehouse",
          whSection: "Section A-12",
          dateIssued: "2025-01-01",
          contact: "08135677188",
        });
        setIsModalOpen(true);
      }
    }
  };

  const handleViewReceipt = (receipt: Receipt) => {
    setSelectedReceipt(receipt);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReceipt(null);
  };

  const handleApproveReceipt = () => {
    console.log("Approving receipt:", selectedReceipt?.receiptId);
    handleCloseModal();
    closeDrawer();
  };

  const handleRejectReceipt = () => {
    console.log("Rejecting receipt:", selectedReceipt?.receiptId);
    handleCloseModal();
    closeDrawer();
  };

  const pendingCount = mockPendingReceipts.length;

  return (
    <div className="flex flex-col h-full p-6 gap-6 overflow-auto bg-[#F9FAFB]">
      <header className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <button
            className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowLeft size={20} color="#101828" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-[#101828]">
              Receipt Management
            </h1>
            <p className="text-sm text-[#667085]">
              View and manage your receipts
            </p>
          </div>
        </div>
      </header>
      {/* Overview Cards */}
      <ReceiptOverviewCards
        totalReceipts={102}
        activeReceipts={100}
        approvedReceipts={2}
        rejectedReceipts={2}
      />

      {/* Search and Filters Section */}
      <div className="flex items-center justify-between gap-4">
        <TextInput
          placeholder="Search warehouse"
          leftSection={<SearchNormal1 size={16} color="#667085" />}
          classNames={{
            root: "w-80",
            input: "!h-10 !rounded-lg border-[#D0D5DD] !pl-10",
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

          <button
            onClick={handleActionNeeded}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
          >
            Action needed
            <span className="flex items-center justify-center w-5 h-5 bg-white/20 rounded-full text-xs">
              {pendingCount}
            </span>
          </button>
        </div>
      </div>

      {/* Receipt Table */}
      <ReceiptTable receipts={mockReceipts} onViewReceipt={handleViewReceipt} />

      {/* Receipt Details Modal */}
      <ReceiptDetailsModal
        opened={isModalOpen}
        onClose={handleCloseModal}
        receipt={
          selectedReceipt
            ? {
                receiptId: selectedReceipt.receiptId,
                status: selectedReceipt.status,
                manager: selectedReceipt.manager,
                clientName: selectedReceipt.client,
                warehouseId: selectedReceipt.warehouseId,
                contact: selectedReceipt.contact,
                commodityType: selectedReceipt.commodityType,
                quantity: selectedReceipt.quantity,
                quality: selectedReceipt.quality,
                weight: selectedReceipt.weight,
                warehouseLocation: selectedReceipt.warehouseLocation,
                whSection: selectedReceipt.whSection,
                dateIssued: selectedReceipt.dateIssued,
              }
            : null
        }
        onApprove={handleApproveReceipt}
        onReject={handleRejectReceipt}
      />
    </div>
  );
};
