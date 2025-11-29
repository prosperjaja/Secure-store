"use client";

import { useEffect, useState } from "react";
import type { CommodityDetailsFormData } from "./commodity-details-step";

type ReceiptSummaryStepProps = {
  formData: CommodityDetailsFormData;
  onBack: () => void;
  onGenerateReceipt: () => void;
};

export const ReceiptSummaryStep = ({
  formData,
  onBack,
  onGenerateReceipt,
}: ReceiptSummaryStepProps) => {
  const [receiptId, setReceiptId] = useState("");
  const [depositDate, setDepositDate] = useState("");
  const [netWeight, setNetWeight] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(0);
  const [grade, setGrade] = useState("");
  const [gradeColor, setGradeColor] = useState("");
  const [liveInfestation] = useState("Grade B");
  console.log(netWeight);
  useEffect(() => {
    // Generate receipt ID
    const randomId = Math.floor(1000 + Math.random() * 9000);
    setReceiptId(`WH-${randomId}-${Math.floor(1000 + Math.random() * 9000)}`);

    // Set current date
    const today = new Date();
    const formattedDate = `${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(today.getDate()).padStart(2, "0")}/${today.getFullYear()}`;
    setDepositDate(formattedDate);

    // Calculate total defective grains
    let total = 0;
    Object.entries(formData.gradingParams).forEach(([key, value]) => {
      if (key !== "moistureContent") {
        total += parseFloat(value) || 0;
      }
    });

    // Standard deduction is the total defective grains percentage
    const stdDeduction = total;
    setStandardDeduction(stdDeduction);

    // Calculate net weight
    const grossWeight = parseFloat(formData.grossWeight) || 0;
    const calculatedNetWeight =
      grossWeight - (grossWeight * stdDeduction) / 100;
    setNetWeight(calculatedNetWeight);

    // Determine grade based on standard deduction
    if (stdDeduction >= 1 && stdDeduction <= 3) {
      setGrade("GRADE1 - 4.0");
      setGradeColor("#16A34A");
    } else if (stdDeduction >= 4 && stdDeduction <= 6) {
      setGrade("GRADE2 - 3.0");
      setGradeColor("#EAB308");
    } else {
      setGrade("GRADE1 - 4.0");
      setGradeColor("#16A34A");
    }
  }, [formData]);

  const formatParamLabel = (key: string): string => {
    const labels: { [key: string]: string } = {
      foreignMatter: "Foreign matter",
      inorganicMatter: "Inorganic matter",
      brokenKernels: "Broken kernels",
      pestDamagedGrains: "Pest damaged grains",
      rottenDiseasedGrains: "Rotten & Diseased grains",
      discoloredGrains: "Discolored grains",
      moistureContent: "Moisture%",
      brokenGrains: "Broken grains",
      damagedGrains: "Damaged grains",
      shriveledGrains: "Shriveled grains",
    };
    return labels[key] || key;
  };

  const formatParamValue = (key: string, value: string): string => {
    if (key === "moistureContent") {
      return `${value}%`;
    }
    if (key === "inorganicMatter") {
      return `${value} MT`;
    }
    return value;
  };

  // Split grading params into pairs for display
  const gradingParamsArray = Object.entries(formData.gradingParams);
  const paramPairs: Array<[string, string][]> = [];
  for (let i = 0; i < gradingParamsArray.length; i += 2) {
    paramPairs.push(gradingParamsArray.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#101828]">
            Receipt Summary
          </h2>
          <p className="text-sm text-[#667085]">{receiptId}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[#667085]">Deposit date</p>
          <p className="text-sm font-medium text-[#101828]">{depositDate}</p>
        </div>
      </div>

      <div className="h-px bg-[#E5E7EB]" />

      {/* Client and Warehouse Info */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-[#667085] mb-1">Client name</p>
          <p className="text-sm font-medium text-[#101828]">
            {formData.clientName}
          </p>
        </div>
        <div>
          <p className="text-sm text-[#667085] mb-1">Warehouse</p>
          <p className="text-sm font-medium text-[#101828]">
            {formData.warehouse}
          </p>
        </div>
      </div>

      <div className="h-px bg-[#E5E7EB]" />

      {/* Commodity Type and Grading Parameters */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-sm text-[#667085] mb-1">Commodity type</p>
          <p className="text-sm font-medium text-[#101828]">
            {formData.commodity}
          </p>
        </div>
      </div>

      {/* Grading Parameters in Pairs */}
      {paramPairs.map((pair, pairIndex) => (
        <div key={pairIndex} className="grid grid-cols-2 gap-8">
          {pair.map(([key, value]) => (
            <div key={key}>
              <p className="text-sm text-[#667085] mb-1">
                {formatParamLabel(key)}
              </p>
              <p className="text-sm font-medium text-[#101828]">
                {formatParamValue(key, value)}
              </p>
            </div>
          ))}
        </div>
      ))}

      <div className="h-px bg-[#E5E7EB]" />

      {/* Live Infestation */}
      <div className="text-center py-4">
        <p className="text-sm text-[#667085] mb-1">Live Infestation</p>
        <p className="text-base font-semibold text-[#101828]">
          {liveInfestation}
        </p>
      </div>

      <div className="h-px bg-[#E5E7EB]" />

      {/* Calculations Display */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-[#F9FAFB] rounded-lg">
        <div>
          <p className="text-sm font-medium text-[#101828]">
            {formData.commodity.toUpperCase()}(Auto-calculated):{" "}
            <span style={{ color: gradeColor }}>{grade}</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-[#101828]">
            Standard deduction:{" "}
            <span className="text-[#16A34A]">
              {standardDeduction.toFixed(1)}%
            </span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBack}
          className="px-6 py-2.5 text-sm font-semibold text-[#4F46E5] bg-white border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onGenerateReceipt}
          className="px-6 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
        >
          Generate Warehouse Receipt
        </button>
      </div>
    </div>
  );
};
