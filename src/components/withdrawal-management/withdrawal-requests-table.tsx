"use client";

import { Checkbox } from "@mantine/core";

interface WithdrawalRequest {
  id: string;
  receiptId: string;
  name: string;
  commodity: string;
  quantity: number;
  netWeight: string;
  grade: number | string;
  requestDate: string;
  status?: "pending" | "approved" | "rejected";
}

interface WithdrawalRequestsTableProps {
  requests: WithdrawalRequest[];
}

export const WithdrawalRequestsTable = ({
  requests,
}: WithdrawalRequestsTableProps) => {
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
                Receipt ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Commodity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Net weight(mt)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Request date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#E5E7EB]">
            {requests.map((request, idx) => (
              <tr key={idx} className="hover:bg-[#F9FAFB]">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Checkbox size="xs" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#101828]">
                  {request.receiptId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {request.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {request.commodity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {request.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {request.netWeight}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {request.grade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {request.requestDate}
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
