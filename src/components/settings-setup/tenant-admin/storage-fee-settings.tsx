"use client";

import { useState } from "react";
import { Select } from "@mantine/core";
import { Add } from "iconsax-reactjs";
import { AddFeePolicyModal } from "./add-fee-policy-modal";

type FeePolicy = {
  id: string;
  feeType: string;
  warehouse: string;
  commodity: string;
  rate: string;
  billingFrequency: string;
  gracePeriod: string;
  latePenalty: string;
  status: "active" | "inactive";
};

const initialFeePolicies: FeePolicy[] = [
  {
    id: "1",
    feeType: "Per Mt / Month",
    warehouse: "500",
    commodity: "Maize",
    rate: "500",
    billingFrequency: "Monthly",
    gracePeriod: "7 days",
    latePenalty: "5%",
    status: "active",
  },
  {
    id: "2",
    feeType: "Per Bag / Week",
    warehouse: "500",
    commodity: "Crude Oil",
    rate: "500",
    billingFrequency: "Weekly",
    gracePeriod: "3 days",
    latePenalty: "2%",
    status: "inactive",
  },
];

const commodities = ["All commodity", "Maize", "Rice", "Wheat", "Crude Oil"];
const warehouses = ["All warehouse", "Warehouse A", "Warehouse B", "Warehouse C"];

export const StorageFeeSettings = () => {
  const [feePolicies, setFeePolicies] = useState<FeePolicy[]>(initialFeePolicies);
  const [selectedCommodity, setSelectedCommodity] = useState<string | null>("All commodity");
  const [selectedWarehouse, setSelectedWarehouse] = useState<string | null>("All warehouse");
  const [isAddPolicyOpen, setIsAddPolicyOpen] = useState(false);

  const handleToggleStatus = (id: string) => {
    setFeePolicies(
      feePolicies.map((policy) =>
        policy.id === id
          ? {
              ...policy,
              status: policy.status === "active" ? "inactive" : "active",
            }
          : policy
      )
    );
  };

  const handleAddPolicy = (policy: Omit<FeePolicy, "id">) => {
    const newPolicy: FeePolicy = {
      ...policy,
      id: String(feePolicies.length + 1),
    };
    setFeePolicies([...feePolicies, newPolicy]);
    setIsAddPolicyOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#101828]">
            Storage Fee Configuration
          </h2>
          <p className="text-sm text-[#667085]">
            Define storage fees and payment rules
          </p>
        </div>
        <button
          onClick={() => setIsAddPolicyOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#4F46E5] rounded-lg hover:bg-[#4338CA] cursor-pointer"
        >
          <Add size={16} color="#FFFFFF" />
          Add new fee policy
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-[#344054]">Filter</span>
        <Select
          value={selectedCommodity}
          onChange={setSelectedCommodity}
          data={commodities}
          classNames={{
            input: "!h-10 !rounded-lg border-[#D0D5DD] !w-48",
          }}
        />
        <Select
          value={selectedWarehouse}
          onChange={setSelectedWarehouse}
          data={warehouses}
          classNames={{
            input: "!h-10 !rounded-lg border-[#D0D5DD] !w-48",
          }}
        />
      </div>

      {/* Fee Policies Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Fee Type
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Warehouse
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Commodity
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Rate ()
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Billing Frequency
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Grace Period
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Late Penalty
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Status
              </th>
              <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {feePolicies.map((policy) => (
              <tr key={policy.id} className="border-b border-[#E5E7EB]">
                <td className="py-4 px-4 text-sm font-medium text-[#101828]">
                  {policy.feeType}
                </td>
                <td className="py-4 px-4 text-sm text-[#667085]">
                  {policy.warehouse}
                </td>
                <td className="py-4 px-4 text-sm text-[#667085]">
                  {policy.commodity}
                </td>
                <td className="py-4 px-4 text-sm text-[#667085]">
                  {policy.rate}
                </td>
                <td className="py-4 px-4 text-sm text-[#667085]">
                  {policy.billingFrequency}
                </td>
                <td className="py-4 px-4 text-sm text-[#667085]">
                  {policy.gracePeriod}
                </td>
                <td className="py-4 px-4 text-sm text-[#667085]">
                  {policy.latePenalty}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        policy.status === "active"
                          ? "bg-[#16A34A]"
                          : "bg-[#667085]"
                      }`}
                    />
                    <span
                      className={`text-sm capitalize ${
                        policy.status === "active"
                          ? "text-[#16A34A]"
                          : "text-[#667085]"
                      }`}
                    >
                      {policy.status}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => handleToggleStatus(policy.id)}
                    className={`px-4 py-1.5 text-sm font-medium rounded-lg cursor-pointer ${
                      policy.status === "active"
                        ? "text-white bg-[#EF4444] hover:bg-[#DC2626]"
                        : "text-white bg-[#16A34A] hover:bg-[#15803D]"
                    }`}
                  >
                    {policy.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Fee Policy Button */}
      <button
        onClick={() => setIsAddPolicyOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer w-fit"
      >
        <Add size={16} color="#344054" />
        Add new fee policy
      </button>

      {/* Add Fee Policy Modal */}
      <AddFeePolicyModal
        opened={isAddPolicyOpen}
        onClose={() => setIsAddPolicyOpen(false)}
        onAdd={handleAddPolicy}
      />
    </div>
  );
};
