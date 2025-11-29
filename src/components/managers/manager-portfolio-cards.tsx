"use client";

import { People, UserTick, Box1 } from "iconsax-reactjs";

type ManagerPortfolioCardsProps = {
  totalClients: number;
  activeClients: number;
  totalCommoditiesStored: number;
};

export const ManagerPortfolioCards = ({
  totalClients,
  activeClients,
  totalCommoditiesStored,
}: ManagerPortfolioCardsProps) => {
  const cardsData = [
    {
      title: "TOTAL CLIENTS",
      value: totalClients.toString(),
      description: "+13 registered last 2 months",
      icon: People,
      iconBg: "#4F46E5",
      cardBg: "#EEF2FF",
    },
    {
      title: "ACTIVE CLIENTS",
      value: activeClients.toString(),
      description: "+12 registered last 2 months",
      icon: UserTick,
      iconBg: "#16A34A",
      cardBg: "#F0FDF4",
    },
    {
      title: "TOTAL COMMODITIES STORED",
      value: totalCommoditiesStored.toString(),
      description: "+4 Inactive in the last 2 months",
      icon: Box1,
      iconBg: "#F59E0B",
      cardBg: "#FFFBEB",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cardsData.map((card, idx) => {
        const IconComponent = card.icon;
        return (
          <div
            key={idx}
            className="p-4 rounded-xl flex flex-col gap-2"
            style={{ backgroundColor: card.cardBg }}
          >
            <div className="flex items-center gap-3 justify-between">
              <p className="text-xs font-medium text-[#667085] uppercase tracking-wide">
                {card.title}
              </p>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: card.iconBg }}
              >
                <IconComponent size={18} color="#fff" variant="Bold" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#101828]">{card.value}</h3>
            <p className="text-xs text-[#16A34A]">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};
