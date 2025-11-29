"use client";

import { useState } from "react";
import { Checkbox } from "@mantine/core";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

type Receipt = {
  id: string;
  receiptId: string;
  clientName: string;
  commodity: string;
  weight: string;
  depositDate: string;
  storageFee: string;
  status: "active" | "released" | "expired";
};

type Transaction = {
  id: string;
  transactionId: string;
  clientName: string;
  type: "deposit" | "withdrawal" | "fee_payment";
  amount: string;
  date: string;
  status: "completed" | "pending" | "failed";
};

type WarehouseReceiptsTableProps = {
  receipts: Receipt[];
  transactions: Transaction[];
};

const receiptStatusStyles = {
  active: {
    color: "#16A34A",
    dotColor: "#16A34A",
    bg: "#f0fdf4",
  },
  released: {
    color: "#4F46E5",
    dotColor: "#4F46E5",
    bg: "#eef2ff",
  },
  expired: {
    color: "#EF4444",
    dotColor: "#EF4444",
    bg: "#fef2f2",
  },
};

const transactionStatusStyles = {
  completed: {
    color: "#16A34A",
    dotColor: "#16A34A",
    bg: "#f0fdf4",
  },
  pending: {
    color: "#F59E0B",
    dotColor: "#F59E0B",
    bg: "#fefce8",
  },
  failed: {
    color: "#EF4444",
    dotColor: "#EF4444",
    bg: "#fef2f2",
  },
};

const transactionTypeLabels = {
  deposit: "Deposit",
  withdrawal: "Withdrawal",
  fee_payment: "Fee Payment",
};

export const WarehouseReceiptsTable = ({
  receipts,
  transactions,
}: WarehouseReceiptsTableProps) => {
  const [activeTab, setActiveTab] = useState<"receipts" | "transactions">(
    "receipts"
  );

  const tabs = [
    { id: "receipts" as const, label: "Registered receipt" },
    { id: "transactions" as const, label: "Transaction report" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs */}
      <div className="flex items-center gap-2 bg-[#F3F4F6] p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "bg-white text-[#101828] shadow-sm"
                : "text-[#667085] hover:text-[#101828]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Receipts Table */}
      {activeTab === "receipts" && (
        <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <th className="py-3 px-4 text-left">
                  <Checkbox size="xs" />
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Receipt ID
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Client Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Commodity
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Weight
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Deposit Date
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Storage Fee
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  <div className="flex items-center gap-1">
                    Status
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 2.5V9.5M6 9.5L3 6.5M6 9.5L9 6.5"
                        stroke="#667085"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {receipts.map((receipt) => {
                const statusStyle = receiptStatusStyles[receipt.status];
                return (
                  <tr
                    key={receipt.id}
                    className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB]"
                  >
                    <td className="py-3 px-4">
                      <Checkbox size="xs" />
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {receipt.receiptId}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {receipt.clientName}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {receipt.commodity}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {receipt.weight}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {receipt.depositDate}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {receipt.storageFee}
                    </td>
                    <td className="py-3 px-4">
                      <div
                        className="flex items-center gap-1.5 px-2 py-1 rounded-lg w-fit"
                        style={{ backgroundColor: statusStyle.bg }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: statusStyle.dotColor }}
                        />
                        <span
                          className="text-sm capitalize"
                          style={{ color: statusStyle.color }}
                        >
                          {receipt.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-[#4F46E5] py-1 px-2 w-fit hover:bg-blue-50 rounded-2xl cursor-pointer">
                        View
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#E5E7EB]">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer">
              <ArrowLeft size={16} color="#344054" />
              Previous
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-white bg-[#4F46E5] rounded-lg">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                3
              </button>
              <span className="text-sm text-[#667085]">...</span>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                8
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                9
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                10
              </button>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer">
              Next
              <ArrowRight size={16} color="#344054" />
            </button>
          </div>
        </div>
      )}

      {/* Transactions Table */}
      {activeTab === "transactions" && (
        <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                <th className="py-3 px-4 text-left">
                  <Checkbox size="xs" />
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Transaction ID
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Client Name
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Type
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Amount
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  <div className="flex items-center gap-1">
                    Status
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 2.5V9.5M6 9.5L3 6.5M6 9.5L9 6.5"
                        stroke="#667085"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                const statusStyle =
                  transactionStatusStyles[transaction.status];
                return (
                  <tr
                    key={transaction.id}
                    className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB]"
                  >
                    <td className="py-3 px-4">
                      <Checkbox size="xs" />
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {transaction.transactionId}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {transaction.clientName}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {transactionTypeLabels[transaction.type]}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {transaction.amount}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#101828]">
                      {transaction.date}
                    </td>
                    <td className="py-3 px-4">
                      <div
                        className="flex items-center gap-1.5 px-2 py-1 rounded-lg w-fit"
                        style={{ backgroundColor: statusStyle.bg }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: statusStyle.dotColor }}
                        />
                        <span
                          className="text-sm capitalize"
                          style={{ color: statusStyle.color }}
                        >
                          {transaction.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-[#4F46E5] py-1 px-2 w-fit hover:bg-blue-50 rounded-2xl cursor-pointer">
                        View
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#E5E7EB]">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer">
              <ArrowLeft size={16} color="#344054" />
              Previous
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-white bg-[#4F46E5] rounded-lg">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                3
              </button>
              <span className="text-sm text-[#667085]">...</span>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                8
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                9
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg cursor-pointer">
                10
              </button>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer">
              Next
              <ArrowRight size={16} color="#344054" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
