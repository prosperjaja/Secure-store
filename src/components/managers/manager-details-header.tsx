"use client";

type ManagerDetails = {
  id: string;
  name: string;
  phone: string;
  managerId: string;
  warehouse: string;
  status: "active" | "inactive" | "suspended";
  residentialAddress: string;
  lastActivity: string;
};

type ManagerDetailsHeaderProps = {
  manager: ManagerDetails;
};

const statusStyles = {
  active: {
    color: "#16A34A",
    dotColor: "#16A34A",
  },
  inactive: {
    color: "#667085",
    dotColor: "#667085",
  },
  suspended: {
    color: "#F59E0B",
    dotColor: "#F59E0B",
  },
};

export const ManagerDetailsHeader = ({
  manager,
}: ManagerDetailsHeaderProps) => {
  const statusStyle = statusStyles[manager.status];

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
      <div className="flex items-end justify-between">
        {/* Left side - Manager Info */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">
              {manager.name.charAt(0)}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-[#101828]">
                {manager.name}
              </h2>
              <div className="flex items-center gap-1.5">
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

            <div className="flex items-center gap-2 text-sm text-[#667085]">
              <span>{manager.phone}</span>
              <span className="w-1 h-1 rounded-full bg-[#667085]" />
              <span>{manager.managerId}</span>
              <span className="w-1 h-1 rounded-full bg-[#667085]" />
              <span>{manager.warehouse}</span>
            </div>
          </div>
        </div>

        {/* Right side - Actions & Additional Info */}
        <div className="flex flex-col items-end gap-3">
          <button className="px-4 py-1 text-sm font-medium text-[#DC2626] border border-[#DC2626] rounded-lg hover:bg-red-50 cursor-pointer">
            Deactivate Manager
          </button>

          <div className="flex flex-col items-end gap-1 text-sm">
            <div className="text-[#667085]">
              Residential address:{" "}
              <span className="text-[#101828] font-medium">
                {manager.residentialAddress}
              </span>
            </div>
            <div className="text-[#667085]">
              Last Activity:{" "}
              <span className="text-[#101828] font-medium">
                {manager.lastActivity}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
