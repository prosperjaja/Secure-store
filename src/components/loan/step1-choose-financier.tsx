"use client";

import { Button } from "../ui/mantine/button";
import { RiBankLine } from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";

const financiers = [
  {
    id: "first-bank",
    title: "First Bank Plc",
    interest_rate: "8.5% p.a",
    loan_term: "3 - 12 months",
    processing_time: "24 hours",
    bg_color: "#DBE4F9",
    color: "#0F49D8",
  },
  {
    id: "first-bank-2",
    title: "First Bank Plc",
    interest_rate: "8.5% p.a",
    loan_term: "3 - 12 months",
    processing_time: "24 hours",
    bg_color: "#DBE4F9",
    color: "#0F49D8",
  },
  {
    id: "first-bank-3",
    title: "First Bank Plc",
    interest_rate: "8.5% p.a",
    loan_term: "3 - 12 months",
    processing_time: "24 hours",
    bg_color: "#FFE5B8",
    color: "#FFA011",
  },
  {
    id: "first-bank-4",
    title: "First Bank Plc",
    interest_rate: "8.5% p.a",
    loan_term: "3 - 12 months",
    processing_time: "24 hours",
    bg_color: "#DBE4F9",
    color: "#0F49D8",
  },
  {
    id: "first-bank-5",
    title: "First Bank Plc",
    interest_rate: "8.5% p.a",
    loan_term: "3 - 12 months",
    processing_time: "24 hours",
    bg_color: "#ECDDFF",
    color: "#9747FF",
  },
];

interface Step1Props {
  onNext: (financierId: string) => void;
  selectedFinancier?: string;
}

export const Step1ChooseFinancier = ({
  onNext,
  selectedFinancier: initialSelection,
}: Step1Props) => {
  const [selectedFinancier, setSelectedFinancier] = useState<string | null>(
    initialSelection || null
  );

  const handleSelect = (id: string) => {
    setSelectedFinancier(id);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-[#101828]">
            Choose Your Financier
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {financiers.map((financier) => (
          <div
            key={financier.id}
            className={clsx(
              "border-2 rounded-xl p-5 flex flex-col gap-4 transition-all cursor-pointer hover:shadow-md",
              selectedFinancier === financier.id
                ? "border-[#4F46E5] bg-[#F5F5FF]"
                : "border-[#E5E7EB] bg-white"
            )}
            onClick={() => handleSelect(financier.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="size-12 rounded-full flex items-center justify-center"
                  style={{
                    background: financier.bg_color,
                    color: financier.color,
                  }}
                >
                  <RiBankLine size={24} />
                </span>
                <span className="flex flex-col">
                  <h3 className="text-base font-semibold text-[#101828]">
                    {financier.title}
                  </h3>
                </span>
              </div>
              <input
                type="radio"
                checked={selectedFinancier === financier.id}
                onChange={() => handleSelect(financier.id)}
                className="size-4 text-[#4F46E5] cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-[#E5E7EB]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Interest rate</span>
                <span className="text-xs font-medium text-[#101828]">
                  {financier.interest_rate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Tenure Options</span>
                <span className="text-xs font-medium text-[#101828]">
                  {financier.loan_term}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#667085]">Approval time</span>
                <span className="text-xs font-medium text-[#101828]">
                  {financier.processing_time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end">
        <Button
          variant="primary"
          disabled={!selectedFinancier}
          onClick={() => selectedFinancier && onNext(selectedFinancier)}
          classNames={{
            root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !px-6 !text-white",
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
