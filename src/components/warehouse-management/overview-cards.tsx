"use client";

import { Building, Box1, Chart } from "iconsax-reactjs";

type OverviewCardsProps = {
  totalWarehouses: number;
  totalCapacity: number;
  totalUtilization: number;
};

export const WarehouseOverviewCards = ({
  totalWarehouses,
  totalCapacity,
  totalUtilization,
}: OverviewCardsProps) => {
  const cards = [
    {
      title: "Total Warehouses",
      value: totalWarehouses.toString(),
      icon: Building,
      iconBg: "#EEF2FF",
      iconColor: "#4F46E5",
    },
    {
      title: "Total Warehouse Capacity",
      value: `${totalCapacity}MT`,
      icon: Box1,
      iconBg: "#FEF3C7",
      iconColor: "#F59E0B",
    },
    {
      title: "Total Utilization",
      value: `${totalUtilization}MT`,
      icon: Chart,
      iconBg: "#DCFCE7",
      iconColor: "#16A34A",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl border border-[#E5E7EB] p-5 flex items-center gap-4"
        >
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: card.iconBg }}
          >
            <card.icon size={24} color={card.iconColor} variant="Bold" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#667085]">{card.title}</span>
            <span className="text-2xl font-bold text-[#101828]">
              {card.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
