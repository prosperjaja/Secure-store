"use client";

import { TradePledge } from "../../types/trade";
import { Button } from "../ui/mantine/button";
import { MoneyRecive } from "iconsax-reactjs";

interface Step4Props {
  pledge: TradePledge;
  onConfirm: () => void;
  onBack: () => void;
}

export const Step4ReviewConfirm = ({ pledge, onConfirm, onBack }: Step4Props) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getDurationLabel = (months: string) => {
    return `${months} months`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-[#101828]">
          Review & Confirm Pledge
        </h2>
      </div>

      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6">
        <div className="flex flex-col gap-6">
          {/* Asking Price */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-[#667085]">
              Asking price
            </span>
            <div className="flex items-center gap-2">
              <MoneyRecive size={24} color="#101828" variant="Bold" />
              <span className="text-2xl font-semibold text-[#12B76A]">
                {formatCurrency(pledge.askingPrice)}
              </span>
            </div>
          </div>

          {/* Exchange/Marketplace */}
          <div className="flex items-center justify-between py-3 border-b border-[#E5E7EB]">
            <span className="text-sm font-medium text-[#667085]">
              Exchange / Marketplace
            </span>
            <span className="text-sm font-semibold text-[#101828]">
              {pledge.marketplace.name}
            </span>
          </div>

          {/* Trade Duration */}
          <div className="flex items-center justify-between py-3 border-b border-[#E5E7EB]">
            <span className="text-sm font-medium text-[#667085]">
              Trade Duration
            </span>
            <span className="text-sm font-semibold text-[#101828]">
              {getDurationLabel(pledge.tradeDuration)}
            </span>
          </div>

          {/* Expiry Date */}
          <div className="flex items-center justify-between py-3 border-b border-[#E5E7EB]">
            <span className="text-sm font-medium text-[#667085]">
              Expiry Date
            </span>
            <span className="text-sm font-semibold text-[#101828]">
              {formatDate(pledge.expiryDate)}
            </span>
          </div>

          {/* Important Notice */}
          <div className="bg-[#FFFBEB] border border-[#FEF0C7] rounded-lg p-4 mt-2">
            <p className="text-sm text-[#B54708]">
              <span className="font-semibold">Important notice: </span>
              By confirming this pledge, you authorize First Bank Plc to place a lien on your selected
              warehouse receipts until full loan repayment. Your receipts will be held as collateral and cannot be
              withdrawn or transferred during the loan period.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <Button
              variant="default"
              onClick={onBack}
              classNames={{
                root: "flex-1 !rounded-lg !border-[#D0D5DD] !h-11",
              }}
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={onConfirm}
              classNames={{
                root: "flex-1 !rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !h-11",
              }}
            >
              Push to exchange
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
