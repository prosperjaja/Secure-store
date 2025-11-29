"use client";

import { useState } from "react";
import { CommodityDetailsStep, CommodityDetailsFormData } from "./commodity-details-step";
import { ReceiptSummaryStep } from "./receipt-summary-step";

type DepositCommodityFormProps = {
  onClose?: () => void;
  onSuccess?: () => void;
};

export const DepositCommodityForm = ({
  onClose,
  onSuccess,
}: DepositCommodityFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CommodityDetailsFormData>({
    commodity: "",
    clientName: "",
    warehouse: "",
    grossWeight: "",
    gradingParams: {},
  });

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onClose?.();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerateReceipt = () => {
    // Here you would typically make an API call to save the receipt
    console.log("Generating receipt with data:", formData);
    onSuccess?.();
    onClose?.();
  };

  return (
    <div className="flex h-full">
      {/* Step Navigation Sidebar */}
      <div className="w-56 border-r border-[#E5E7EB] bg-[#F9FAFB] p-6">
        <h2 className="text-lg font-semibold text-[#101828] mb-6">
          Deposit commodity for client.
        </h2>
        <p className="text-sm text-[#667085] mb-8">
          Record new deposit details and issue a warehouse receipt for the
          client
        </p>

        <div className="flex flex-col gap-4">
          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                currentStep === 1
                  ? "bg-[#4F46E5] text-white"
                  : currentStep > 1
                    ? "bg-[#4F46E5] text-white"
                    : "bg-[#F3F4F6] text-[#9CA3AF]"
              }`}
            >
              1
            </div>
            <span
              className={`text-sm font-medium ${
                currentStep === 1 ? "text-[#4F46E5]" : "text-[#667085]"
              }`}
            >
              Commodity details
            </span>
          </div>

          {/* Connector Line */}
          <div className="ml-4 w-px h-8 bg-[#E5E7EB]" />

          {/* Step 2 */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                currentStep === 2
                  ? "bg-[#4F46E5] text-white"
                  : "bg-[#F3F4F6] text-[#9CA3AF]"
              }`}
            >
              2
            </div>
            <span
              className={`text-sm font-medium ${
                currentStep === 2 ? "text-[#4F46E5]" : "text-[#667085]"
              }`}
            >
              Generate Receipt
            </span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {currentStep === 1 && (
          <CommodityDetailsStep
            formData={formData}
            onFormDataChange={setFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {currentStep === 2 && (
          <ReceiptSummaryStep
            formData={formData}
            onBack={handleBack}
            onGenerateReceipt={handleGenerateReceipt}
          />
        )}
      </div>
    </div>
  );
};
