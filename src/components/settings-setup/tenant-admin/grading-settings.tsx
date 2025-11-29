"use client";

import { useState } from "react";
import { Select, NumberInput } from "@mantine/core";
import { Add } from "iconsax-reactjs";
import { AddParameterModal } from "./add-parameter-modal";
import { AddCommodityModal } from "./add-commodity-modal";

type GradeParameter = {
  id: string;
  parameter: string;
  gradeA: number;
  gradeB: number;
  gradeC: number;
  unit: string;
};

const initialParameters: GradeParameter[] = [
  { id: "1", parameter: "Foreign Matter", gradeA: 0.7, gradeB: 0.7, gradeC: 0.7, unit: "%" },
  { id: "2", parameter: "Broken Kernels", gradeA: 0.7, gradeB: 0.7, gradeC: 0.7, unit: "%" },
  { id: "3", parameter: "Moisture", gradeA: 0.7, gradeB: 0.7, gradeC: 0.7, unit: "%" },
  { id: "4", parameter: "Pest Damaged", gradeA: 0.7, gradeB: 0.7, gradeC: 0.7, unit: "%" },
  { id: "5", parameter: "Discolored", gradeA: 0.7, gradeB: 0.7, gradeC: 0.7, unit: "%" },
  { id: "6", parameter: "Total Defective", gradeA: 0.7, gradeB: 0.7, gradeC: 0.7, unit: "%" },
  { id: "7", parameter: "Standard Deduction", gradeA: 0.7, gradeB: 0.7, gradeC: 0.7, unit: "%" },
];

const commodities = ["Maize", "Rice", "Wheat", "Sorghum", "Soybeans", "Millet"];

export const GradingSettings = () => {
  const [selectedCommodity, setSelectedCommodity] = useState<string | null>("Maize");
  const [parameters, setParameters] = useState<GradeParameter[]>(initialParameters);
  const [isAddParameterOpen, setIsAddParameterOpen] = useState(false);
  const [isAddCommodityOpen, setIsAddCommodityOpen] = useState(false);

  const handleParameterChange = (
    id: string,
    field: "gradeA" | "gradeB" | "gradeC",
    value: number | string
  ) => {
    setParameters(
      parameters.map((param) =>
        param.id === id ? { ...param, [field]: value } : param
      )
    );
  };

  const handleAddParameter = (newParameter: {
    name: string;
    gradeA: string;
    gradeB: string;
    gradeC: string;
    unit: string;
  }) => {
    const newParam: GradeParameter = {
      id: String(parameters.length + 1),
      parameter: newParameter.name,
      gradeA: parseFloat(newParameter.gradeA) || 0,
      gradeB: parseFloat(newParameter.gradeB) || 0,
      gradeC: parseFloat(newParameter.gradeC) || 0,
      unit: newParameter.unit,
    };
    setParameters([...parameters, newParam]);
    setIsAddParameterOpen(false);
  };

  const handleAddCommodity = (commodity: {
    type: string;
    name: string;
    code: string;
    unit: string;
    gradingLogic: string;
    numberOfGrade: string;
  }) => {
    console.log("Adding commodity:", commodity);
    setIsAddCommodityOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#101828]">
            Grading Parameters & Range Setup
          </h2>
          <p className="text-sm text-[#667085]">
            Configure grading specifications and acceptable quality ranges for each commodity
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddCommodityOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <Add size={16} color="#344054" />
            Add new commodity
          </button>
          <button className="px-4 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer">
            Save & Apply to all Warehouses
          </button>
        </div>
      </div>

      {/* Commodity Selection */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-[#344054]">Select commodity</span>
        <Select
          value={selectedCommodity}
          onChange={setSelectedCommodity}
          data={commodities}
          classNames={{
            input: "!h-10 !rounded-lg border-[#D0D5DD] !w-48",
          }}
        />
        <div className="ml-auto">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer">
            <Add size={16} color="#344054" />
            Add New Grade
          </button>
        </div>
      </div>

      {/* Grading Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Parameter
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Grade A
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Grade B
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Grade C
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {parameters.map((param) => (
              <tr key={param.id} className="border-b border-[#E5E7EB]">
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {param.parameter}
                </td>
                <td className="py-3 px-4">
                  <NumberInput
                    value={param.gradeA}
                    onChange={(value) =>
                      handleParameterChange(param.id, "gradeA", value || 0)
                    }
                    decimalScale={1}
                    step={0.1}
                    min={0}
                    max={100}
                    classNames={{
                      input: "!h-9 !w-20 !rounded-lg border-[#D0D5DD] text-center",
                    }}
                  />
                </td>
                <td className="py-3 px-4">
                  <NumberInput
                    value={param.gradeB}
                    onChange={(value) =>
                      handleParameterChange(param.id, "gradeB", value || 0)
                    }
                    decimalScale={1}
                    step={0.1}
                    min={0}
                    max={100}
                    classNames={{
                      input: "!h-9 !w-20 !rounded-lg border-[#D0D5DD] text-center",
                    }}
                  />
                </td>
                <td className="py-3 px-4">
                  <NumberInput
                    value={param.gradeC}
                    onChange={(value) =>
                      handleParameterChange(param.id, "gradeC", value || 0)
                    }
                    decimalScale={1}
                    step={0.1}
                    min={0}
                    max={100}
                    classNames={{
                      input: "!h-9 !w-20 !rounded-lg border-[#D0D5DD] text-center",
                    }}
                  />
                </td>
                <td className="py-3 px-4 text-sm text-[#667085]">{param.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Parameters Button */}
      <button
        onClick={() => setIsAddParameterOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer w-fit"
      >
        <Add size={16} color="#344054" />
        Add New parameters
      </button>

      {/* Modals */}
      <AddParameterModal
        opened={isAddParameterOpen}
        onClose={() => setIsAddParameterOpen(false)}
        onAdd={handleAddParameter}
      />

      <AddCommodityModal
        opened={isAddCommodityOpen}
        onClose={() => setIsAddCommodityOpen(false)}
        onAdd={handleAddCommodity}
      />
    </div>
  );
};
