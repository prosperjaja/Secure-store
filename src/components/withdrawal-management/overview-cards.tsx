"use client";

import { DocumentText, TickCircle, Clock, CloseCircle } from "iconsax-reactjs";

export const WithdrawalOverviewCards = () => {
  const cards = [
    {
      title: "ALL WITHDRAWAL REQUEST",
      value: "234",
      subtitle: "+53 registered last 2 months",
      icon: DocumentText,
      iconBg: "#667085",
      cardBg: "#EFF0FE",
    },
    {
      title: "APPROVED REQUEST",
      value: "200",
      subtitle: "+53 registered last 2 months",
      icon: TickCircle,
      iconBg: "#12B76A",
      cardBg: "#ECFDF5",
    },
    {
      title: "PENDING REQUEST",
      value: "25",
      subtitle: "+53 pledged last 2 months",
      icon: Clock,
      iconBg: "#F79009",
      cardBg: "#FFFAEB",
    },
    {
      title: "REJECTED REQUEST",
      value: "15",
      subtitle: "+53 cancelled last 2 months",
      icon: CloseCircle,
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
