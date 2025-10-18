"use client";

import { Button } from "../ui/mantine/button";
import { useState } from "react";
import clsx from "clsx";

const commodities = [
  "Maize",
  "Cement",
  "Ironrods",
  "tanks",
  "Doors",
  "Bag of rice",
];

export interface Receipt {
  id: string;
  status: string;
  commodity: string;
  grade: string;
  quantity: string;
  storageInfo: string;
  warehouse: string;
  depositDate: string;
  expiryDate: string;
}

const receiptsData: Record<string, Receipt[]> = {
  Maize: [
    {
      id: "WR-2025-01",
      status: "Active",
      commodity: "Maize",
      grade: "Grade A",
      quantity: "100 (MT)",
      storageInfo: "Funtua Grain Storage",
      warehouse: "WAREHOUSE-LOCATION",
      depositDate: "DD-MM-YYYY",
      expiryDate: "2025-01-01",
    },
    {
      id: "WR-2025-02",
      status: "Active",
      commodity: "Maize",
      grade: "Grade A",
      quantity: "100 (MT)",
      storageInfo: "Lagos Grain Warehouse",
      warehouse: "WAREHOUSE-LOCATION",
      depositDate: "DD-MM-YYYY",
      expiryDate: "2025-01-01",
    },
    {
      id: "WR-2025-03",
      status: "Active",
      commodity: "Maize",
      grade: "Grade A",
      quantity: "100 (MT)",
      storageInfo: "Funtua Grain Storage",
      warehouse: "WAREHOUSE-LOCATION",
      depositDate: "DD-MM-YYYY",
      expiryDate: "2025-01-01",
    },
  ],
  Cement: [
    {
      id: "WR-2025-04",
      status: "Active",
      commodity: "Cement",
      grade: "Grade A",
      quantity: "200 (Bags)",
      storageInfo: "Lagos Warehouse",
      warehouse: "WAREHOUSE-LOCATION",
      depositDate: "DD-MM-YYYY",
      expiryDate: "2025-01-01",
    },
  ],
  Ironrods: [],
  tanks: [],
  Doors: [],
  "Bag of rice": [],
};

interface Step2Props {
  onNext: (selectedReceipts: Receipt[]) => void;
  onBack: () => void;
  selectedReceipts?: Receipt[];
}

export const Step2SelectReceipts = ({
  onNext,
  onBack,
  selectedReceipts: initialSelection = [],
}: Step2Props) => {
  const [selectedCommodity, setSelectedCommodity] = useState("Maize");
  const [selectedReceipts, setSelectedReceipts] =
    useState<Receipt[]>(initialSelection);

  const toggleReceipt = (receipt: Receipt) => {
    setSelectedReceipts((prev) => {
      const isSelected = prev.some((r) => r.id === receipt.id);
      if (isSelected) {
        return prev.filter((r) => r.id !== receipt.id);
      } else {
        return [...prev, receipt];
      }
    });
  };

  const isReceiptSelected = (receiptId: string) => {
    return selectedReceipts.some((r) => r.id === receiptId);
  };

  const receipts = receiptsData[selectedCommodity] || [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-[#101828]">
            Select Receipts to Pledge
          </h2>
        </div>
      </div>

      {/* Commodity Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E5E7EB]">
        {commodities.map((commodity) => (
          <button
            key={commodity}
            onClick={() => setSelectedCommodity(commodity)}
            className={clsx(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
              selectedCommodity === commodity
                ? "border-[#4F46E5] text-[#4F46E5]"
                : "border-transparent text-[#667085] hover:text-[#101828]"
            )}
          >
            {commodity}
          </button>
        ))}
      </div>

      {/* Receipts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {receipts.map((receipt, idx) => (
          <div
            key={idx}
            className={clsx(
              "border-2 rounded-xl p-5 flex flex-col gap-3 transition-all cursor-pointer hover:shadow-md",
              isReceiptSelected(receipt.id)
                ? "border-[#4F46E5] bg-[#F5F5FF]"
                : "border-[#E5E7EB] bg-white"
            )}
            onClick={() => toggleReceipt(receipt)}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-[#101828]">
                  Receipt ID: {receipt.id}
                </span>
                <span
                  className={clsx(
                    "w-fit px-2.5 py-1 rounded-full text-xs font-medium",
                    "bg-[#ECFDF3] text-[#12B76A]"
                  )}
                >
                  {receipt.status}
                </span>
              </div>
              <input
                type="checkbox"
                checked={isReceiptSelected(receipt.id)}
                onChange={() => toggleReceipt(receipt)}
                className="w-5 h-5 text-[#4F46E5] cursor-pointer rounded"
              />
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-dashed border-[#E5E7EB]">
              <div className="text-xs text-[#667085] mb-1">
                Commodity Information
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Maize</span>
                <span className="text-xs font-medium text-[#101828]">
                  {receipt.commodity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Quantity</span>
                <span className="text-xs font-medium text-[#101828]">
                  {receipt.quantity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Grade</span>
                <span className="text-xs font-medium text-[#101828]">
                  {receipt.grade}
                </span>
              </div>

              <div className="text-xs text-[#667085] mt-2 mb-1 pt-2 border-t border-dashed border-[#E5E7EB]">
                Storage Information
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">
                  {receipt.warehouse}
                </span>
                <span className="text-xs font-medium text-[#101828]">
                  {receipt.storageInfo}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Date of Deposit</span>
                <span className="text-xs font-medium text-[#101828]">
                  {receipt.depositDate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Expiry Date</span>
                <span className="text-xs font-medium text-[#101828]">
                  {receipt.expiryDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          classNames={{
            root: "!rounded-lg !border-[#D0D5DD] !px-6",
          }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          disabled={selectedReceipts.length === 0}
          onClick={() => onNext(selectedReceipts)}
          classNames={{
            root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !px-6",
          }}
        >
          Pledge receipt
        </Button>
      </div>
    </div>
  );
};
