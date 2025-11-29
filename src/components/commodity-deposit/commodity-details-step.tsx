"use client";

import { TextInput, Select } from "@mantine/core";
import { useState, useEffect } from "react";

type GradingParameter = {
  name: string;
  label: string;
  placeholder: string;
  maxValue?: number;
};

type CommodityGradingParams = {
  [key: string]: GradingParameter[];
};

const commodityGradingParams: CommodityGradingParams = {
  Maize: [
    {
      name: "foreignMatter",
      label: "Foreign matter",
      placeholder: "Enter foreign matter here",
    },
    {
      name: "inorganicMatter",
      label: "Inorganic matter",
      placeholder: "Enter matter here",
    },
    {
      name: "brokenKernels",
      label: "Broken kernels",
      placeholder: "Enter warehouse name",
    },
    {
      name: "pestDamagedGrains",
      label: "Pest damaged grains",
      placeholder: "Enter damaged grains",
    },
    {
      name: "rottenDiseasedGrains",
      label: "Rotten & Diseased grains",
      placeholder: "Enter diseased grains here",
    },
    {
      name: "discoloredGrains",
      label: "Discolored grains",
      placeholder: "Enter discolored grains here",
    },
    {
      name: "moistureContent",
      label: "Moisture content",
      placeholder: "Enter moisture here",
      maxValue: 15,
    },
  ],
  Rice: [
    {
      name: "foreignMatter",
      label: "Foreign matter",
      placeholder: "Enter foreign matter here",
    },
    {
      name: "brokenGrains",
      label: "Broken grains",
      placeholder: "Enter broken grains",
    },
    {
      name: "damagedGrains",
      label: "Damaged grains",
      placeholder: "Enter damaged grains",
    },
    {
      name: "moistureContent",
      label: "Moisture content",
      placeholder: "Enter moisture here",
      maxValue: 14,
    },
  ],
  Wheat: [
    {
      name: "foreignMatter",
      label: "Foreign matter",
      placeholder: "Enter foreign matter here",
    },
    {
      name: "shriveledGrains",
      label: "Shriveled grains",
      placeholder: "Enter shriveled grains",
    },
    {
      name: "damagedGrains",
      label: "Damaged grains",
      placeholder: "Enter damaged grains",
    },
    {
      name: "moistureContent",
      label: "Moisture content",
      placeholder: "Enter moisture here",
      maxValue: 12,
    },
  ],
};

export type CommodityDetailsFormData = {
  commodity: string;
  clientName: string;
  warehouse: string;
  grossWeight: string;
  gradingParams: { [key: string]: string };
};

type CommodityDetailsStepProps = {
  formData: CommodityDetailsFormData;
  onFormDataChange: (data: CommodityDetailsFormData) => void;
  onNext: () => void;
  onBack: () => void;
};

export const CommodityDetailsStep = ({
  formData,
  onFormDataChange,
  onNext,
  onBack,
}: CommodityDetailsStepProps) => {
  const [totalDefectiveGrains, setTotalDefectiveGrains] = useState(0);
  const [netWeight, setNetWeight] = useState(0);
  const [standardDeduction, setStandardDeduction] = useState(0);
  const [grade, setGrade] = useState("");
  const [gradeColor, setGradeColor] = useState("");

  console.log(totalDefectiveGrains);

  const currentGradingParams = formData.commodity
    ? commodityGradingParams[formData.commodity] || []
    : [];

  // Calculate total defective grains, standard deduction, net weight, and grade
  useEffect(() => {
    if (formData.commodity && formData.grossWeight) {
      const params = formData.gradingParams;

      // Sum all grading parameters except moisture content
      let total = 0;
      currentGradingParams.forEach((param) => {
        if (param.name !== "moistureContent" && params[param.name]) {
          total += parseFloat(params[param.name]) || 0;
        }
      });

      setTotalDefectiveGrains(total);

      // Standard deduction is the total defective grains percentage
      const stdDeduction = total;
      setStandardDeduction(stdDeduction);

      // Calculate net weight: gross weight - (gross weight * standard deduction / 100)
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
      } else if (stdDeduction > 6) {
        setGrade("BAD GRADE - REJECT");
        setGradeColor("#DC2626");
      } else {
        setGrade("GRADE1 - 4.0");
        setGradeColor("#16A34A");
      }
    }
  }, [
    formData.gradingParams,
    formData.grossWeight,
    formData.commodity,
    currentGradingParams,
  ]);

  const handleInputChange = (field: string, value: string) => {
    onFormDataChange({
      ...formData,
      [field]: value,
    });
  };

  const handleGradingParamChange = (paramName: string, value: string) => {
    onFormDataChange({
      ...formData,
      gradingParams: {
        ...formData.gradingParams,
        [paramName]: value,
      },
    });
  };

  const handleContinue = () => {
    // Check if bad grade
    if (standardDeduction > 6) {
      alert(
        "This commodity has a bad grade and cannot be accepted. Please reject this deposit."
      );
      return;
    }
    onNext();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[#101828]">
          Commodity details
        </h2>
        <p className="text-sm text-[#667085]">
          Record commodity specifications and measurements
        </p>
      </div>

      {/* Client and Warehouse Selection */}
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Client name"
          placeholder="Select client"
          value={formData.clientName}
          onChange={(value) => handleInputChange("clientName", value || "")}
          data={["Robinson", "Amina Bello", "Emeka Obi", "Fatima Yusuf"]}
          classNames={{
            label: "text-sm font-medium text-[#344054] mb-1.5",
            input: "!h-11 !rounded-lg border-[#D0D5DD]",
          }}
        />
        <Select
          label="Warehouse"
          placeholder="Select warehouse"
          value={formData.warehouse}
          onChange={(value) => handleInputChange("warehouse", value || "")}
          data={["Lagos Warehouse", "Abuja Warehouse", "Kano Warehouse"]}
          classNames={{
            label: "text-sm font-medium text-[#344054] mb-1.5",
            input: "!h-11 !rounded-lg border-[#D0D5DD]",
          }}
        />
      </div>

      {/* Commodity Type Selection */}
      <Select
        label="Commodity type"
        placeholder="Select commodity"
        value={formData.commodity}
        onChange={(value) => {
          handleInputChange("commodity", value || "");
          // Reset grading params when commodity changes
          onFormDataChange({
            ...formData,
            commodity: value || "",
            gradingParams: {},
          });
        }}
        data={["Maize", "Rice", "Wheat"]}
        classNames={{
          label: "text-sm font-medium text-[#344054] mb-1.5",
          input: "!h-11 !rounded-lg border-[#D0D5DD]",
        }}
      />

      {/* Gross Weight */}
      <TextInput
        label="Gross weight"
        placeholder="Enter gross weight"
        value={formData.grossWeight}
        onChange={(e) => handleInputChange("grossWeight", e.target.value)}
        classNames={{
          label: "text-sm font-medium text-[#344054] mb-1.5",
          input: "!h-11 !rounded-lg border-[#D0D5DD]",
        }}
      />

      {/* Dynamic Grading Parameters */}
      {formData.commodity && currentGradingParams.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {currentGradingParams.map((param) => (
            <div key={param.name}>
              <TextInput
                label={param.label}
                placeholder={param.placeholder}
                value={formData.gradingParams[param.name] || ""}
                onChange={(e) =>
                  handleGradingParamChange(param.name, e.target.value)
                }
                classNames={{
                  label: "text-sm font-medium text-[#344054] mb-1.5",
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
                rightSection={
                  param.maxValue ? (
                    <span className="text-xs text-[#667085]">
                      (Max {param.maxValue}%)
                    </span>
                  ) : null
                }
              />
            </div>
          ))}
        </div>
      )}

      {/* Calculations Display */}
      {formData.commodity && formData.grossWeight && (
        <div className="grid grid-cols-3 gap-4 p-4 bg-[#F9FAFB] rounded-lg">
          <div>
            <p className="text-sm font-medium text-[#101828]">
              {formData.commodity.toUpperCase()}(Auto-calculated):{" "}
              <span style={{ color: gradeColor }}>{grade}</span>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#101828]">
              Net Weight:{" "}
              <span className="text-[#16A34A]">{netWeight.toFixed(3)}%</span>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#101828]">
              Standard Deduction:{" "}
              <span className="text-[#16A34A]">
                {standardDeduction.toFixed(1)}%
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={onBack}
          className="px-6 py-2.5 text-sm font-semibold text-[#344054] bg-white border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          disabled={!formData.commodity || !formData.grossWeight}
          className="px-6 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
