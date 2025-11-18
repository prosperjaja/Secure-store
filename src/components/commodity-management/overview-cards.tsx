"use client";

import { Weight, Box, BoxRemove } from "iconsax-reactjs";

export const CommodityOverviewCards = () => {
  const cards = [
    {
      title: "TOTAL VOLUME",
      value: "85",
      unit: "(Metric tons)",
      subtitle: "+12 volume registered last 2 months",
      icon: Weight,
      iconBg: "#12B76A",
      cardBg: "#ECFDF5",
    },
    {
      title: "TOTAL DEPOSIT",
      value: "23",
      unit: "",
      subtitle: "+13 registered last 2 months",
      icon: Box,
      iconBg: "#4F46E5",
      cardBg: "#EEF2FF",
    },
    {
      title: "TOTAL WITHDRAWAL",
      value: "10",
      unit: "",
      subtitle: "+4 withdrawal last 2 months",
      icon: BoxRemove,
      iconBg: "#F04438",
      cardBg: "#FEF3F2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-xl p-4 flex flex-col gap-3"
          style={{ backgroundColor: card.cardBg }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#667085]">
              {card.title}
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: card.iconBg }}
            >
              <card.icon size={16} color="#FFFFFF" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <h3 className="text-2xl font-bold text-[#101828]">
                {card.value}
              </h3>
              {card.unit && (
                <span className="text-sm text-[#667085]">{card.unit}</span>
              )}
            </div>
            <p className="text-sm text-[#667085]">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
