"use client";

import { useState } from "react";
import { WithdrawalStepSidebar } from "./withdrawal-step-sidebar";
import { Step1SelectCommodity } from "./step1-select-commodity";
import { Step2WithdrawalSummary } from "./step2-withdrawal-summary";
import { Step3Payment } from "./step3-payment";

export const RequestWithdrawalSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(3, prev + 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleConfirm = () => {
    console.log("Payment confirmed!");
    // Handle final submission
  };

  return (
    <div className="flex h-full overflow-hidden bg-white">
      {/* Sidebar */}
      <WithdrawalStepSidebar currentStep={currentStep} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-2 p-6 border-b border-[#E5E7EB]">
          <h1 className="text-2xl font-bold text-[#101828]">
            Withdraw your commodities
          </h1>
          <p className="text-sm text-[#667085]">
            Enter details to request a withdrawal. Fees will be calculated
            automatically.
          </p>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-auto p-6">
          {currentStep === 1 && <Step1SelectCommodity onNext={handleNext} />}

          {currentStep === 2 && (
            <Step2WithdrawalSummary onNext={handleNext} onBack={handleBack} />
          )}

          {currentStep === 3 && (
            <Step3Payment onConfirm={handleConfirm} onBack={handleBack} />
          )}
        </div>
      </div>
    </div>
  );
};
