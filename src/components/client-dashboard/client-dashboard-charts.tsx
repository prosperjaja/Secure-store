"use client";

import { Calendar } from "iconsax-reactjs";
import { Select } from "../ui/mantine/select";
import { ChartFilter } from "./chart-filter";
import { RingProgress } from "@mantine/core";

const commodityBreakdown = [
  {
    tooltip: "Rice",
    value: 40,
    color: "#4A3AFF",
    quantity: 500,
    bgColor: "#f3f7fd",
  },
  {
    tooltip: "Wheat",
    value: 30,
    color: "#2D5BFF",
    quantity: 100,
    bgColor: "#ecf7f1",
  },

  {
    tooltip: "Maize",
    value: 20,
    color: "#93AAFD",
    quantity: 500,
    bgColor: "#fcf3c8",
  },
  {
    tooltip: "Others",
    value: 10,
    color: "#C6D2FD",
    quantity: 200,
    bgColor: "#f5f5f5",
  },
];

export const ClientDashboardCharts = () => {
  return (
    <div className="flex items-center gap-4 h-[350px]">
      <figure className="flex-1 flex flex-col rounded-lg border border-gray-200 bg-white h-full p-3 gap-2.5">
        <div className="flex items-center justify-between">
          <span className="flex flex-col">
            <h3 className="text-lg font-medium text-[#0E1C43]">
              Commodity Breakdown
            </h3>
            <p className="text-xs text-[#0E1C43]">
              Distribution of warehouse inventory
            </p>
          </span>
          <Select
            placeholder="This Month"
            rightSection={<Calendar size={16} color="#0E1C43" />}
          />
        </div>
        <div className="flex items-center gap-2.5 w-full">
          <RingProgress
            sections={commodityBreakdown?.map((item) => ({
              value: item.value,
              color: item.color,
              tooltip: item.tooltip,
            }))}
            roundCaps
            thickness={20}
            size={250}
            label={
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm font-medium text-[#0E1C43]">9.8K</h3>
                <p className="text-xs text-[#0E1C43]">Total Quantity</p>
              </div>
            }
          />
          <div className="flex flex-col gap-2.5 flex-1">
            {commodityBreakdown?.map((item, idx) => (
              <figure
                key={idx}
                className="p-2 rounded-lg flex items-center justify-between gap-2.5 border border-gray-200"
                style={{
                  backgroundColor: item.bgColor,
                }}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  <p className="text-sm font-medium text-[#0E1C43]">
                    {item.tooltip}
                  </p>
                </span>
                <span className="flex flex-col">
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.value}%
                  </p>
                  <p className="text-xs text-[#0E1C43]"> {item.quantity} MT</p>
                </span>
              </figure>
            ))}
          </div>
        </div>
      </figure>
      <figure className="flex-1 flex flex-col rounded-lg border bg-white border-gray-200 h-full p-3">
        <div className="flex items-center justify-between gap-4">
          <span className="flex flex-col">
            <h3 className="text-lg font-medium text-[#0E1C43]">
              Portfolio Performance
            </h3>
            <h3 className="text-xl font-bold text-[#0E1C43] leading-4">
              NGN 12.7K
            </h3>
          </span>
          <ChartFilter />
        </div>
      </figure>
    </div>
  );
};
