"use client";

import { Checkbox } from "@mantine/core";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

type Warehouse = {
  id: string;
  warehouseId: string;
  manager: string;
  location: string;
  capacity: string;
  registeredDate: string;
  clients: number;
  status: "active" | "inactive" | "maintenance";
};

type WarehousesTableProps = {
  warehouses: Warehouse[];
};

const statusStyles = {
  active: {
    color: "#16A34A",
    dotColor: "#16A34A",
    bg: "#f0fdf4",
  },
  inactive: {
    color: "#667085",
    dotColor: "#667085",
    bg: "#f9fafb",
  },
  maintenance: {
    color: "#F59E0B",
    dotColor: "#F59E0B",
    bg: "#fefce8",
  },
};

export const WarehousesTable = ({ warehouses }: WarehousesTableProps) => {
  const router = useRouter();

  const handleView = (warehouseId: string) => {
    router.push(`/warehouse-management/${warehouseId}`);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
            <th className="py-3 px-4 text-left">
              <Checkbox size="xs" />
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
              Warehouse ID
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
              Manager
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
              Location
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
              Capacity
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
              Registered date
            </th>
            <th className="py-3 px-4 text-left text-xs font-medium text-[#667085]">
              Client
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
          {warehouses.map((warehouse) => {
            const statusStyle = statusStyles[warehouse.status];
            return (
              <tr
                key={warehouse.id}
                className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB]"
              >
                <td className="py-3 px-4">
                  <Checkbox size="xs" />
                </td>
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {warehouse.warehouseId}
                </td>
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {warehouse.manager}
                </td>
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {warehouse.location}
                </td>
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {warehouse.capacity}
                </td>
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {warehouse.registeredDate}
                </td>
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {warehouse.clients}
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
                      {warehouse.status}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <p
                    onClick={() => handleView(warehouse.id)}
                    className="text-sm font-medium text-[#4F46E5] py-1 px-2 w-fit hover:bg-blue-50 rounded-2xl cursor-pointer"
                  >
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
  );
};
