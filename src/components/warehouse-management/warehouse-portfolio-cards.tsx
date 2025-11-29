"use client";

import { People, Box1, Receipt1, Wallet } from "iconsax-reactjs";

type WarehousePortfolioCardsProps = {
  totalClients: number;
  totalCommodity: number;
  totalReceipts: number;
  totalStorageFee: string;
};

export const WarehousePortfolioCards = ({
  totalClients,
  totalCommodity,
  totalReceipts,
  totalStorageFee,
}: WarehousePortfolioCardsProps) => {
  const cards = [
    {
      title: "Total Clients",
      value: totalClients.toString(),
      icon: People,
      iconBg: "#EEF2FF",
      iconColor: "#4F46E5",
    },
    {
      title: "Total Commodity",
      value: `${totalCommodity}MT`,
      icon: Box1,
      iconBg: "#FEF3C7",
      iconColor: "#F59E0B",
    },
    {
      title: "Total Receipt",
      value: totalReceipts.toString(),
      icon: Receipt1,
      iconBg: "#DCFCE7",
      iconColor: "#16A34A",
    },
    {
      title: "Total Storage Fee",
      value: totalStorageFee,
      icon: Wallet,
      iconBg: "#FCE7F3",
      iconColor: "#EC4899",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
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
