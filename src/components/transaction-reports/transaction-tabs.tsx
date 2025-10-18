"use client";

type TransactionType = "all" | "withdrawal" | "deposit" | "pledged";

interface TransactionTabsProps {
  activeTab: TransactionType;
  onTabChange: (tab: TransactionType) => void;
}

export const TransactionTabs = ({
  activeTab,
  onTabChange,
}: TransactionTabsProps) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onTabChange("all")}
        className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
          activeTab === "all"
            ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
            : "bg-transparent text-[#667085]"
        }`}
      >
        All
      </button>
      <button
        onClick={() => onTabChange("withdrawal")}
        className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
          activeTab === "withdrawal"
            ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
            : "bg-transparent text-[#667085]"
        }`}
      >
        Withdrawal
      </button>
      <button
        onClick={() => onTabChange("deposit")}
        className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
          activeTab === "deposit"
            ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
            : "bg-transparent text-[#667085]"
        }`}
      >
        Deposit
      </button>
      <button
        onClick={() => onTabChange("pledged")}
        className={`px-6 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
          activeTab === "pledged"
            ? "bg-white text-[#344054] shadow-sm border border-[#D0D5DD]"
            : "bg-transparent text-[#667085]"
        }`}
      >
        Pledged
      </button>
    </div>
  );
};

export type { TransactionType };
