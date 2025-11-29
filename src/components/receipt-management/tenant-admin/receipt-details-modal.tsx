"use client";

import { Modal } from "@mantine/core";
import { CloseCircle } from "iconsax-reactjs";

type ReceiptDetails = {
  receiptId: string;
  status: "active" | "cancelled" | "pledge" | "trade" | "pending";
  manager: string;
  clientName: string;
  warehouseId: string;
  contact: string;
  commodityType: string;
  quantity: string;
  quality: string;
  weight: string;
  warehouseLocation: string;
  whSection: string;
  dateIssued: string;
};

type ReceiptDetailsModalProps = {
  opened: boolean;
  onClose: () => void;
  receipt: ReceiptDetails | null;
  onApprove: () => void;
  onReject: () => void;
};

const statusStyles = {
  active: {
    color: "#16A34A",
    dotColor: "#16A34A",
  },
  cancelled: {
    color: "#EF4444",
    dotColor: "#EF4444",
  },
  pledge: {
    color: "#F59E0B",
    dotColor: "#F59E0B",
  },
  trade: {
    color: "#4F46E5",
    dotColor: "#4F46E5",
  },
  pending: {
    color: "#F59E0B",
    dotColor: "#F59E0B",
  },
};

export const ReceiptDetailsModal = ({
  opened,
  onClose,
  receipt,
  onApprove,
  onReject,
}: ReceiptDetailsModalProps) => {
  if (!receipt) return null;

  const statusStyle = statusStyles[receipt.status];

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      centered
      size="lg"
      radius="lg"
      padding={0}
    >
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#E5E7EB]">
          <div>
            <h2 className="text-xl font-semibold text-[#101828]">
              Warehouse Receipt Details
            </h2>
            <p className="text-sm text-[#667085]">
              Are you sure you want to delete this post? This action cannot be
              undone.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
          >
            <CloseCircle size={24} color="#EF4444" variant="Bold" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">
          {/* Receipt ID and Status */}
          <div>
            <h3 className="text-lg font-semibold text-[#101828]">
              Receipt ID: {receipt.receiptId}
            </h3>
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: statusStyle.dotColor }}
              />
              <span
                className="text-sm capitalize"
                style={{ color: statusStyle.color }}
              >
                {receipt.status}
              </span>
            </div>
          </div>

          {/* Client Information */}
          <div>
            <h4 className="text-base font-semibold text-[#101828] mb-3">
              Client Information
            </h4>
            <div className="bg-[#F9FAFB] rounded-xl p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Manager
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.manager}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Client Name
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.clientName}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Warehouse ID
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.warehouseId}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Contact
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.contact}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Commodity Information */}
          <div>
            <h4 className="text-base font-semibold text-[#101828] mb-3">
              Commodity information
            </h4>
            <div className="bg-[#F9FAFB] rounded-xl p-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Type
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.commodityType}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Quantity
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.quantity}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Quality
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.quality}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Weight
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.weight}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Storage Information */}
          <div>
            <h4 className="text-base font-semibold text-[#101828] mb-3">
              Storage information
            </h4>
            <div className="bg-[#F9FAFB] rounded-xl p-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Warehouse Location
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.warehouseLocation}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    WH Section
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.whSection}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#667085] uppercase mb-1">
                    Date Issued
                  </p>
                  <p className="text-sm font-medium text-[#101828]">
                    {receipt.dateIssued}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 p-6 pt-0">
          <button
            onClick={onReject}
            className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-[#EF4444] rounded-lg hover:bg-[#DC2626] cursor-pointer"
          >
            Reject receipt
          </button>
          <button
            onClick={onApprove}
            className="flex-1 px-4 py-3 text-sm font-semibold text-white bg-[#16A34A] rounded-lg hover:bg-[#15803D] cursor-pointer"
          >
            Approve receipt
          </button>
        </div>
      </div>
    </Modal>
  );
};
