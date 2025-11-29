"use client";

import { Edit2 } from "iconsax-reactjs";

type WarehouseManager = {
  id: string;
  name: string;
  phone: string;
  managerId: string;
  warehouse: string;
  status: "active" | "inactive" | "maintenance";
  residentialAddress: string;
  lastActivity: string;
};

type WarehouseDetailsHeaderProps = {
  manager: WarehouseManager;
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

export const WarehouseDetailsHeader = ({
  manager,
}: WarehouseDetailsHeaderProps) => {
  const statusStyle = statusStyles[manager.status];

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center">
            <span className="text-2xl font-semibold text-[#667085]">
              {manager.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>

          {/* Manager Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-[#101828]">
                {manager.name}
              </h2>
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg"
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
                  {manager.status}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#667085]">
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <span>{manager.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Manager ID:</span>
                <span>{manager.managerId}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Warehouse:</span>
                <span>{manager.warehouse}</span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#667085]">
              <div className="flex items-center gap-2">
                <span className="font-medium">Address:</span>
                <span>{manager.residentialAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Last Activity:</span>
                <span>{manager.lastActivity}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] border border-[#D0D5DD] rounded-lg hover:bg-gray-50 cursor-pointer">
          <Edit2 size={16} color="#667085" />
          Edit
        </button>
      </div>
    </div>
  );
};
