"use client";

import { Checkbox, Menu } from "@mantine/core";
import { More } from "iconsax-reactjs";

interface Receipt {
  id: string;
  receiptId: string;
  name: string;
  commodity: string;
  quantity: number;
  netWeight: string;
  grade: number;
  dateIssued: string;
  status: "active" | "cancelled" | "pledge";
}

interface RegisteredReceiptsTableProps {
  receipts: Receipt[];
}

export const RegisteredReceiptsTable = ({
  receipts,
}: RegisteredReceiptsTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-700 bg-green-50";
      case "cancelled":
        return "text-red-700 bg-red-50";
      case "pledge":
        return "text-blue-700 bg-blue-50";
      default:
        return "text-gray-700 bg-gray-50";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-700";
      case "cancelled":
        return "bg-red-700";
      case "pledge":
        return "bg-blue-700";
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
                Date issued
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Status ↓
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#E5E7EB]">
            {receipts.map((receipt, idx) => (
              <tr key={idx} className="hover:bg-[#F9FAFB]">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Checkbox size="xs" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#101828]">
                  {receipt.receiptId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {receipt.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {receipt.commodity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {receipt.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {receipt.netWeight}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {receipt.grade}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  {receipt.dateIssued}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      receipt.status
                    )}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(
                        receipt.status
                      )}`}
                    ></span>
                    {receipt.status.charAt(0).toUpperCase() +
                      receipt.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#667085]">
                  <Menu shadow="md" width={150}>
                    <Menu.Target>
                      <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                        <More size={16} color="#667085" className="rotate-90" />
                      </button>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item>View</Menu.Item>
                      <Menu.Item>Edit</Menu.Item>
                      <Menu.Item>Cancel</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
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
