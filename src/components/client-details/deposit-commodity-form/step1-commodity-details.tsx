"use client";

import { useState } from "react";
import { TextInput } from "@mantine/core";
import { Button } from "../../ui/mantine/button";
import { CommodityFormData } from "./index";
import { toast } from "sonner";

interface Step1CommodityDetailsProps {
  formData: CommodityFormData;
  onContinue: (data: CommodityFormData) => void;
  onCancel: () => void;
}

export const Step1CommodityDetails = ({
  formData: initialData,
  onContinue,
  onCancel,
}: Step1CommodityDetailsProps) => {
  const [formData, setFormData] = useState<CommodityFormData>(initialData);

  const handleChange = (field: keyof CommodityFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContinue = () => {
    // Basic validation
    if (!formData.grossWeight) {
      toast.error("Please enter gross weight");
      return;
    }
    onContinue(formData);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium text-[#344054]">
          Commodity details
        </h3>

        {/* Gross Weight */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Gross weight (mt)
          </label>
          <TextInput
            placeholder="Enter gross weight"
            value={formData.grossWeight}
            onChange={(e) => handleChange("grossWeight", e.target.value)}
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Foreign Matter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Foreign matter (%)
          </label>
          <TextInput
            placeholder="Enter foreign matter percentage"
            value={formData.foreignMatter}
            onChange={(e) => handleChange("foreignMatter", e.target.value)}
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Inorganic Matter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Inorganic matter (%)
          </label>
          <TextInput
            placeholder="Enter inorganic matter percentage"
            value={formData.inorganicMatter}
            onChange={(e) => handleChange("inorganicMatter", e.target.value)}
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Broken Kernels */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Broken kernels (%)
          </label>
          <TextInput
            placeholder="Enter broken kernels percentage"
            value={formData.brokenKernels}
            onChange={(e) => handleChange("brokenKernels", e.target.value)}
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Pest Damaged Grains */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Pest damaged grains (%)
          </label>
          <TextInput
            placeholder="Enter pest damaged grains percentage"
            value={formData.pestDamagedGrains}
            onChange={(e) => handleChange("pestDamagedGrains", e.target.value)}
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Rotten & Diseased Grains */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Rotten & diseased grains (%)
          </label>
          <TextInput
            placeholder="Enter rotten & diseased grains percentage"
            value={formData.rottenDiseasedGrains}
            onChange={(e) =>
              handleChange("rottenDiseasedGrains", e.target.value)
            }
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Discolored Grains */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Discolored grains (%)
          </label>
          <TextInput
            placeholder="Enter discolored grains percentage"
            value={formData.discoloredGrains}
            onChange={(e) => handleChange("discoloredGrains", e.target.value)}
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Total Defective Grains */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Total defective grains (%)
          </label>
          <TextInput
            placeholder="Enter total defective grains percentage"
            value={formData.totalDefectiveGrains}
            onChange={(e) =>
              handleChange("totalDefectiveGrains", e.target.value)
            }
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>

        {/* Moisture Content */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[#344054]">
            Moisture content (%)
          </label>
          <TextInput
            placeholder="Enter moisture content percentage"
            value={formData.moistureContent}
            onChange={(e) => handleChange("moistureContent", e.target.value)}
            classNames={{
              input: "!h-10 !rounded-lg",
            }}
            type="number"
            step="0.01"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
        <Button
          variant="outline"
          onClick={onCancel}
          classNames={{
            root: "!border-[#D0D5DD] !rounded-lg !h-10 flex-1",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleContinue}
          classNames={{
            root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-10 flex-1",
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
