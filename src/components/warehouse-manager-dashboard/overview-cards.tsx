"use client";

import { People, Box1, BoxAdd, Maximize } from "iconsax-reactjs";

export const OverviewCards = () => {
  const cards = [
    {
      title: "TOTAL CLIENT",
      value: "255",
      subtitle: "+13 registered last 2 months",
      icon: People,
      iconBg: "#22C55E",
      cardBg: "#ECFDF5",
    },
    {
      title: "TOTAL COMMODITY",
      value: "102",
      unit: "(Metric tons)",
      subtitle: "+13 registered last 2 months",
      icon: Box1,
      iconBg: "#818CF8",
      cardBg: "#EEF2FF",
    },
    {
      title: "UNDER LIEN",
      value: "23",
      subtitle: "+13 registered last 2 months",
      icon: BoxAdd,
      iconBg: "#FABD36",
      cardBg: "#FEF9E7",
    },
    {
      title: "PENDING WITHDRAWAL",
      value: "15",
      subtitle: "+13 request last 2 months",
      icon: Maximize,
      iconBg: "#EF4444",
      cardBg: "#FEF2F2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-xl p-6 flex flex-col gap-3"
          style={{ backgroundColor: card.cardBg }}
        >
          <div className="flex items-start justify-between">
            <p className="text-xs font-medium text-[#667085] uppercase tracking-wide">
              {card.title}
            </p>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: card.iconBg }}
            >
              <card.icon size={20} color="#fff" variant="Bold" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <h3 className="text-3xl font-bold text-[#101828]">
                {card.value}
              </h3>
              {card.unit && (
                <span className="text-base text-[#667085]">{card.unit}</span>
              )}
            </div>
            <p className="text-xs text-[#667085]">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
