"use client";

import { useState } from "react";
import { Modal, TextInput, Select } from "@mantine/core";

type AddParameterModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (parameter: {
    name: string;
    gradeA: string;
    gradeB: string;
    gradeC: string;
    unit: string;
  }) => void;
};

const units = ["%", "kg", "g", "MT", "ppm", "count"];

export const AddParameterModal = ({
  opened,
  onClose,
  onAdd,
}: AddParameterModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    gradeA: "",
    gradeB: "",
    gradeC: "",
    unit: "",
  });

  const handleSubmit = () => {
    onAdd(formData);
    setFormData({
      name: "",
      gradeA: "",
      gradeB: "",
      gradeC: "",
      unit: "",
    });
  };

  const handleClose = () => {
    setFormData({
      name: "",
      gradeA: "",
      gradeB: "",
      gradeC: "",
      unit: "",
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
            Add New Parameter
          </h2>
          <p className="text-sm text-[#667085]">
            Define a new grading metric and set acceptable values across all grade levels.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Name of Parameter */}
          <div>
            <label className="text-sm font-medium text-[#344054] mb-1.5 block">
              Name of Parameter
            </label>
            <TextInput
              placeholder="Enter here"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              classNames={{
                input: "!h-11 !rounded-lg border-[#D0D5DD]",
              }}
            />
          </div>

          {/* Grade A and Grade B */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Grade A
              </label>
              <TextInput
                placeholder="Enter name of commodity"
                value={formData.gradeA}
                onChange={(e) =>
                  setFormData({ ...formData, gradeA: e.target.value })
                }
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Grade B
              </label>
              <Select
                placeholder="Select preferred warehouse"
                value={formData.gradeB}
                onChange={(value) =>
                  setFormData({ ...formData, gradeB: value || "" })
                }
                data={["0.5", "0.7", "1.0", "1.5", "2.0"]}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
          </div>

          {/* Grade C and Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Grade C
              </label>
              <Select
                placeholder="Select preferred warehouse"
                value={formData.gradeC}
                onChange={(value) =>
                  setFormData({ ...formData, gradeC: value || "" })
                }
                data={["0.5", "0.7", "1.0", "1.5", "2.0"]}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Unit
              </label>
              <Select
                placeholder="Select preferred warehouse"
                value={formData.unit}
                onChange={(value) =>
                  setFormData({ ...formData, unit: value || "" })
                }
                data={units}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
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
            Add Parameter
          </button>
        </div>
      </div>
    </Modal>
  );
};
