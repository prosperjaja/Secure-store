"use client";

import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineCallReceived, MdOutlineCallMade } from "react-icons/md";

export const TransactionSummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Transactions */}
      <div className="bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF] border border-[#E9D5FF] rounded-xl p-3 flex flex-col gap-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span
            className="size-8 rounded-full flex items-center justify-center shadow-md"
            style={{
              background: "#fff",
              color: "#7C3AED",
            }}
          >
            <FaArrowRightArrowLeft size={16} />
          </span>
          <span className="flex items-center gap-1 px-2 py-1 bg-white text-[#12B76A] rounded-full text-xs font-medium shadow-sm">
            <ArrowUp2 size={14} />
            12%
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[#7C3AED] font-medium">
            Total Transactions
          </span>
          <span className="text-xl font-bold text-[#6D28D9]">1,247</span>
        </div>
      </div>

      {/* Loan Count */}
      <div className="bg-gradient-to-br from-[#FEF6EE] to-[#FED7AA] border border-[#FED7AA] rounded-xl p-3 flex flex-col gap-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span
            className="size-8 rounded-full flex items-center justify-center shadow-md"
            style={{
              background: "#fff",
              color: "#FDB022",
            }}
          >
            <MdOutlineCallMade size={16} />
          </span>
          <span className="flex items-center gap-1 px-2 py-1 bg-white text-[#12B76A] rounded-full text-xs font-medium shadow-sm">
            <ArrowUp2 size={14} />
            8%
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[#EA580C] font-medium">Loan Count</span>
          <span className="text-xl font-bold text-[#C2410C]">342</span>
        </div>
      </div>

      {/* Withdrawals */}
      <div className="bg-gradient-to-br from-[#ECFDF3] to-[#A7F3D0] border border-[#A7F3D0] rounded-xl p-3 flex flex-col gap-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span
            className="size-8 rounded-full flex items-center justify-center shadow-md"
            style={{
              background: "#fff",
              color: "#12B76A",
            }}
          >
            <MdOutlineCallMade size={16} />
          </span>
          <span className="flex items-center gap-1 px-2 py-1 bg-white text-[#12B76A] rounded-full text-xs font-medium shadow-sm">
            <ArrowUp2 size={14} />
            3%
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[#059669] font-medium">
            Withdrawals
          </span>
          <span className="text-xl font-bold text-[#047857]">
            950
            <span className="text-sm text-[#059669] font-normal ml-2">MT</span>
          </span>
        </div>
      </div>

      {/* Deposits */}
      <div className="bg-gradient-to-br from-[#EFF6FF] to-[#BFDBFE] border border-[#BFDBFE] rounded-xl p-3 flex flex-col gap-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span
            className="size-8 rounded-full flex items-center justify-center shadow-md"
            style={{
              background: "#fff",
              color: "#3B82F6",
            }}
          >
            <MdOutlineCallReceived size={16} />
          </span>
          <span className="flex items-center gap-1 px-2 py-1 bg-white text-[#F04438] rounded-full text-xs font-medium shadow-sm">
            <ArrowDown2 size={14} />
            5%
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[#1D4ED8] font-medium">
            Deposits
          </span>
          <span className="text-xl font-bold text-[#1E40AF]">
            900
            <span className="text-sm text-[#1D4ED8] font-normal ml-2">MT</span>
          </span>
        </div>
      </div>
    </div>
  );
};
