"use client";

import clsx from "clsx";
import { FirstCard, FourthCard, SecondCard, ThirdCard } from "../shared/icons";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";

const cardsData = [
  {
    title: "Total Volume Held",
    percentage: "10",
    value: "9800",
    description: `+${10}% from the last month`,
    icon: <FirstCard />,
  },
  {
    title: "Active Receipts",
    percentage: "5",
    value: "5",
    description: `+${1} new receipt in July`,
    icon: <SecondCard />,
  },
  {
    title: "Pledged Receipts",
    percentage: "-2",
    value: "1",
    description: `2 less from last month`,
    icon: <ThirdCard />,
  },
  {
    title: "Available for Trade",
    percentage: "12",
    value: "2",
    description: `+${12}% from the last month`,
    icon: <FourthCard />,
  },
];

export const ClientDashboardCards = () => {
  return (
    <div className="w-full flex items-center gap-4 overflow-x-scroll">
      {cardsData?.map((card, idx) => (
        <div
          key={idx}
          className="p-4 rounded-lg flex flex-col gap-1 flex-1 min-w-[200px] bg-white border border-gray-200"
        >
          <div className="flex items-center gap-4 justify-between">
            {card.icon}
            <span
              className={clsx(
                card.percentage?.includes("-")
                  ? "bg-[#fde8e8] text-[#d92d20]"
                  : "bg-[#dcfce6] text-[#509e6d]",
                "rounded-2xl w-fit py-1 px-2 flex items-center justify-center text-xs gap-1.5"
              )}
            >
              {card.percentage?.includes("-") ? (
                <IoIosTrendingDown size={12} color="#d92d20" />
              ) : (
                <IoIosTrendingUp size={12} color="#509e6d" />
              )}
              {card.percentage}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#0E1C43]">{card.value}</h3>
          <p className="text-sm text-[#0E1C43] font-medium">{card.title}</p>
          <p
            className={clsx(
              "text-[10px] font-medium",
              card.percentage?.includes("-")
                ? "text-[#d92d20]"
                : "text-[#509e6d]"
            )}
          >
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};
