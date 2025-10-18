"use client";

import clsx from "clsx";

const commodityData = [
  {
    id: "WR-2025-01",
    status: "Active",
    commodity: "Maize",
    quantity: "100 Bags",
    weight: "9800kg",
    storageInfo: "WAREHOUSE-LOCATION",
    warehouse: "Funtua Grain Storage",
    depositDate: "DD-MM-YYYY",
    date: "2025-01-01",
    grade: "Grade A",
  },
  {
    id: "WR-2025-01",
    status: "Cancelled",
    commodity: "Maize",
    quantity: "100 Bags",
    weight: "9800kg",
    storageInfo: "WAREHOUSE-LOCATION",
    warehouse: "Funtua Grain Storage",
    depositDate: "DD-MM-YYYY",
    date: "2025-01-01",
    grade: "Grade A",
  },
  {
    id: "WR-2025-01",
    status: "Lien",
    commodity: "Maize",
    quantity: "100 Bags",
    weight: "9800kg",
    storageInfo: "WAREHOUSE-LOCATION",
    warehouse: "Funtua Grain Storage",
    depositDate: "DD-MM-YYYY",
    date: "2025-01-01",
    grade: "Grade A",
  },
  {
    id: "WR-2025-01",
    status: "Active",
    commodity: "Maize",
    quantity: "100 Bags",
    weight: "9800kg",
    storageInfo: "WAREHOUSE-LOCATION",
    warehouse: "Funtua Grain Storage",
    depositDate: "DD-MM-YYYY",
    date: "2025-01-01",
    grade: "Grade A",
  },
  {
    id: "WR-2025-01",
    status: "Active",
    commodity: "Maize",
    quantity: "100 Bags",
    weight: "9800kg",
    storageInfo: "WAREHOUSE-LOCATION",
    warehouse: "Funtua Grain Storage",
    depositDate: "DD-MM-YYYY",
    date: "2025-01-01",
    grade: "Grade A",
  },
  {
    id: "WR-2025-01",
    status: "Lien",
    commodity: "Maize",
    quantity: "100 Bags",
    weight: "9800kg",
    storageInfo: "WAREHOUSE-LOCATION",
    warehouse: "Funtua Grain Storage",
    depositDate: "DD-MM-YYYY",
    date: "2025-01-01",
    grade: "Grade A",
  },
];

export const CommodityCards = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-[#ECFDF3] text-[#12B76A]";
      case "Cancelled":
        return "bg-[#F9FAFB] text-[#667085]";
      case "Lien":
        return "bg-[#F4F3FF] text-[#7F56D9]";
      default:
        return "bg-[#F9FAFB] text-[#667085]";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {commodityData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-[#E5E7EB] rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-base font-semibold text-[#101828]">
                Receipt ID: {item.id}
              </span>
              <span
                className={clsx(
                  "w-fit px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5",
                  getStatusColor(item.status)
                )}
              >
                <span
                  className={clsx("w-1.5 h-1.5 rounded-full", {
                    "bg-[#12B76A]": item.status === "Active",
                    "bg-[#667085]": item.status === "Cancelled",
                    "bg-[#7F56D9]": item.status === "Lien",
                  })}
                />
                {item.status}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center py-2 border-b border-dashed border-[#E5E7EB]">
              <span className="text-xs text-[#667085]">
                Commodity Information
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#667085]">Maize</span>
              <span className="text-xs font-medium text-[#101828]">
                {item.commodity}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#667085]">Quantity</span>
              <span className="text-xs font-medium text-[#101828]">
                {item.quantity}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#667085]">Grade</span>
              <span className="text-xs font-medium text-[#101828]">
                {item.grade}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-dashed border-[#E5E7EB] mt-2">
              <span className="text-xs text-[#667085]">
                Storage Information
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#667085]">{item.storageInfo}</span>
              <span className="text-xs font-medium text-[#101828]">
                {item.warehouse}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#667085]">Date of Deposit</span>
              <span className="text-xs font-medium text-[#101828]">
                {item.depositDate}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#667085]">Expiry Date</span>
              <span className="text-xs font-medium text-[#101828]">
                {item.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
