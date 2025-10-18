"use client";

import { ArrowDown2, InfoCircle } from "iconsax-reactjs";
import { Button } from "../ui/mantine/button";
import { Select, TextInput, Textarea } from "@mantine/core";
import { useState } from "react";

interface Step1Props {
  onNext: () => void;
}

export const Step1SelectCommodity = ({ onNext }: Step1Props) => {
  const [augmentingReceipt] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-[#101828]">
          Select commodity for withdrawal
        </h2>
      </div>

      <form className="flex flex-col gap-4">
        {/* Select Receipt */}
        <Select
          data={["WR-2023-030", "WR-2023-031", "WR-2023-032"]}
          rightSection={<ArrowDown2 size={16} color="#667085" />}
          placeholder="Select a receipt for withdrawal"
          label="Select receipt"
          classNames={{
            label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
            input: "!h-11 !text-sm !border-[#D0D5DD]",
            dropdown: "!text-[#475467]",
          }}
        />
        {augmentingReceipt && (
          <Select
            label={<p>Select Augmenting Receipt</p>}
            data={["Add receipt to complete your withdrawal"]}
            rightSection={<ArrowDown2 size={16} color="#667085" />}
            placeholder="Add receipt to complete your withdrawal"
            classNames={{
              label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
              input: "!h-11 !text-sm !border-[#D0D5DD] !text-[#F04438]",
            }}
          />
        )}

        {/* Reason for Withdrawal */}
        <Textarea
          placeholder="E.g Reason for withdrawal"
          label="Reason for withdrawal"
          autosize
          minRows={3}
          classNames={{
            label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
            input: "!text-sm !border-[#D0D5DD]",
          }}
        />

        {/* Form Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            placeholder="E.g Maize"
            label="Commodity"
            classNames={{
              label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
              input: "!h-11 !text-sm !border-[#D0D5DD]",
            }}
          />
          <TextInput
            placeholder="E.g 0.2 metric tons"
            label="Available Quantity (Metric tonn)"
            classNames={{
              label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
              input: "!h-11 !text-sm !border-[#D0D5DD]",
            }}
          />
        </div>

        {/* Form Row 2 */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            placeholder="Enter withdrawal quantity"
            label="Withdrawal Quantity (Metric tons)"
            classNames={{
              label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
              input: "!h-11 !text-sm !border-[#D0D5DD]",
            }}
          />
          <Select
            data={["All status", "Active", "Pledged"]}
            rightSection={<ArrowDown2 size={16} color="#667085" />}
            placeholder="All status"
            label="Warehouse"
            defaultValue="All status"
            classNames={{
              label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
              input: "!h-11 !text-sm !border-[#D0D5DD]",
            }}
          />
        </div>

        {/* Form Row 3 */}
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            placeholder="DD/MM/YYYY"
            label="Planned withdrawal date"
            type="date"
            classNames={{
              label: "!text-sm !font-medium !text-[#344054] !mb-1.5",
              input: "!h-11 !text-sm !border-[#D0D5DD] ",
            }}
          />
        </div>

        {/* Important Information */}
        <div className="bg-[#FEF6EE] border border-[#FDB022] rounded-lg p-4 flex items-start gap-3">
          <InfoCircle
            size={20}
            color="#FDB022"
            className="mt-0.5 flex-shrink-0"
          />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-[#B54708]">
              Storage fee is calculated based on the duration your commodities
              have been stores. Fees will continue to accrue if withdrawal is
              not completed within 48 hours of approval
            </h4>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end">
          <Button
            variant="primary"
            onClick={onNext}
            classNames={{
              root: "!rounded-lg !bg-[#4F46E5] hover:!bg-[#4338CA] !px-6",
            }}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};
