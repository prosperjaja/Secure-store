"use client";

import { ArrowDown, ArrowUp } from "iconsax-reactjs";

const statsData = [
  {
    label: "TOTAL RECEIPT",
    value: 426,
    change: 36,
    isPositive: true,
    description: "+36% from the last month",
    bgColor: "bg-[#F6FBFF]",
    borderColor: "border-[#E4E2F7]",
  },
  {
    label: "ACTIVE",
    value: 10,
    change: 36,
    isPositive: true,
    description: "+3 new receipts in July",
    bgColor: "bg-[#F5FFF7]",
    borderColor: "border-[#A4E4C3]",
  },
  {
    label: "LIENED",
    value: 5,
    change: 14,
    isPositive: false,
    description: "2 less from last month",
    bgColor: "bg-[#FCFBF5]",
    borderColor: "border-[#E3CB8C]",
  },
  {
    label: "CANCELLED",
    value: 5,
    change: 36,
    isPositive: true,
    description: "+1 cancelled this week",
    bgColor: "bg-[#F4F2EF]",
    borderColor: "border-[#DFDFE2]",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-2.5 rounded-lg shadow-xs">
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className={`${stat.bgColor} rounded-xl p-6 flex flex-col gap-2 border ${stat.borderColor}`}
        >
          <span className="text-xs font-medium text-[#667085] uppercase tracking-wide">
            {stat.label}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-[#101828]">
              {stat.value}
            </span>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                stat.isPositive ? "text-[#12B76A]" : "text-[#F04438]"
              }`}
            >
              {stat.isPositive ? (
                <ArrowUp size={16} />
              ) : (
                <ArrowDown size={16} />
              )}
              {stat.change}%
            </span>
          </div>
          <p
            className={`text-xs font-medium ${
              stat.isPositive ? "text-[#12B76A]" : "text-[#F04438]"
            }`}
          >
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};
