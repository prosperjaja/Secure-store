"use client";

import { Receipt1, TickCircle, CloseCircle, DocumentText } from "iconsax-reactjs";

type ReceiptOverviewCardsProps = {
  totalReceipts: number;
  activeReceipts: number;
  approvedReceipts: number;
  rejectedReceipts: number;
};

export const ReceiptOverviewCards = ({
  totalReceipts,
  activeReceipts,
  approvedReceipts,
  rejectedReceipts,
}: ReceiptOverviewCardsProps) => {
  const cards = [
    {
      title: "TOTAL RECEIPT",
      value: totalReceipts,
      subtitle: "+13 registered last 2 months",
      icon: Receipt1,
      iconBg: "#EEF2FF",
      iconColor: "#4F46E5",
      cardBg: "#F0F5FF",
    },
    {
      title: "ACTIVE RECEIPT",
      value: activeReceipts,
      subtitle: "+13 registered last 2 months",
      icon: DocumentText,
      iconBg: "#DCFCE7",
      iconColor: "#16A34A",
      cardBg: "#ECFDF5",
    },
    {
      title: "APPROVED RECEIPT",
      value: approvedReceipts,
      subtitle: "+13 request last 2 months",
      icon: TickCircle,
      iconBg: "#DBEAFE",
      iconColor: "#2563EB",
      cardBg: "#EFF6FF",
    },
    {
      title: "REJECTED RECEIPT",
      value: rejectedReceipts,
      subtitle: "+13 request last 2 months",
      icon: CloseCircle,
      iconBg: "#FEE2E2",
      iconColor: "#DC2626",
      cardBg: "#FEF2F2",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl p-5 flex items-start justify-between"
          style={{ backgroundColor: card.cardBg }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-[#667085] uppercase tracking-wide">
              {card.title}
            </span>
            <span className="text-3xl font-bold text-[#101828]">
              {card.value}
            </span>
            <span className="text-xs text-[#667085]">{card.subtitle}</span>
          </div>
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: card.iconBg }}
          >
            <card.icon size={20} color={card.iconColor} variant="Bold" />
          </div>
        </div>
      ))}
    </div>
  );
};
