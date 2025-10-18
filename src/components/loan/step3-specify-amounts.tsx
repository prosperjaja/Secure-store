"use client";

import { Button } from "../ui/mantine/button";
import { TextInput } from "../ui/mantine/TextInput";
import { useState } from "react";
import { Receipt } from "./step2-select-receipts";

export interface ReceiptWithAmount extends Receipt {
  pledgeAmount?: string;
}

interface Step3Props {
  onNext: (receiptsWithAmounts: ReceiptWithAmount[]) => void;
  onBack: () => void;
  selectedReceipts: Receipt[];
  receiptsWithAmounts?: ReceiptWithAmount[];
}

export const Step3SpecifyAmounts = ({
  onNext,
  onBack,
  selectedReceipts,
  receiptsWithAmounts: initialAmounts = [],
}: Step3Props) => {
  // Initialize pledge amounts from previous state or empty
  const [pledgeAmounts, setPledgeAmounts] = useState<Record<string, string>>(
    () => {
      const initial: Record<string, string> = {};
      initialAmounts.forEach((receipt) => {
        if (receipt.pledgeAmount) {
          initial[receipt.id] = receipt.pledgeAmount;
        }
      });
      return initial;
    }
  );

  const handleAmountChange = (receiptId: string, value: string) => {
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, "");
    setPledgeAmounts((prev) => ({
      ...prev,
      [receiptId]: numericValue,
    }));
  };

  const getMaxQuantity = (quantityStr: string): number => {
    // Extract the numeric value from strings like "100 (MT)" or "200 (Bags)"
    const match = quantityStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const isValidAmount = (receiptId: string, quantityStr: string): boolean => {
    const amount = pledgeAmounts[receiptId];
    if (!amount || amount === "0") return false;
    const numAmount = parseInt(amount, 10);
    const maxAmount = getMaxQuantity(quantityStr);
    return numAmount > 0 && numAmount <= maxAmount;
  };

  const allAmountsValid = selectedReceipts.every((receipt) =>
    isValidAmount(receipt.id, receipt.quantity)
  );

  const handleNext = () => {
    const receiptsWithAmounts: ReceiptWithAmount[] = selectedReceipts.map(
      (receipt) => ({
        ...receipt,
        pledgeAmount: pledgeAmounts[receipt.id] || "0",
      })
    );
    onNext(receiptsWithAmounts);
  };

  const getUnit = (quantityStr: string): string => {
    // Extract the unit from strings like "100 (MT)" or "200 (Bags)"
    const match = quantityStr.match(/\(([^)]+)\)/);
    return match ? match[1] : "";
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-[#101828]">
            Specify Pledge Amounts
          </h2>
          <p className="text-sm text-[#667085]">
            Enter the quantity you want to pledge for each selected receipt
          </p>
        </div>
      </div>

      {/* Receipts with Input Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedReceipts.map((receipt) => {
          const maxQuantity = getMaxQuantity(receipt.quantity);
          const unit = getUnit(receipt.quantity);
          const currentAmount = pledgeAmounts[receipt.id] || "";
          const isValid = isValidAmount(receipt.id, receipt.quantity);
          const hasError =
            currentAmount !== "" && !isValid;

          return (
            <div
              key={receipt.id}
              className="border-2 border-[#E5E7EB] rounded-xl p-5 flex flex-col gap-4 bg-white"
            >
              {/* Receipt Header */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-[#101828]">
                    Receipt ID: {receipt.id}
                  </span>
                  <span className="px-2.5 py-1 w-fit rounded-full text-xs font-medium bg-[#ECFDF3] text-[#12B76A]">
                    {receipt.status}
                  </span>
                </div>
              </div>

              {/* Commodity Info */}
              <div className="flex flex-col gap-2 pt-3 border-t border-dashed border-[#E5E7EB]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#667085]">Commodity</span>
                  <span className="text-xs font-medium text-[#101828]">
                    {receipt.commodity}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#667085]">Grade</span>
                  <span className="text-xs font-medium text-[#101828]">
                    {receipt.grade}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#667085]">
                    Available Quantity
                  </span>
                  <span className="text-xs font-medium text-[#101828]">
                    {receipt.quantity}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#667085]">Warehouse</span>
                  <span className="text-xs font-medium text-[#101828]">
                    {receipt.storageInfo}
                  </span>
                </div>
              </div>

              {/* Amount Input */}
              <div className="flex flex-col gap-2 pt-3 border-t border-[#E5E7EB]">
                <label className="text-sm font-medium text-[#344054]">
                  Pledge Amount ({unit})
                </label>
                <TextInput
                  variant="default"
                  placeholder={`Enter amount (Max: ${maxQuantity})`}
                  value={currentAmount}
                  onChange={(e) =>
                    handleAmountChange(receipt.id, e.target.value)
                  }
                  classNames={{
                    input: `!h-10 !text-sm ${
                      hasError ? "!border-red-500" : ""
                    }`,
                  }}
                  rightSection={
                    <span className="text-xs text-[#667085] font-medium">
                      {unit}
                    </span>
                  }
                />
                {hasError && (
                  <span className="text-xs text-red-500">
                    Please enter a valid amount between 1 and {maxQuantity}
                  </span>
                )}
                {isValid && (
                  <span className="text-xs text-[#12B76A]">
                    Valid pledge amount
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Info */}
      <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 flex items-start gap-3">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold text-[#101828]">
            {selectedReceipts.length}{" "}
            {selectedReceipts.length === 1 ? "Receipt" : "Receipts"} Selected
          </h4>
          <p className="text-xs text-[#667085]">
            Please specify the pledge amount for each receipt. You can pledge
            up to the total available quantity.
          </p>
        </div>
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
          disabled={!allAmountsValid}
          onClick={handleNext}
          classNames={{
            root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !px-6",
          }}
        >
          Continue to Review
        </Button>
      </div>
    </div>
  );
};
