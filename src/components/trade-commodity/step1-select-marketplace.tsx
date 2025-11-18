"use client";

import { Marketplace } from "../../types/trade";
import clsx from "clsx";

interface Step1Props {
  selectedMarketplace: Marketplace | null;
  onSelectMarketplace: (marketplace: Marketplace) => void;
}

const MARKETPLACES: Marketplace[] = [
  {
    id: "ewhr-1",
    name: "E-WHR Exchange",
    description: "Leading commodity exchange platform",
    tradingFee: "2.5% per trade",
    settlementTime: "24-48 hrs",
    minimumListing: "10MT",
    paymentMethod: "Bank",
  },
  {
    id: "ewhr-2",
    name: "E-WHR Exchange",
    description: "Leading commodity exchange platform",
    tradingFee: "2.5% per trade",
    settlementTime: "24-48 hrs",
    minimumListing: "10MT",
    paymentMethod: "Bank",
  },
  {
    id: "ewhr-3",
    name: "E-WHR Exchange",
    description: "Leading commodity exchange platform",
    tradingFee: "2.5% per trade",
    settlementTime: "24-48 hrs",
    minimumListing: "10MT",
    paymentMethod: "Bank",
  },
  {
    id: "ewhr-4",
    name: "E-WHR Exchange",
    description: "Leading commodity exchange platform",
    tradingFee: "2.5% per trade",
    settlementTime: "24-48 hrs",
    minimumListing: "10MT",
    paymentMethod: "Bank",
  },
  {
    id: "ewhr-5",
    name: "E-WHR Exchange",
    description: "Leading commodity exchange platform",
    tradingFee: "2.5% per trade",
    settlementTime: "24-48 hrs",
    minimumListing: "10MT",
    paymentMethod: "Bank",
  },
  {
    id: "ewhr-6",
    name: "E-WHR Exchange",
    description: "Leading commodity exchange platform",
    tradingFee: "2.5% per trade",
    settlementTime: "24-48 hrs",
    minimumListing: "10MT",
    paymentMethod: "Bank",
  },
];

export const Step1SelectMarketplace = ({
  selectedMarketplace,
  onSelectMarketplace,
}: Step1Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-[#101828]">
          Select Marketplace for trade
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MARKETPLACES.map((marketplace) => (
          <div
            key={marketplace.id}
            onClick={() => onSelectMarketplace(marketplace)}
            className={clsx(
              "border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md",
              selectedMarketplace?.id === marketplace.id
                ? "border-[#4F46E5] bg-[#F5F3FF]"
                : "border-[#E5E7EB] bg-white"
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DC2626] flex-shrink-0">
                <span className="text-white text-sm font-bold">E</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#101828] mb-1">
                  {marketplace.name}
                </h3>
                <p className="text-sm text-[#667085] mb-3">
                  {marketplace.description}
                </p>

                <div className="grid grid-cols-2 gap-y-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-[#667085]">Trading Fee</span>
                    <span className="text-sm font-medium text-[#101828]">
                      {marketplace.tradingFee}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-[#667085]">
                      Settlement time
                    </span>
                    <span className="text-sm font-medium text-[#101828]">
                      {marketplace.settlementTime}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-[#667085]">
                      Minimum Listing
                    </span>
                    <span className="text-sm font-medium text-[#101828]">
                      {marketplace.minimumListing}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-[#667085]">
                      Payment method
                    </span>
                    <span className="text-sm font-medium text-[#101828]">
                      {marketplace.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={clsx(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                  selectedMarketplace?.id === marketplace.id
                    ? "border-[#4F46E5] bg-[#4F46E5]"
                    : "border-[#D0D5DD]"
                )}
              >
                {selectedMarketplace?.id === marketplace.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
