"use client";

import { useState } from "react";
import { Modal, TextInput, Select } from "@mantine/core";

type FeePolicy = {
  feeType: string;
  warehouse: string;
  commodity: string;
  rate: string;
  billingFrequency: string;
  gracePeriod: string;
  latePenalty: string;
  status: "active" | "inactive";
};

type AddFeePolicyModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (policy: FeePolicy) => void;
};

const feeTypes = ["Per Mt / Month", "Per Bag / Week", "Per Mt / Day", "Flat Rate"];
const warehouses = ["Warehouse A", "Warehouse B", "Warehouse C", "All Warehouses"];
const commodities = ["Maize", "Rice", "Wheat", "Crude Oil", "Sorghum"];
const billingFrequencies = ["Daily", "Weekly", "Monthly", "Quarterly", "Annually"];
const gracePeriods = ["3 days", "7 days", "14 days", "30 days"];
const latePenalties = ["1%", "2%", "3%", "5%", "10%"];

export const AddFeePolicyModal = ({
  opened,
  onClose,
  onAdd,
}: AddFeePolicyModalProps) => {
  const [formData, setFormData] = useState<FeePolicy>({
    feeType: "",
    warehouse: "",
    commodity: "",
    rate: "",
    billingFrequency: "",
    gracePeriod: "",
    latePenalty: "",
    status: "active",
  });

  const handleSubmit = () => {
    onAdd(formData);
    setFormData({
      feeType: "",
      warehouse: "",
      commodity: "",
      rate: "",
      billingFrequency: "",
      gracePeriod: "",
      latePenalty: "",
      status: "active",
    });
  };

  const handleClose = () => {
    setFormData({
      feeType: "",
      warehouse: "",
      commodity: "",
      rate: "",
      billingFrequency: "",
      gracePeriod: "",
      latePenalty: "",
      status: "active",
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
      size="lg"
      radius="lg"
      padding={0}
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#101828]">
            Add New Fee Policy
          </h2>
          <p className="text-sm text-[#667085]">
            Define a new storage fee policy for your warehouses.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Fee Type and Warehouse */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Fee Type
              </label>
              <Select
                placeholder="Select fee type"
                value={formData.feeType}
                onChange={(value) =>
                  setFormData({ ...formData, feeType: value || "" })
                }
                data={feeTypes}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Warehouse
              </label>
              <Select
                placeholder="Select warehouse"
                value={formData.warehouse}
                onChange={(value) =>
                  setFormData({ ...formData, warehouse: value || "" })
                }
                data={warehouses}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
          </div>

          {/* Commodity and Rate */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Commodity
              </label>
              <Select
                placeholder="Select commodity"
                value={formData.commodity}
                onChange={(value) =>
                  setFormData({ ...formData, commodity: value || "" })
                }
                data={commodities}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Rate
              </label>
              <TextInput
                placeholder="Enter rate"
                value={formData.rate}
                onChange={(e) =>
                  setFormData({ ...formData, rate: e.target.value })
                }
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
          </div>

          {/* Billing Frequency and Grace Period */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Billing Frequency
              </label>
              <Select
                placeholder="Select frequency"
                value={formData.billingFrequency}
                onChange={(value) =>
                  setFormData({ ...formData, billingFrequency: value || "" })
                }
                data={billingFrequencies}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Grace Period
              </label>
              <Select
                placeholder="Select grace period"
                value={formData.gracePeriod}
                onChange={(value) =>
                  setFormData({ ...formData, gracePeriod: value || "" })
                }
                data={gracePeriods}
                classNames={{
                  input: "!h-11 !rounded-lg border-[#D0D5DD]",
                }}
              />
            </div>
          </div>

          {/* Late Penalty */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#344054] mb-1.5 block">
                Late Penalty
              </label>
              <Select
                placeholder="Select penalty"
                value={formData.latePenalty}
                onChange={(value) =>
                  setFormData({ ...formData, latePenalty: value || "" })
                }
                data={latePenalties}
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
            Add Fee Policy
          </button>
        </div>
      </div>
    </Modal>
  );
};
