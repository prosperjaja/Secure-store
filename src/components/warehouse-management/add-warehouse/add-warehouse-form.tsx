"use client";

import { useState, useEffect } from "react";
import { TextInput, Select } from "@mantine/core";
import { CloseCircle } from "iconsax-reactjs";

type AddWarehouseFormProps = {
  onClose?: () => void;
  onSuccess?: () => void;
};

type WarehouseFormData = {
  facilityName: string;
  facilityType: string;
  facilityCode: string;
  stateRegion: string;
  physicalAddress: string;
  storageCapacity: string;
};

// Generate a random facility code
const generateFacilityCode = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `WHS-2025-${randomNum}`;
};

export const AddWarehouseForm = ({
  onClose,
  onSuccess,
}: AddWarehouseFormProps) => {
  const [formData, setFormData] = useState<WarehouseFormData>({
    facilityName: "",
    facilityType: "",
    facilityCode: "",
    stateRegion: "",
    physicalAddress: "",
    storageCapacity: "",
  });

  // Generate facility code on mount
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      facilityCode: generateFacilityCode(),
    }));
  }, []);

  const handleInputChange = (field: keyof WarehouseFormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    // Here you would typically make an API call to save the warehouse
    console.log("Creating warehouse with data:", formData);
    onSuccess?.();
    onClose?.();
  };

  const storageTypes = [
    "General Warehouse",
    "Cold Storage",
    "Grain Silo",
    "Bonded Warehouse",
    "Distribution Center",
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Top Header */}
      <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB] bg-white">
        <div>
          <h1 className="text-xl font-bold text-[#101828]">
            Create a New Warehouse Facility
          </h1>
          <p className="text-sm text-[#667085]">
            Fill in the warehouse details, assign a manager, and confirm setup
            to make this facility available for deposits and receipts.
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
        >
          <CloseCircle size={24} color="#667085" />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Step Navigation Sidebar */}
        {/* <div className="w-56 border-r border-[#E5E7EB] bg-white p-6 flex-shrink-0">
          <div className="flex flex-col gap-0">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold bg-[#4F46E5] text-white">
                1
              </div>
              <span className="text-sm font-medium text-[#4F46E5]">
                Basic Information
              </span>
            </div>
          </div>
        </div> */}

        {/* Form Content */}
        <div className="flex-1 p-8 overflow-y-auto bg-white">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <h2 className="text-xl font-semibold text-[#101828]">
                Basic Information
              </h2>
              <p className="text-sm text-[#667085]">
                Record new warehouse details and accept commodities from a
                client
              </p>
            </div>

            {/* Form Fields */}
            <div className="bg-[#F9FAFB] rounded-xl p-6 flex flex-col gap-5">
              {/* Row 1: Facility Name, Type of Storage Facility */}
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="Facility name"
                  placeholder="Enter facility name"
                  value={formData.facilityName}
                  onChange={(e) =>
                    handleInputChange("facilityName", e.target.value)
                  }
                  classNames={{
                    label: "text-sm font-medium text-[#344054] mb-1.5",
                    input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                  }}
                />
                <Select
                  label="Type of Storage Facility"
                  placeholder="Select storage facility"
                  value={formData.facilityType}
                  onChange={(value) =>
                    handleInputChange("facilityType", value || "")
                  }
                  data={storageTypes}
                  classNames={{
                    label: "text-sm font-medium text-[#344054] mb-1.5",
                    input:
                      "!h-11 !rounded-lg border-[#D0D5DD] !text-[#000] bg-white",
                    dropdown: "!text-[#000]",
                  }}
                />
              </div>

              {/* Row 2: Facility Code, State/Region */}
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="Facility Code /ID"
                  placeholder="Auto generated"
                  value={formData.facilityCode}
                  disabled
                  classNames={{
                    label: "text-sm font-medium text-[#344054] mb-1.5",
                    input:
                      "!h-11 !rounded-lg border-[#D0D5DD] bg-[#F9FAFB] !text-[#000] italic",
                  }}
                />
                <TextInput
                  label="State/ Region"
                  placeholder="e.g Lagos State"
                  value={formData.stateRegion}
                  onChange={(e) =>
                    handleInputChange("stateRegion", e.target.value)
                  }
                  classNames={{
                    label: "text-sm font-medium text-[#344054] mb-1.5",
                    input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                  }}
                />
              </div>

              {/* Row 3: Physical Address, Storage Capacity */}
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="Physical address"
                  placeholder="e.g Plot 24, Farm Road, Kano"
                  value={formData.physicalAddress}
                  onChange={(e) =>
                    handleInputChange("physicalAddress", e.target.value)
                  }
                  classNames={{
                    label: "text-sm font-medium text-[#344054] mb-1.5",
                    input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                  }}
                />
                <TextInput
                  label="Storage Capacity"
                  placeholder="e.g 5000 MT"
                  value={formData.storageCapacity}
                  onChange={(e) =>
                    handleInputChange("storageCapacity", e.target.value)
                  }
                  classNames={{
                    label: "text-sm font-medium text-[#344054] mb-1.5",
                    input: "!h-11 !rounded-lg border-[#D0D5DD] bg-white",
                  }}
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSubmit}
                className="px-8 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
