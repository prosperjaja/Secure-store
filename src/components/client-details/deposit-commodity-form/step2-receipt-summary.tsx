"use client";

import { Button } from "../../ui/mantine/button";
import { CommodityFormData, ReceiptSummary } from "./index";

interface Step2ReceiptSummaryProps {
  receiptSummary: ReceiptSummary;
  formData: CommodityFormData;
  onBack: () => void;
  onGenerate: () => void;
}

export const Step2ReceiptSummary = ({
  receiptSummary,
  formData,
  onBack,
  onGenerate,
}: Step2ReceiptSummaryProps) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Receipt Summary Card */}
      <div className="bg-[#F9FAFB] rounded-xl border border-[#E5E7EB] p-6">
        <h3 className="text-base font-semibold text-[#101828] mb-4">
          Receipt Summary
        </h3>

        <div className="flex flex-col gap-4">
          {/* Commodity */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">Commodity</span>
            <span className="text-sm font-semibold text-[#101828]">
              {receiptSummary.commodity}
            </span>
          </div>

          {/* Auto-calculated Grade */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">
              Auto-calculated grade
            </span>
            <span className="text-sm font-semibold text-[#101828]">
              Grade {receiptSummary.grade}
            </span>
          </div>

          {/* Net Weight */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">Net weight</span>
            <span className="text-sm font-semibold text-[#101828]">
              {receiptSummary.netWeight}
            </span>
          </div>

          {/* Standard Deduction */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">Standard deduction</span>
            <span className="text-sm font-semibold text-[#101828]">
              {receiptSummary.standardDeduction}
            </span>
          </div>
        </div>
      </div>

      {/* Commodity Details Card */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
        <h3 className="text-base font-semibold text-[#101828] mb-4">
          Commodity Details
        </h3>

        <div className="flex flex-col gap-3">
          {/* Gross Weight */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#667085]">Gross weight</span>
            <span className="text-sm text-[#344054]">
              {formData.grossWeight}mt
            </span>
          </div>

          {/* Foreign Matter */}
          {formData.foreignMatter && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">Foreign matter</span>
              <span className="text-sm text-[#344054]">
                {formData.foreignMatter}%
              </span>
            </div>
          )}

          {/* Inorganic Matter */}
          {formData.inorganicMatter && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">Inorganic matter</span>
              <span className="text-sm text-[#344054]">
                {formData.inorganicMatter}%
              </span>
            </div>
          )}

          {/* Broken Kernels */}
          {formData.brokenKernels && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">Broken kernels</span>
              <span className="text-sm text-[#344054]">
                {formData.brokenKernels}%
              </span>
            </div>
          )}

          {/* Pest Damaged Grains */}
          {formData.pestDamagedGrains && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">
                Pest damaged grains
              </span>
              <span className="text-sm text-[#344054]">
                {formData.pestDamagedGrains}%
              </span>
            </div>
          )}

          {/* Rotten & Diseased Grains */}
          {formData.rottenDiseasedGrains && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">
                Rotten & diseased grains
              </span>
              <span className="text-sm text-[#344054]">
                {formData.rottenDiseasedGrains}%
              </span>
            </div>
          )}

          {/* Discolored Grains */}
          {formData.discoloredGrains && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">Discolored grains</span>
              <span className="text-sm text-[#344054]">
                {formData.discoloredGrains}%
              </span>
            </div>
          )}

          {/* Total Defective Grains */}
          {formData.totalDefectiveGrains && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">
                Total defective grains
              </span>
              <span className="text-sm text-[#344054]">
                {formData.totalDefectiveGrains}%
              </span>
            </div>
          )}

          {/* Moisture Content */}
          {formData.moistureContent && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#667085]">Moisture content</span>
              <span className="text-sm text-[#344054]">
                {formData.moistureContent}%
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
        <Button
          variant="outline"
          onClick={onBack}
          classNames={{
            root: "!border-[#D0D5DD] !rounded-lg !h-10 flex-1",
          }}
        >
          Back
        </Button>
        <Button
          onClick={onGenerate}
          classNames={{
            root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-10 flex-1",
          }}
        >
          Generate Warehouse Receipt
        </Button>
      </div>
    </div>
  );
};
