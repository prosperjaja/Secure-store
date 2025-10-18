"use client";

import { ArrowLeft, Filter, SearchNormal } from "iconsax-reactjs";
import { Button } from "../ui/mantine/button";
import { FaDownload } from "react-icons/fa6";
import { TextInput } from "../ui/mantine/TextInput";
import { CommodityMgmntTable } from "./commodity-mgmnt-table";
import { CommoditySidebar } from "./commodity-sidebar";
import { CommodityCards } from "./commodity-cards";
import { CommoditySummaryStats } from "./commodity-summary-stats";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const CommodityMgmntSetup = () => {
  const [view, setView] = useState<"cards" | "table">("cards");
  const [selectedCommodity, setSelectedCommodity] = useState("Maize");
  const router = useRouter();

  return (
    <div className="flex h-full overflow-hidden bg-white">
      <CommoditySidebar
        selectedCommodity={selectedCommodity}
        onSelectCommodity={setSelectedCommodity}
      />
      <div className="flex-1 flex flex-col overflow-auto">
        <header className="flex items-center justify-between p-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft size={20} color="#101828" />
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold text-[#101828]">
                Commodity Details
              </h1>
              <p className="text-sm text-[#667085]">
                View and manage your stored commodities
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            leftSection={<FaDownload color="#fff" size={16} />}
            classNames={{
              root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg",
            }}
          >
            Export Data
          </Button>
        </header>

        <div className="flex-1 flex flex-col gap-6 p-6 overflow-auto">
          {/* Summary Stats Section */}
          <CommoditySummaryStats commodity={selectedCommodity} />

          {/* Receipts Section Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#101828]">
              {selectedCommodity} Receipts
            </h2>
            <div className="flex items-center gap-3">
              <TextInput
                variant="default"
                placeholder="Search receipts"
                rightSection={<SearchNormal size={18} color="#667085" />}
                classNames={{
                  input: "!h-10 !w-[280px] !text-sm",
                }}
              />
              <Button
                variant="default"
                size="sm"
                classNames={{
                  root: "!rounded-lg !border-[#D0D5DD] !h-10",
                }}
              >
                <Filter size={18} color="#344054" />
                Filter
              </Button>
              <div className="flex items-center gap-1 bg-[#F3F4F6] rounded-lg p-1">
                <button
                  onClick={() => setView("cards")}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-colors cursor-pointer ${
                    view === "cards"
                      ? "bg-white text-[#101828] shadow-sm cursor-pointer"
                      : "text-[#667085]"
                  }`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setView("table")}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-colors cursor-pointer ${
                    view === "table"
                      ? "bg-white text-[#101828] shadow-sm "
                      : "text-[#667085]"
                  }`}
                >
                  Table
                </button>
              </div>
            </div>
          </div>

          {/* Cards or Table View */}
          {view === "cards" ? <CommodityCards /> : <CommodityMgmntTable />}
        </div>
      </div>
    </div>
  );
};
