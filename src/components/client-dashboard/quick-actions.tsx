"use client";

import { ArrowRight, Box, Receive } from "iconsax-reactjs";
import { Button } from "../ui/mantine/button";
import { useRouter } from "next/navigation";

const systemStatus = [
  {
    label: "Commodity Withdrawn",
    value: "100 MT",
  },
  {
    label: "Loan Repayment",
    value: "100 MT",
  },
];

export const QuickActions = () => {
  const { push } = useRouter();
  return (
    <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-gradient-to-r from-[#3850d9] to-[#521ee4] w-full">
      <div className="flex flex-col gap-2">
        <span className="flex flex-col">
          <h3 className="text-white text-xl font-medium">Quick Actions</h3>
          <p className="text-white text-sm font-medium">
            Manage your warehouse operations efficiently
          </p>
        </span>
        {/* Action Buttons */}
        <div className="flex items-center gap-2 my-3">
          <Button
            variant="primary"
            size="sm"
            leftSection={<Box size={16} color="#fff" />}
            classNames={{
              root: "!rounded-lg !bg-white/15 !backdrop-blur-lg !border !border-white/30 !shadow-lg !font-medium",
              label: "!text-[#fff] !font-semibold !font-sans !text-sm",
            }}
            onClick={() => push("/loan")}
          >
            Take Loan
          </Button>
          <Button
            variant="primary"
            size="sm"
            leftSection={<Receive size={16} color="#3850d9" />}
            classNames={{
              root: "!rounded-lg !bg-[#fff]",
              label: "!text-[#3850d9] !font-semibold !font-sans !text-sm",
            }}
            onClick={() => push("/request-withdrawal")}
          >
            Request Withdrawal
          </Button>
          <Button
            variant="primary"
            size="sm"
            leftSection={<ArrowRight size={16} color="#fff" />}
            classNames={{
              root: "!rounded-lg  !border !border-white/30 !shadow-lg !font-medium !bg-transparent",
              label: "!text-[#fff] !font-semibold !font-sans !text-sm",
            }}
            onClick={() => push("/commodity-management")}
          >
            Trade Commodities
          </Button>
        </div>
      </div>

      <figure className="rounded-lg bg-white/15 backdrop-blur-lg border border-white/30 shadow-lg flex flex-col p-2 gap-2">
        <p className="text-white text-base font-medium">System Status</p>

        <div className="flex flex-col gap-1">
          {systemStatus.map((status, idx) => (
            <span key={idx} className="flex items-center gap-1">
              <p className="text-white text-sm font-medium">{status.label}</p> -
              <p className="text-white text-sm font-medium">{status.value}</p>
            </span>
          ))}
        </div>
      </figure>
    </div>
  );
};
