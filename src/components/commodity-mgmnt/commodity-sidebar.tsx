"use client";

import { SearchNormal } from "iconsax-reactjs";
import { TextInput } from "../ui/mantine/TextInput";
import clsx from "clsx";

const categories = [
  "Maize",
  "Cement",
  "Ironrods",
  "Bag of rice",
  "Tanks",
  "Doors",
];

interface CommoditySidebarProps {
  selectedCommodity: string;
  onSelectCommodity: (commodity: string) => void;
}

export const CommoditySidebar = ({
  selectedCommodity,
  onSelectCommodity,
}: CommoditySidebarProps) => {
  return (
    <aside className="w-[280px] bg-[#FAFAFA] border-r border-[#E5E7EB] flex flex-col gap-4 p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-[#101828]">
          Manage your commodities
        </h2>
        <p className="text-xs text-[#667085]">
          Select a commodity to view its receipts and detailed information.
        </p>
      </div>

      <TextInput
        variant="default"
        placeholder="Search commodity"
        leftSection={<SearchNormal size={18} color="#667085" />}
        classNames={{
          input: "!h-10 !pl-10 !text-sm !bg-white",
        }}
      />

      <div className="flex flex-col gap-1">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => onSelectCommodity(category)}
            className={clsx(
              "px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors cursor-pointer",
              selectedCommodity === category
                ? "bg-[#F3F4F6] text-[#101828]"
                : "text-[#667085] hover:bg-[#F9FAFB]"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
};
