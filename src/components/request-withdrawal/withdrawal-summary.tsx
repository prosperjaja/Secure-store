"use client";

import { InfoCircle } from "iconsax-reactjs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { MdCalculate } from "react-icons/md";
import { Button } from "../ui/mantine/button";
import { RiCustomerService2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

const summaryData = [
  {
    title: "Commodity",
    value: "Maize",
  },
  {
    title: "Receipt ID",
    value: "WR-2024-01",
  },
  {
    title: "Warehouse",
    value: "Funtua Grain Storage",
  },
  {
    title: "Available Quantity",
    value: "100 Bags (9,800 kg)",
  },
  {
    title: "Withdrawal Quantity",
    value: "50 Bags (4,900 kg)",
  },
  {
    title: "Storage Duration",
    value: "1 month, 10 days",
  },

  {
    title: "Total Fees",
    value: "#50,000",
  },
];

const helpData = [
  {
    title: "How to withdraw commodities?",
    icon: FaRegCircleQuestion,
  },
  {
    title: "How storage fees are calculated",
    icon: MdCalculate,
  },
  {
    title: "Payment options and methods",
    icon: CiCreditCard1,
  },
  {
    title: "Commodity pickup process",
    icon: CiDeliveryTruck,
  },
];

export const WithdrawalSummary = ({
  setStep,
}: {
  step: number;
  setStep: (step: number) => void;
}) => {
  const { push } = useRouter();

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <article className="bg-white rounded-xl flex flex-col gap-2.5 p-3 w-[60%]">
        <h3 className="text-base font-medium text-[#162964]">
          Withdrawal Summary
        </h3>
        <div className="flex flex-col gap-2.5 border-b border-[#e5e5e5] ">
          {summaryData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <p className="text-sm font-medium text-[#A2A2A2]">{item.title}</p>
              <p className="text-sm font-medium text-[#A2A2A2]">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-xs font-medium text-[#A2A2A2]">
            Once payment is complete, your withdrawal request will be sent t the
            warehouse manager for approval. You will receive a notification when
            your commodities are ready for pickup.{" "}
          </p>
          <span className="flex items-center gap-1.5 text-amber-500">
            <InfoCircle variant="Bold" size={16} color="#FFA011" />
            <p className="text-xs font-medium text-[#FFA011]">
              Estimated processing time: 24-48 hours
            </p>
          </span>
        </div>
      </article>
      <article className="bg-white rounded-xl flex flex-col gap-2.5 p-3 w-[60%]">
        <h3 className="text-base font-medium text-[#162964]">Need Help?</h3>
        <div className="flex flex-col gap-2.5 border-b border-[#e5e5e5] p-2">
          {helpData.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <item.icon size={16} color="#182E6F" />
              <p className="text-xs font-medium text-[#182E6F]">{item.title}</p>
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-[#afa4a4]">
          Still have questions?
        </p>
        <Button
          variant="outline"
          classNames={{ root: "!rounded-lg !w-full" }}
          leftSection={<RiCustomerService2Line size={16} color="#182E6F" />}
        >
          Contact Support
        </Button>
        <Button
          variant="primary"
          classNames={{ root: "!rounded-lg !w-full" }}
          onClick={() => {
            push(`/request-withdrawal`);
            setStep(1);
          }}
        >
          Finish
        </Button>
      </article>
    </div>
  );
};
