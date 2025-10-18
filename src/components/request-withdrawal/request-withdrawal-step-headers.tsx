"use client";
import { Wallet } from "iconsax-reactjs";
import { BsBricks } from "react-icons/bs";
import { GrStorage } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import clsx from "clsx";

export const RequestWithdrawalStepHeaders = ({ step }: { step: number }) => {
  return (
    <header className="bg-white py-5 px-4 rounded-lg flex items-center gap-5 w-full ">
      <div className="flex items-center gap-1 flex-col">
        <span className="p-2 px-3  rounded flex items-center justify-center text-xs font-medium text-[#9747FF] bg-[#ECDDFF]">
          <BsBricks size={16} />
        </span>
        <p className="text-xs font-medium text-gray-700">Select Commodity</p>
      </div>
      <span
        className={clsx(
          "h-0.5  flex-1",
          step >= 2 ? "bg-blue-500" : "bg-gray-200"
        )}
      />
      <div className="flex items-center gap-1 flex-col">
        <span className="p-2 px-3  rounded flex items-center justify-center text-xs font-medium text-yellow-600 bg-yellow-50">
          <GrStorage size={16} />
        </span>
        <p className="text-xs font-medium text-gray-700">Storage Fee</p>
      </div>
      <span
        className={clsx(
          "h-0.5 flex-1",
          step >= 3 ? "bg-blue-500" : "bg-gray-200"
        )}
      />
      <div className="flex items-center gap-1 flex-col">
        <span className="p-2 px-3 rounded flex items-center justify-center text-xs font-medium text-blue-500 bg-blue-100">
          <Wallet size={16} />
        </span>
        <p className="text-xs font-medium text-gray-700">Payment</p>
      </div>
      <span
        className={clsx(
          "h-0.5 flex-1",
          step >= 4 ? "bg-blue-500" : "bg-gray-200"
        )}
      />
      <div className="flex items-center gap-1 flex-col">
        <span className="p-2 px-3  rounded flex items-center justify-center text-xs font-medium text-green-500 bg-green-100">
          <FaCheck size={16} />
        </span>

        <p className="text-xs font-medium text-gray-700">Confirm</p>
      </div>
    </header>
  );
};
