"use client";

import { Building, People, Box1, DocumentText } from "iconsax-reactjs";

const cardsData = [
  {
    title: "TOTAL WAREHOUSES",
    value: "102",
    description: "+13 registered last 2 months",
    icon: Building,
    iconBg: "#4F46E5",
    cardBg: "#EEF2FF",
  },
  {
    title: "TOTAL CLIENTS",
    value: "255",
    description: "+13 registered last 2 months",
    icon: People,
    iconBg: "#4F46E5",
    cardBg: "#FFF1F1",
  },
  {
    title: "TOTAL COMMODITY",
    value: "4,556",
    unit: "(Metric tons)",
    description: "+13 collected last 2 months",
    icon: Box1,
    iconBg: "#F59E0B",
    cardBg: "#FFFBEB",
  },
  {
    title: "PENDING REQUEST",
    value: "23",
    description: "+13 request last 2 months",
    icon: DocumentText,
    iconBg: "#10B981",
    cardBg: "#ECFDF5",
  },
];

export const TenantAdminOverviewCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
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
            <div className="flex items-baseline gap-1 mt-2">
              <h3 className="text-2xl font-bold text-[#101828]">
                {card.value}
              </h3>
              {card.unit && (
                <span className="text-sm text-[#667085]">{card.unit}</span>
              )}
            </div>

            <p className="text-xs text-[#16A34A]">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};
