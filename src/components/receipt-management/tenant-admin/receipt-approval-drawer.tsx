"use client";

import { CloseCircle } from "iconsax-reactjs";

type PendingReceipt = {
  id: string;
  title: string;
  clientName: string;
  date: string;
};

type ReceiptApprovalDrawerProps = {
  pendingReceipts: PendingReceipt[];
  onClose: () => void;
  onViewReceipt: (receiptId: string) => void;
};

export const ReceiptApprovalDrawer = ({
  pendingReceipts,
  onClose,
  onViewReceipt,
}: ReceiptApprovalDrawerProps) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
        <h2 className="text-xl font-semibold text-[#101828]">Receipt approval</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
        >
          <CloseCircle size={24} color="#EF4444" variant="Bold" />
        </button>
      </div>

      {/* Receipt List */}
      <div className="flex-1 overflow-y-auto">
        {pendingReceipts.map((receipt) => (
          <div
            key={receipt.id}
            className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] hover:bg-[#F9FAFB]"
          >
            <div className="flex flex-col gap-0.5">
              <h3 className="text-base font-medium text-[#101828]">
                {receipt.title}
              </h3>
              <p className="text-sm text-[#667085]">{receipt.clientName}</p>
              <p className="text-sm text-[#667085]">{receipt.date}</p>
            </div>
            <button
              onClick={() => onViewReceipt(receipt.id)}
              className="px-4 py-2 text-sm font-medium text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
            >
              View
            </button>
          </div>
        ))}

        {pendingReceipts.length === 0 && (
          <div className="flex items-center justify-center h-40">
            <p className="text-sm text-[#667085]">No pending receipts</p>
          </div>
        )}
      </div>
    </div>
  );
};
