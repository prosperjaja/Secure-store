"use client";

import { GiCorn } from "react-icons/gi";
import { TextInput } from "../ui/mantine/TextInput";
import { Select } from "../ui/mantine/select";
import { ArrowDown2, InfoCircle } from "iconsax-reactjs";
import { Textarea } from "../ui/mantine/textarea";
import { CiCreditCard2 } from "react-icons/ci";
import { RiBankFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { PiMoney } from "react-icons/pi";
import { Button } from "../ui/mantine/button";

const data = [
  {
    title: "Storage Fees (N500 per bag per month)",
    value: "#25,000.00",
  },
  {
    title: "Handling Fee",
    value: "#10,000.00",
  },
  {
    title: "Total",
    value: "#35,000.00",
  },
];

const paymentMethod = [
  {
    title: "Card",
    icon: CiCreditCard2,
  },
  {
    title: "Bank Transfer",
    icon: RiBankFill,
  },
  {
    title: "USSD",
    icon: IoWalletOutline,
  },
  {
    title: "Mobile Money",
    icon: PiMoney,
  },
];

export const StorageFeeStep = ({
  step,
  setStep,
}: {
  step: number;
  setStep: (step: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <article className="bg-white rounded-xl flex flex-col gap-2.5 p-3">
        <h3 className="text-base font-medium text-[#162964]">
          Selected Commodity
        </h3>
        <figure className="flex items-center gap-1.5 bg-[#F5F5F5] p-2 rounded-lg">
          <span className="size-8 rounded-full bg-amber-100 flex items-center justify-center">
            <GiCorn size={20} className="text-amber-500" />
          </span>
          <span className="flex flex-col">
            <h4 className="text-sm font-medium text-[#A2A2A2]">
              Maize (WR-2024-01)
            </h4>
            <p className="text-xs font-medium text-[#A2A2A2]">
              Funtua Grain Storage, 100 Bags (9,800 kg)
            </p>
          </span>
        </figure>
        <div className="items-center gap-2.5 flex">
          <TextInput
            label={
              <p className="text-sm font-medium text-[#162964]">
                Withdrawal Quantity
              </p>
            }
            className="flex-1"
            placeholder="50"
            disabled
          />
          <Select
            data={["Bags", "Kilograms"]}
            rightSection={<ArrowDown2 size={16} />}
            label={
              <p className="text-sm font-medium text-[#fff] opacity-0">
                Withdrawal Quantity
              </p>
            }
            className="w-[30%]"
            disabled
            placeholder="Bags"
          />
        </div>
        <Select
          data={[]}
          label={
            <p className="text-sm font-medium text-[#162964]">
              Reason for Withdrawal
            </p>
          }
          className="flex-1"
          placeholder="Personal Use"
          disabled
          rightSection={<ArrowDown2 size={16} />}
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
          disabled
        />
      </article>
      <article className="bg-white rounded-xl flex flex-col gap-2.5 p-3">
        <h3 className="text-base font-medium text-[#162964]">
          Storage Fee Breakdown
        </h3>
        <figure className="flex items-center gap-1.5 bg-amber-100 rounded-lg p-2">
          <InfoCircle variant="Bold" color="#FFA011" size={16} />
          <p className="text-sm font-medium text-[#FFA011]">
            Storage fees are calculated based on the duration your commodities
            have been stored. Fees wi ll continue to accrue if withdrawal is not
            completed within 48 hours of approval.
          </p>
        </figure>
        <div className="flex flex-col gap-1 rounded-lg border border-[#e5e5e5] ">
          <header className="flex items-center gap-1.5 justify-between bg-gray-100 p-2 rounded-t-lg ">
            <p className="text-sm font-medium text-[#A2A2A2]">Description</p>
            <p className="text-sm font-medium text-[#A2A2A2]">Amount</p>
          </header>
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 justify-between border-b border-[#e5e5e5] p-2 last:border-b-0"
            >
              <p className="text-sm font-medium text-[#A2A2A2]">{item.title}</p>
              <p className="text-sm font-medium text-[#A2A2A2]">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {paymentMethod.map((item, idx) => (
            <figure
              className="rounded-lg p-4 flex items-center flex-col gap-1 group border-[0.5px] border-[#e5e5e5] hover:bg-[#B5C7F366] cursor-pointer transition-all duration-300"
              key={idx}
            >
              {<item.icon size={16} className="group-hover:text-blue-500" />}
              <p className="text-sm font-medium text-[#A2A2A2] group-hover:text-blue-500">
                {item.title}
              </p>
            </figure>
          ))}
        </div>
        <div className="flex items-end justify-end gap-2">
          <Button
            variant="outline"
            classNames={{ root: "!rounded-lg" }}
            onClick={() => setStep(step - 1)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            classNames={{ root: "!rounded-lg" }}
            onClick={() => setStep(step + 1)}
          >
            Proceed to Payment
          </Button>
        </div>
      </article>
    </div>
  );
};
