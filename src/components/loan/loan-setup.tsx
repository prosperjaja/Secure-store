"use client";

import { useState } from "react";
import { LoanStepSidebar } from "./loan-step-sidebar";
import { Step1ChooseFinancier } from "./step1-choose-financier";
import { Step2SelectReceipts, Receipt } from "./step2-select-receipts";
import { Step3SpecifyAmounts, ReceiptWithAmount } from "./step3-specify-amounts";
import { Step4ReviewConfirm } from "./step4-review-confirm";

export const LoanSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFinancier, setSelectedFinancier] = useState<string>("");
  const [selectedReceipts, setSelectedReceipts] = useState<Receipt[]>([]);
  const [receiptsWithAmounts, setReceiptsWithAmounts] = useState<ReceiptWithAmount[]>([]);

  const handleFinancierNext = (financierId: string) => {
    setSelectedFinancier(financierId);
    setCurrentStep(2);
  };

  const handleReceiptsNext = (receipts: Receipt[]) => {
    setSelectedReceipts(receipts);
    setCurrentStep(3);
  };

  const handleAmountsNext = (receiptsWithAmounts: ReceiptWithAmount[]) => {
    setReceiptsWithAmounts(receiptsWithAmounts);
    setCurrentStep(4);
  };

  const handleConfirm = () => {
    // Handle final submission
    console.log("Confirmed!", {
      financier: selectedFinancier,
      receipts: receiptsWithAmounts,
    });
    // You can add success notification, redirect, etc.
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="flex h-full overflow-hidden bg-white">
      {/* Sidebar */}
      <LoanStepSidebar currentStep={currentStep} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-2 p-6 border-b border-[#E5E7EB]">
          <h1 className="text-2xl font-bold text-[#101828]">
            Pledge your commodities
          </h1>
          <p className="text-sm text-[#667085]">
            Pledge your warehouse receipt and access quick financing from trusted
            partners
          </p>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-auto p-6">
          {currentStep === 1 && (
            <Step1ChooseFinancier
              onNext={handleFinancierNext}
              selectedFinancier={selectedFinancier}
            />
          )}

          {currentStep === 2 && (
            <Step2SelectReceipts
              onNext={handleReceiptsNext}
              onBack={handleBack}
              selectedReceipts={selectedReceipts}
            />
          )}

          {currentStep === 3 && (
            <Step3SpecifyAmounts
              onNext={handleAmountsNext}
              onBack={handleBack}
              selectedReceipts={selectedReceipts}
              receiptsWithAmounts={receiptsWithAmounts}
            />
          )}

          {currentStep === 4 && (
            <Step4ReviewConfirm
              onConfirm={handleConfirm}
              onBack={handleBack}
              financierId={selectedFinancier}
              receiptsWithAmounts={receiptsWithAmounts}
            />
          )}
        </div>
      </div>
    </div>
  );
};
