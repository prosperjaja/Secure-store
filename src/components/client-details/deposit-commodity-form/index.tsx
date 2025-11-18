"use client";

import { useState } from "react";
import { Step1CommodityDetails } from "./step1-commodity-details";
import { Step2ReceiptSummary } from "./step2-receipt-summary";

export interface CommodityFormData {
  grossWeight: string;
  foreignMatter: string;
  inorganicMatter: string;
  brokenKernels: string;
  pestDamagedGrains: string;
  rottenDiseasedGrains: string;
  discoloredGrains: string;
  totalDefectiveGrains: string;
  moistureContent: string;
}

export interface ReceiptSummary {
  commodity: string;
  grade: number;
  netWeight: string;
  standardDeduction: string;
}

interface DepositCommodityFormProps {
  clientName: string;
  onClose: () => void;
}

export const DepositCommodityForm = ({
  clientName,
  onClose,
}: DepositCommodityFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CommodityFormData>({
    grossWeight: "",
    foreignMatter: "",
    inorganicMatter: "",
    brokenKernels: "",
    pestDamagedGrains: "",
    rottenDiseasedGrains: "",
    discoloredGrains: "",
    totalDefectiveGrains: "",
    moistureContent: "",
  });
  const [receiptSummary, setReceiptSummary] = useState<ReceiptSummary | null>(
    null
  );

  const handleStep1Continue = (data: CommodityFormData) => {
    setFormData(data);

    // Calculate receipt summary based on form data
    const grossWeight = parseFloat(data.grossWeight) || 0;
    const totalDefective = parseFloat(data.totalDefectiveGrains) || 0;
    const moisture = parseFloat(data.moistureContent) || 0;

    // Simple grade calculation logic (can be adjusted)
    let grade = 1;
    if (totalDefective > 5 || moisture > 14) {
      grade = 2;
    }
    if (totalDefective > 10 || moisture > 16) {
      grade = 3;
    }

    // Calculate net weight (gross - defective)
    const deduction = (grossWeight * totalDefective) / 100;
    const netWeight = grossWeight - deduction;

    setReceiptSummary({
      commodity: "MAIZE",
      grade,
      netWeight: `${netWeight.toFixed(2)}mt`,
      standardDeduction: `${deduction.toFixed(2)}mt`,
    });

    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleGenerateReceipt = () => {
    // TODO: API call to generate receipt
    console.log("Generating receipt with data:", { formData, receiptSummary });
    onClose();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex flex-col gap-1 pb-4 border-b border-[#E5E7EB]">
        <h2 className="text-xl font-semibold text-[#101828]">
          Deposit commodity for client
        </h2>
        <p className="text-sm text-[#667085]">
          Deposit commodity for {clientName}
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center gap-2 py-4">
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
            currentStep === 1
              ? "bg-[#4F46E5] text-white"
              : "bg-[#F3F4F6] text-[#667085]"
          }`}
        >
          1
        </div>
        <div className="flex-1 h-[2px] bg-[#E5E7EB]" />
        <div
          className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
            currentStep === 2
              ? "bg-[#4F46E5] text-white"
              : "bg-[#F3F4F6] text-[#667085]"
          }`}
        >
          2
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-auto py-4">
        {currentStep === 1 && (
          <Step1CommodityDetails
            formData={formData}
            onContinue={handleStep1Continue}
            onCancel={onClose}
          />
        )}
        {currentStep === 2 && receiptSummary && (
          <Step2ReceiptSummary
            receiptSummary={receiptSummary}
            formData={formData}
            onBack={handleBack}
            onGenerate={handleGenerateReceipt}
          />
        )}
      </div>
    </div>
  );
};
