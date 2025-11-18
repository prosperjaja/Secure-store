"use client";

import { TextInput } from "../../ui/mantine/TextInput";
import { Textarea } from "../../ui/mantine/textarea";
import { Button } from "../../ui/mantine/button";
import { ClientRegistrationFormData } from "../../../types/client-registration";

interface Step4Props {
  formData: ClientRegistrationFormData;
  onFormDataChange: (data: ClientRegistrationFormData) => void;
}

export const Step4AccountLinking = ({
  formData,
  onFormDataChange,
}: Step4Props) => {
  const handleChange = (
    field: keyof ClientRegistrationFormData,
    value: string
  ) => {
    onFormDataChange({
      ...formData,
      [field]: value,
    });
  };

  const generateWarehouseId = () => {
    const randomId = `WH-${Math.floor(
      1000 + Math.random() * 9000
    )}-${Math.floor(1000 + Math.random() * 9000)}`;
    handleChange("warehouseId", randomId);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#101828]">
          Account Linking
        </h3>
        <p className="text-sm text-[#667085]">
          Set up warehouse account details
        </p>
      </div>

      <div className="flex flex-col gap-4 bg-[#F9F8F8] p-3 rounded-xl">
        {/* Warehouse ID */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Warehouse ID
          </label>
          <div className="flex gap-2">
            <TextInput
              value={formData.warehouseId || ""}
              readOnly
              classNames={{
                root: "flex-1",
                input: "bg-[#F9FAFB]",
              }}
            />
            <Button
              onClick={generateWarehouseId}
              classNames={{
                root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg",
              }}
            >
              Generate
            </Button>
          </div>
        </div>

        {/* Occupation */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Occupation
          </label>
          <TextInput
            placeholder="Enter Occupation here"
            value={formData.occupation || ""}
            onChange={(e) => handleChange("occupation", e.target.value)}
          />
        </div>

        {/* Brief Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-[#344054]">
            Brief Description
          </label>
          <Textarea
            placeholder="Write a brief discussion here"
            rows={5}
            value={formData.description || ""}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
