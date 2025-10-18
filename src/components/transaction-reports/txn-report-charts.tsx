"use client";
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

export const TxnReportCharts = () => {
  return (
    <div className="min-h-[400px] flex items-center gap-4 w-full">
      <figure className="flex-1 flex flex-col rounded-lg border border-gray-200 bg-white h-full p-3 gap-2.5">
        <h3 className="text-lg font-medium text-[#0E1C43]">
          Commodity Breakdown
        </h3>
        <div className="flex items-center gap-2.5 w-full justify-center">
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
                <p className="text-xs text-[#0E1C43]">Total Bags</p>
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
                  <p className="text-xs text-[#0E1C43]">
                    {" "}
                    {item.quantity} Bags
                  </p>
                </span>
              </figure>
            ))}
          </div>
        </div>
      </figure>

      <figure className="flex-1 flex flex-col rounded-lg border border-gray-200 bg-white h-full p-3 gap-2.5"></figure>
    </div>
  );
};
