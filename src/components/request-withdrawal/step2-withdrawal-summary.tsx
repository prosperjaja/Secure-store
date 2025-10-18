"use client";

import { Button } from "../ui/mantine/button";
import { InfoCircle } from "iconsax-reactjs";

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

export const Step2WithdrawalSummary = ({ onNext, onBack }: Step2Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-[#101828]">
            Withdrawal summary
          </h2>
          <p className="text-sm text-[#667085]">
            Confirm your details before proceeding to payout
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            classNames={{
              root: "!rounded-lg !border-[#D0D5DD] !px-4 !h-10",
            }}
          >
            Download PDF
          </Button>
          <Button
            variant="outline"
            classNames={{
              root: "!rounded-lg !border-[#D0D5DD] !px-4 !h-10",
            }}
          >
            Print summary
          </Button>
        </div>
      </div>

      {/* Receipt Information */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
          <h3 className="text-sm font-semibold text-[#101828]">
            Receipt ID: WR-2025-01
          </h3>
        </div>

        {/* Commodity Information */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-medium text-[#667085]">
            Commodity information
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#667085]">TYPE</span>
              <span className="text-sm font-medium text-[#101828]">Maize</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#667085]">QUANTITY</span>
              <span className="text-sm font-medium text-[#101828]">
                500 Metric tons
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#667085]">QUALITY</span>
              <span className="text-sm font-medium text-[#101828]">
                Grade A
              </span>
            </div>
          </div>
        </div>

        {/* Storage Information */}
        <div className="flex flex-col gap-3 pt-3 border-t border-[#E5E7EB]">
          <h4 className="text-xs font-medium text-[#667085]">
            Storage information
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#667085]">WAREHOUSE LOCATION</span>
              <span className="text-sm font-medium text-[#101828]">
                Lagos State Warehouse
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#667085]">DATE DESIED</span>
              <span className="text-sm font-medium text-[#101828]">
                2025-01-01
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-[#667085]">EXPIRY DATE</span>
              <span className="text-sm font-medium text-[#101828]">
                2025-01-01
              </span>
            </div>
          </div>
        </div>

        {/* Reason for Withdrawal */}
        <div className="flex flex-col gap-2 pt-3 border-t border-[#E5E7EB]">
          <h4 className="text-xs font-medium text-[#667085]">
            Reason for withdrawal
          </h4>
          <p className="text-sm text-[#101828]">Reason for withdrawal</p>
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">Description</span>
            <span className="text-sm text-[#667085]">Amount</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-[#E5E7EB]">
            <span className="text-sm text-[#101828]">
              Storage fee (500 naira per metric tons, Monthly)
            </span>
            <span className="text-sm font-medium text-[#101828]">25,000</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-[#E5E7EB]">
            <span className="text-sm text-[#101828]">Handling fee</span>
            <span className="text-sm font-medium text-[#101828]">10,000</span>
          </div>
          <div className="flex items-center justify-between pt-3">
            <span className="text-base font-semibold text-[#101828]">
              Total
            </span>
            <span className="text-base font-semibold text-[#101828]">
              35,000
            </span>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-[#FEF6EE] border border-[#FDB022] rounded-lg p-4 flex items-start gap-3">
        <InfoCircle size={20} color="#FDB022" className="mt-0.5 flex-shrink-0" />
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold text-[#B54708]">
            Storage fee is calculated based on the duratoin your commodities have
            been stores. Fees will continue to accure if withdrawal is not
            completed within 48 hours of approval
          </h4>
        </div>
      </div>

      {/* Contact Support */}
      <div className="flex items-center justify-center">
        <p className="text-sm text-[#667085]">
          Still having questions?{" "}
          <button className="text-[#4F46E5] font-medium hover:underline">
            Contact support
          </button>
        </p>
      </div>

      {/* Action Buttons */}
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
          onClick={onNext}
          classNames={{
            root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !px-6",
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
