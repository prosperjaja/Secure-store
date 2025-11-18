"use client";

import { Graph, Box, Archive, TrendUp } from "iconsax-reactjs";

export const TransactionOverviewCards = () => {
  const cards = [
    {
      title: "TOTAL TRANSACTION",
      value: "420",
      subtitle: "+13 registered last 2 months",
      icon: Graph,
      iconBg: "#667085",
      cardBg: "#EFF0FE",
    },
    {
      title: "TOTAL DEPOSIT",
      value: "56",
      subtitle: "+12% collected last 2 months",
      icon: Box,
      iconBg: "#12B76A",
      cardBg: "#ECFDF5",
    },
    {
      title: "TOTAL PLEDGES",
      value: "72",
      subtitle: "+3 pledged in last 2 months",
      icon: Archive,
      iconBg: "#F79009",
      cardBg: "#FFFAEB",
    },
    {
      title: "TOTAL DISPATCHES",
      value: "100",
      subtitle: "+4 dispatched last 2 months",
      icon: TrendUp,
      iconBg: "#F04438",
      cardBg: "#FFF1F1",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <h3 className="text-2xl font-bold text-[#101828]">{card.value}</h3>
            <p className="text-sm text-[#667085]">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
