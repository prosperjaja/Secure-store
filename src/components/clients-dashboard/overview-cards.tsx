"use client";

import { Profile2User, UserTick, UserRemove } from "iconsax-reactjs";

export const ClientsOverviewCards = () => {
  const cards = [
    {
      title: "TOTAL CLIENTS",
      value: "23",
      subtitle: "+13 registered last 2 months",
      icon: Profile2User,
      iconBg: "#4F46E5",
      cardBg: "#EEF2FF",
    },
    {
      title: "ACTIVE CLIENTS",
      value: "85",
      subtitle: "+12 registered last 2 months",
      icon: UserTick,
      iconBg: "#12B76A",
      cardBg: "#ECFDF5",
    },
    {
      title: "INACTIVE CLIENTS",
      value: "10",
      subtitle: "+4 inactive in the last 2 months",
      icon: UserRemove,
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
            <h3 className="text-2xl font-bold text-[#101828]">{card.value}</h3>
            <p className="text-sm text-[#667085]">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
