"use client";

import { useState } from "react";
import { TradeReceipt } from "../../types/trade";
import { Select } from "../ui/mantine/select";
import { TextInput } from "../ui/mantine/TextInput";

interface Step2Props {
  selectedReceipt: TradeReceipt | null;
  withdrawalQuantity: number;
  onSelectReceipt: (receipt: TradeReceipt) => void;
  onWithdrawalQuantityChange: (quantity: number) => void;
}

// Mock receipts data
const MOCK_RECEIPTS: TradeReceipt[] = [
  {
    id: "receipt-1",
    commodity: "Maize",
    availableQuantity: 200,
    unit: "metric tons",
  },
  {
    id: "receipt-2",
    commodity: "Rice",
    availableQuantity: 55,
    unit: "metric tons",
  },
  {
    id: "receipt-3",
    commodity: "Wheat",
    availableQuantity: 20,
    unit: "metric tons",
  },
];

export const Step2SelectReceipt = ({
  selectedReceipt,
  withdrawalQuantity,
  onSelectReceipt,
  onWithdrawalQuantityChange,
}: Step2Props) => {
  const [error, setError] = useState("");

  const receiptOptions = MOCK_RECEIPTS.map((receipt) => ({
    value: receipt.id,
    label: `${receipt.commodity} - ${receipt.availableQuantity} ${receipt.unit}`,
  }));

  const handleReceiptChange = (value: string | null) => {
    if (!value) return;
    const receipt = MOCK_RECEIPTS.find((r) => r.id === value);
    if (receipt) {
      onSelectReceipt(receipt);
      setError("");
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    onWithdrawalQuantityChange(value);

    if (selectedReceipt && value > selectedReceipt.availableQuantity) {
      setError("Please input the correct details");
    } else {
      setError("");
    }
  };


  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-[#101828]">
          Select Receipts for trade
        </h2>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-[#101828] mb-6">
          Select commodity for trade
        </h3>

        <div className="flex flex-col gap-4">
          {/* Select Receipt */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Select receipt
            </label>
            <Select
              placeholder="Select a receipt for withdrawal"
              value={selectedReceipt?.id || ""}
              onChange={handleReceiptChange}
              data={receiptOptions}
              styles={{
                dropdown: {
                  color: "#000",
                },
              }}
            />
          </div>

          {/* Commodity - Display only */}
          {selectedReceipt && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#344054]">
                Commodity
              </label>
              <TextInput
                value={selectedReceipt.commodity}
                readOnly
                classNames={{
                  input: "bg-[#F9FAFB]",
                }}
              />
            </div>
          )}

          {/* Available Quantity - Display only */}
          {selectedReceipt && (
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#344054]">
                Available Quantity (Metric tonnes)
              </label>
              <TextInput
                value={` ${selectedReceipt.availableQuantity} metric tons`}
                readOnly
                classNames={{
                  input: "bg-[#F9FAFB]",
                }}
              />
            </div>
          )}

          {/* Withdrawal Quantity */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Withdrawal Quantity (Metric tonnes)
            </label>
            <div className="flex gap-2">
              <TextInput
                placeholder="Enter withdrawal quantity"
                type="number"
                value={withdrawalQuantity || ""}
                onChange={handleQuantityChange}
                error={!!error}
                classNames={{
                  root: "flex-1",
                }}
              />
              <Select
                value="add"
                onChange={() => {}}
                data={[
                  {
                    value: "add",
                    label: "Add receipt to complete your withdrawal",
                  },
                ]}
                classNames={{
                  root: "flex-1",
                  dropdown: "text-black",
                }}
              />
            </div>
            {error && <p className="text-sm text-[#DC2626] mt-1">{error}</p>}
          </div>

          {/* Storage Fee Notice */}
          <div className="bg-[#FFFBEB] border border-[#FEF0C7] rounded-lg p-4 mt-2">
            <p className="text-sm text-[#B54708]">
              <span className="font-semibold">Storage Fee Notice: </span>
              Storage fee is calculated based on the duration your commodities
              have been stored. Fees will continue to accrue if withdrawal is
              not completed within 48 hours of approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
