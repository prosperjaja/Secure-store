"use client";

import { Checkbox } from "@mantine/core";

interface Transaction {
  id: string;
  transactionId: string;
  status: "success" | "failed" | "pending";
  clientName: string;
  date: string;
  type: "withdrawal" | "pledge" | "lien" | "deposit";
  commodity: string;
  quantity: string;
  receiptId: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-700 bg-green-50";
      case "failed":
        return "text-red-700 bg-red-50";
      case "pending":
        return "text-yellow-700 bg-yellow-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-700";
      case "failed":
        return "bg-red-700";
      case "pending":
        return "bg-yellow-700";
      default:
        return "bg-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
            <tr>
              <th className="px-6 py-3 text-left">
                <Checkbox size="xs" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Client name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Commodity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Quantity(mt)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Receipt ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#E5E7EB]">
            {transactions.map((transaction, idx) => (
              <tr key={idx} className="hover:bg-[#F9FAFB]">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Checkbox size="xs" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#101828]">
                  {transaction.transactionId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(
                        transaction.status
                      )}`}
                    ></span>
                    {transaction.status.charAt(0).toUpperCase() +
                      transaction.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {transaction.clientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085] capitalize">
                  {transaction.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {transaction.commodity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {transaction.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {transaction.receiptId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm font-medium text-[#4F46E5] hover:bg-blue-50 rounded-2xl py-1 px-2.5 flex items-center justify-center w-fit cursor-pointer">
                    View
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-[#E5E7EB]">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 5L7.5 10L12.5 15"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Previous
        </button>

        <div className="flex items-center gap-2">
          {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-lg text-sm font-medium ${
                page === 1
                  ? "bg-[#F9FAFB] text-[#344054]"
                  : "text-[#667085] hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50 rounded-lg border border-[#D0D5DD]">
          Next
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
