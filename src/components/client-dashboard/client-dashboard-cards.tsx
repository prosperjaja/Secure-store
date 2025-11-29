"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { FirstCard, FourthCard, SecondCard, ThirdCard } from "../shared/icons";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { ArrowRight2, ArrowLeft2 } from "iconsax-reactjs";

const cardsData = [
  {
    title: "Total Volume Held",
    percentage: "10",
    value: [
      { unit: "Metric Tonnes", amount: "9800" },
      { unit: "Liters", amount: "12500" },
      { unit: "Kilograms", amount: "9800000" },
    ],
    description: `+${10}% from the last month`,
    icon: <FirstCard />,
  },
  {
    title: "Total Available",
    percentage: "5",
    value: [
      { unit: "Metric Tonnes", amount: "5" },
      { unit: "Liters", amount: "8" },
      { unit: "Kilograms", amount: "5000" },
    ],
    description: `+${1} new receipt in July`,
    icon: <SecondCard />,
  },
  {
    title: "Total Pledged",
    percentage: "-2",
    value: [
      { unit: "Metric Tonnes", amount: "1" },
      { unit: "Liters", amount: "3" },
      { unit: "Kilograms", amount: "1000" },
    ],
    description: `2 less from last month`,
    icon: <ThirdCard />,
  },
  {
    title: "Total Traded",
    percentage: "12",
    value: [
      { unit: "Metric Tonnes", amount: "2" },
      { unit: "Liters", amount: "5" },
      { unit: "Kilograms", amount: "2000" },
    ],
    description: `+${12}% from the last month`,
    icon: <FourthCard />,
  },
];

export const ClientDashboardCards = () => {
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentUnitIndex((prev) => (prev + 1) % cardsData[0].value.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentUnitIndex(
        (prev) =>
          (prev - 1 + cardsData[0].value.length) % cardsData[0].value.length
      );
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center gap-4 overflow-x-scroll">
      {cardsData?.map((card, idx) => (
        <div
          key={idx}
          className={clsx(
            "p-4 rounded-lg flex flex-col gap-1 flex-1 min-w-[200px] bg-white border border-gray-200 transition-all duration-300",
            idx === 0 && "relative group"
          )}
        >
          {/* Left navigation button - absolutely positioned, shows on hover */}
          {idx === 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200 shadow-md opacity-0 group-hover:opacity-100 z-50"
              aria-label="Previous unit"
            >
              <ArrowLeft2 size={16} color="#667085" />
            </button>
          )}

          {/* Right navigation button - absolutely positioned, shows on hover */}
          {idx === 0 && (
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200 shadow-md opacity-0 group-hover:opacity-100 z-50"
              aria-label="Next unit"
            >
              <ArrowRight2 size={16} color="#667085" />
            </button>
          )}

          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-2">{card.icon}</div>
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
          <h3
            className={clsx(
              "text-2xl font-bold text-[#0E1C43] transition-opacity duration-300",
              isTransitioning ? "opacity-0" : "opacity-100"
            )}
          >
            {card.value[currentUnitIndex].amount}
          </h3>
          <p className="text-sm text-[#0E1C43] font-medium">{card.title}</p>
          <div className="flex items-center justify-between">
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
            {idx === 0 && (
              <p
                className={clsx(
                  "text-[10px] font-medium text-[#667085] transition-opacity duration-300",
                  isTransitioning ? "opacity-0" : "opacity-100"
                )}
              >
                {card.value[currentUnitIndex].unit}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
