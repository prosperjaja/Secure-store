"use client";

import { useState } from "react";
import { Modal, TextInput, Select } from "@mantine/core";

type AddCommodityModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (commodity: {
    type: string;
    name: string;
    code: string;
    unit: string;
    gradingLogic: string;
    numberOfGrade: string;
  }) => void;
};

const commodityTypes = [
  "Grains",
  "Cereals",
  "Legumes",
  "Oilseeds",
  "Cash Crops",
  "Others",
];

const unitsOfMeasurement = [
  "Metric Tonnes (MT)",
  "Kilograms (kg)",
  "Bags",
  "Litres",
  "Units",
];

const gradingLogics = [
  "Percentage-based",
  "Score-based",
  "Pass/Fail",
  "Custom",
];

const numberOfGrades = ["2", "3", "4", "5"];

export const AddCommodityModal = ({
  opened,
  onClose,
  onAdd,
}: AddCommodityModalProps) => {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    code: "",
    unit: "",
    gradingLogic: "",
    numberOfGrade: "",
  });

  const handleSubmit = () => {
    onAdd(formData);
    setFormData({
      type: "",
      name: "",
      code: "",
      unit: "",
      gradingLogic: "",
      numberOfGrade: "",
    });
  };

  const handleClose = () => {
    setFormData({
      type: "",
      name: "",
      code: "",
      unit: "",
      gradingLogic: "",
      numberOfGrade: "",
    });
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title=""
      withCloseButton={false}
      centered
      size="md"
      radius="lg"
      padding={0}
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#101828]">
            Add New Commodity
          </h2>
          <p className="text-sm text-[#667085]">
            Create a new commodity and define its basic attributes, storage unit, and operational details.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#F9FAFB] rounded-xl p-4 flex flex-col gap-4">
          {/* Commodity Type and Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Commodity type/ Category
              </label>
              <Select
                placeholder="Select here"
                value={formData.type}
                onChange={(value) =>
                  setFormData({ ...formData, type: value || "" })
                }
                data={commodityTypes}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Commodity Name
              </label>
              <TextInput
                placeholder="Enter name of commodity"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                }}
              />
            </div>
          </div>

          {/* Code and Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Commodity Code/ID
              </label>
              <TextInput
                placeholder="Enter code"
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Unit of Measurement
              </label>
              <Select
                placeholder="Select unit for measurement"
                value={formData.unit}
                onChange={(value) =>
                  setFormData({ ...formData, unit: value || "" })
                }
                data={unitsOfMeasurement}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                }}
              />
            </div>
          </div>

          {/* Grading Logic and Number of Grade */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Grading Logic
              </label>
              <Select
                placeholder="Select preferred warehouse"
                value={formData.gradingLogic}
                onChange={(value) =>
                  setFormData({ ...formData, gradingLogic: value || "" })
                }
                data={gradingLogics}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Number of Grade
              </label>
              <Select
                placeholder="Select preferred warehouse"
                value={formData.numberOfGrade}
                onChange={(value) =>
                  setFormData({ ...formData, numberOfGrade: value || "" })
                }
                data={numberOfGrades}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
          >
            Add Commodity
          </button>
        </div>
      </div>
    </Modal>
  );
};
