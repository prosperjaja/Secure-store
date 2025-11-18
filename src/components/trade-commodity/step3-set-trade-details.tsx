"use client";

import { TradeDetails, TRADE_DURATIONS } from "../../types/trade";
import { TextInput } from "../ui/mantine/TextInput";
import { Select } from "../ui/mantine/select";

interface Step3Props {
  tradeDetails: TradeDetails;
  onTradeDetailsChange: (details: TradeDetails) => void;
}

export const Step3SetTradeDetails = ({
  tradeDetails,
  onTradeDetailsChange,
}: Step3Props) => {
  const handleAskingPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    onTradeDetailsChange({
      ...tradeDetails,
      askingPrice: value,
    });
  };

  const handleDurationChange = (value: string | null) => {
    if (!value) return;
    onTradeDetailsChange({
      ...tradeDetails,
      tradeDuration: value,
    });
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTradeDetailsChange({
      ...tradeDetails,
      expiryDate: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-[#101828]">
          Configure Trade Details
        </h2>
        <p className="text-sm text-[#667085]">
          You&apos;re listing 1 receipt for trade
        </p>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
        <div className="flex flex-col gap-6">
          {/* Asking Price */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Asking Price (₦ per MT)
            </label>
            <TextInput
              placeholder="Enter your asking price"
              type="number"
              value={tradeDetails.askingPrice || ""}
              onChange={handleAskingPriceChange}
            />
          </div>

          {/* Trade Duration */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Trade Duration
            </label>
            <Select
              placeholder="Select duration"
              value={tradeDetails.tradeDuration}
              onChange={handleDurationChange}
              data={TRADE_DURATIONS}
              styles={{
                dropdown: {
                  color: "#000",
                },
              }}
            />
          </div>

          {/* Expiry Date */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#344054]">
              Expiry Date
            </label>
            <TextInput
              placeholder="MM/DD/YYYY"
              type="date"
              value={tradeDetails.expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>

          {/* Auto-Lien Notice */}
          <div className="bg-[#EFF8FF] border border-[#B2DDFF] rounded-lg p-4">
            <p className="text-sm text-[#175CD3]">
              <span className="font-semibold">Auto-Lien Notice: </span>
              Once listed, a temporary lien will be placed on your receipt until
              the trade is completed or expires. You cannot pledge or withdraw
              this commodity during that period.
            </p>
          </div>

          {/* Storage Fee Notice */}
          <div className="bg-[#FFFBEB] border border-[#FEF0C7] rounded-lg p-4">
            <p className="text-sm text-[#B54708]">
              <span className="font-semibold">Storage Fee Notice: </span>
              Storage fees for traded commodities will be automatically deducted
              from your trade proceeds after a successful sale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
