"use client";

import { Receipt1, People, Lock, CloseCircle } from "iconsax-reactjs";

interface ClientOverviewCardsProps {
  activeReceipt: number;
  totalReceipt: number;
  underLien: number;
  cancelled: number;
}

export const ClientOverviewCards = ({
  activeReceipt,
  totalReceipt,
  underLien,
  cancelled,
}: ClientOverviewCardsProps) => {
  const cards = [
    {
      title: "ACTIVE RECEIPT",
      value: activeReceipt.toString(),
      unit: "(Metric tons)",
      subtitle: "+13 registered last 7 months",
      icon: Receipt1,
      iconBg: "#4F46E5",
      cardBg: "#EEF2FF",
    },
    {
      title: "TOTAL RECEIPT",
      value: totalReceipt.toString(),
      subtitle: "+13 registered last 2 months",
      icon: People,
      iconBg: "#22C55E",
      cardBg: "#ECFDF5",
    },
    {
      title: "UNDER LIEN",
      value: underLien.toString(),
      subtitle: "+13 registered last 2 months",
      icon: Lock,
      iconBg: "#FABD36",
      cardBg: "#FEF9E7",
    },
    {
      title: "CANCELLED",
      value: cancelled.toString(),
      subtitle: "+13 request last 2 months",
      icon: CloseCircle,
      iconBg: "#EF4444",
      cardBg: "#FEF2F2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-xl p-4 flex flex-col gap-3"
          style={{ backgroundColor: card.cardBg }}
        >
          <div className="flex items-start justify-between">
            <p className="text-xs font-medium text-[#667085] uppercase tracking-wide">
              {card.title}
            </p>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: card.iconBg }}
            >
              <card.icon size={16} color="#fff" variant="Bold" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <h3 className="text-2xl font-bold text-[#101828]">
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
