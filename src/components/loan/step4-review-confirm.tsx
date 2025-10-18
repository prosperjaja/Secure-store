"use client";

import { Button } from "../ui/mantine/button";
import { RiBankLine } from "react-icons/ri";
import { InfoCircle } from "iconsax-reactjs";
import { ReceiptWithAmount } from "./step3-specify-amounts";

interface Step4Props {
  onConfirm: () => void;
  onBack: () => void;
  financierId: string;
  receiptsWithAmounts: ReceiptWithAmount[];
}

export const Step4ReviewConfirm = ({
  onConfirm,
  onBack,
  receiptsWithAmounts,
}: Step4Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-[#101828]">
            Review & Confirm Pledge
          </h2>
        </div>
      </div>

      {/* Selected Financier */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-sm font-medium text-[#667085]">
          Selected Financier
        </h3>
        <div className="flex items-center gap-3">
          <span
            className="size-12 rounded-full flex items-center justify-center"
            style={{
              background: "#DBE4F9",
              color: "#0F49D8",
            }}
          >
            <RiBankLine size={24} />
          </span>
          <div className="flex-1 flex items-center justify-between">
            <span className="flex flex-col">
              <h4 className="text-base font-semibold text-[#101828]">
                First Bank Plc
              </h4>
            </span>
            <span className="text-sm font-medium text-[#101828]">
              First Bank Plc
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E5E7EB]">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#667085]">Interest rate</span>
            <span className="text-sm font-medium text-[#101828]">8.5% p.a</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#667085]">Tenure Options</span>
            <span className="text-sm font-medium text-[#101828]">
              3 - 12months
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#667085]">Approval time</span>
            <span className="text-sm font-medium text-[#101828]">24hours</span>
          </div>
        </div>
      </div>

      {/* Pledge Receipt */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-sm font-medium text-[#667085]">Pledge receipt</h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-[#101828]">
            {receiptsWithAmounts.length}
          </span>
          <span className="text-sm text-[#667085]">
            {receiptsWithAmounts.length === 1 ? "Receipt" : "Receipts"}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {receiptsWithAmounts.map((receipt, index) => {
            const getUnit = (quantityStr: string): string => {
              const match = quantityStr.match(/\(([^)]+)\)/);
              return match ? match[1] : "";
            };

            return (
              <div
                key={index}
                className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                  <span className="text-xs font-semibold text-[#101828]">
                    Receipt ID: {receipt.id}
                  </span>
                  <span className="px-2 py-1 bg-[#ECFDF3] text-[#12B76A] rounded-full text-xs font-medium">
                    {receipt.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#667085]">TYPE</span>
                    <span className="text-sm font-medium text-[#101828]">
                      {receipt.commodity}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#667085]">
                      AVAILABLE QUANTITY
                    </span>
                    <span className="text-sm font-medium text-[#101828]">
                      {receipt.quantity}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#667085]">QUALITY</span>
                    <span className="text-sm font-medium text-[#101828]">
                      {receipt.grade}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#667085]">
                      PLEDGE AMOUNT
                    </span>
                    <span className="text-sm font-semibold text-[#4F46E5]">
                      {receipt.pledgeAmount} ({getUnit(receipt.quantity)})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estimated Loan Amount */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-sm font-medium text-[#667085]">
          Estimated Loan amount
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#667085]">₦</span>
          <span className="text-3xl font-bold text-[#12B76A]">787,500</span>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-[#E5E7EB]">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">
              Total Collateral value
            </span>
            <span className="text-sm font-medium text-[#101828]">
              1,125,000
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">Loan - value - ratio</span>
            <span className="text-sm font-medium text-[#101828]">70%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">Repayment period</span>
            <span className="text-sm font-medium text-[#101828]">
              3 - 12months
            </span>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-[#FEF6EE] border border-[#FDB022] rounded-lg p-4 flex items-start gap-3">
        <InfoCircle
          size={20}
          color="#FDB022"
          className="mt-0.5 flex-shrink-0"
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold text-[#B54708]">
            Important notice
          </h4>
          <p className="text-xs text-[#B54708]">
            By confirming this pledge, you authorize First Bank Plc to place a
            lien on your selected warehouse receipt(s) multiple until the loan
            is repaid in full. Your commodities will be held as collateral and
            cannot be withdrawn or transferred during the loan period.
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
          onClick={onConfirm}
          classNames={{
            root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !px-6",
          }}
        >
          Confirm Pledge
        </Button>
      </div>
    </div>
  );
};
