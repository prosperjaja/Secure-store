"use client";

import { ArrowDown, ArrowUp } from "iconsax-reactjs";

interface CommoditySummaryStatsProps {
  commodity: string;
}

export const CommoditySummaryStats = ({
  commodity,
}: CommoditySummaryStatsProps) => {
  // Mock data - in real app, this would come from props or API based on selected commodity
  const stats = [
    {
      icon: "📦",
      bgColor: "bg-[#EFF8FF]",
      iconBgColor: "bg-[#B2DDFF]",
      value: "9800",
      label: "Total Volume Held",
      subtext: "+18% from the last month",
      change: 10,
      isPositive: true,
      changeColor: "text-[#12B76A]",
      changeBg: "bg-[#ECFDF3]",
    },
    {
      icon: "📄",
      bgColor: "bg-[#F0FDF4]",
      iconBgColor: "bg-[#86EFAC]",
      value: "5",
      label: "Active Receipts",
      subtext: "+1 new receipt in July",
      change: 5,
      isPositive: true,
      changeColor: "text-[#12B76A]",
      changeBg: "bg-[#ECFDF3]",
    },
    {
      icon: "🔒",
      bgColor: "bg-[#FEF2F2]",
      iconBgColor: "bg-[#FECACA]",
      value: "1",
      label: "Pledged Receipts",
      subtext: "2 less from last month",
      change: 2,
      isPositive: false,
      changeColor: "text-[#F04438]",
      changeBg: "bg-[#FEF3F2]",
    },
    {
      icon: "💹",
      bgColor: "bg-[#F5F3FF]",
      iconBgColor: "bg-[#DDD6FE]",
      value: "2",
      label: "Available for Trade",
      subtext: "+12% from the last month",
      change: 12,
      isPositive: true,
      changeColor: "text-[#12B76A]",
      changeBg: "bg-[#ECFDF3]",
    },
  ];

  console.log(commodity);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`${stat.bgColor} rounded-xl p-3 flex flex-col gap-3 border border-gray-100`}
        >
          <div className="flex items-start justify-between">
            <div
              className={`${stat.iconBgColor} w-10 h-10 rounded-full flex items-center justify-center text-xl`}
            >
              {stat.icon}
            </div>
            <span
              className={`${stat.changeBg} ${stat.changeColor} px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}
            >
              {stat.isPositive ? (
                <ArrowUp size={12} />
              ) : (
                <ArrowDown size={12} />
              )}
              {stat.change}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-[#101828]">
              {stat.value}
            </span>
            <span className="text-sm font-semibold text-[#344054]">
              {stat.label}
            </span>
            <span className="text-xs text-[#667085]">{stat.subtext}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
