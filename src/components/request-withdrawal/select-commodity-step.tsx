"use client";

import { ArrowDown2, InfoCircle } from "iconsax-reactjs";
import { Button } from "../ui/mantine/button";
import { Select, TextInput, Textarea } from "@mantine/core";

const importantInformation = [
  "Storage fees will be calculated based on your storage duration",
  "All fees must be paid before commodity withdrawal",
  "Withdrawal requests expire after 48 hours if commodities are not collected",
  "Storage fees will continue to accrue if commodities are not within 48 hours",
];

export const SelectCommodityStep = ({
  step,
  setStep,
}: {
  step: number;
  setStep: (step: number) => void;
}) => {
  return (
    <section className="flex flex-col  gap-4 p-3 bg-white rounded-lg">
      <h3 className="text-lg font-medium text-[#162964]">
        Select Commodity for Withdrawal
      </h3>
      <form className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <Select
            data={[]}
            rightSection={<ArrowDown2 size={16} />}
            placeholder="Choose a receipt"
            label={
              <p className="text-sm font-medium text-[#162964]">
                Select Receipt
              </p>
            }
            className="flex-1"
          />
          <TextInput
            placeholder="Input warehouse"
            label={
              <p className="text-sm font-medium text-[#162964]">Warehouse</p>
            }
            className="flex-1"
          />
        </div>
        <div className="flex items-center gap-3">
          <TextInput
            placeholder="Input Commodity"
            label={
              <p className="text-sm font-medium text-[#162964]">Commodity</p>
            }
            className="flex-1"
          />
          <TextInput
            placeholder="Input Availability Quality"
            label={
              <p className="text-sm font-medium text-[#162964]">
                Avaialability Quality
              </p>
            }
            className="flex-1"
          />
        </div>
        <div className="flex items-center gap-3">
          <TextInput
            placeholder="Enter Withdrawal Quantity"
            label={
              <p className="text-sm font-medium text-[#162964]">
                Withdrawal Quantity (Bags)
              </p>
            }
            className="flex-1"
          />
          <TextInput
            placeholder="Planned Withdrawal Date"
            label={
              <p className="text-sm font-medium text-[#162964]">
                Planned Withdrawal Date
              </p>
            }
            className="flex-1"
          />
        </div>
        <Select
          data={[]}
          rightSection={<ArrowDown2 size={16} />}
          placeholder="Select Reason"
          label={
            <p className="text-sm font-medium text-[#162964]">
              Reason for withdrawal
            </p>
          }
          className="flex-1"
        />
        <Textarea
          placeholder="Enter Additional Remarks"
          label={
            <p className="text-sm font-medium text-[#162964]">
              Additional Remarks
            </p>
          }
          autosize
          minRows={4}
        />
        <article className="rounded-md px-5 py-4 flex items-start gap-1 bg-yellow-100">
          <InfoCircle
            variant="Bold"
            size={16}
            color="#FFA011"
            className="mt-1"
          />
          <span className="flex flex-col">
            <h4 className="text-[#FFA011] text-base font-medium">
              Important Information
            </h4>
            <ul className="flex flex-col gap-1">
              {importantInformation.map((item, idx) => (
                <li key={idx} className="text-xs text-[#FA9600] list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </span>
        </article>
        <div className="flex items-end justify-end gap-2">
          <Button variant="outline" classNames={{ root: "!rounded-lg" }}>
            Cancel
          </Button>
          <Button
            variant="primary"
            classNames={{ root: "!rounded-lg" }}
            onClick={() => setStep(step + 1)}
          >
            Calculate Storage Fee
          </Button>
        </div>
      </form>
    </section>
  );
};
