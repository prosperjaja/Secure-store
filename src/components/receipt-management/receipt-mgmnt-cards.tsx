"use client";

import { Tooltip } from "@mantine/core";
import clsx from "clsx";
import { Copy, Eye, Printer } from "iconsax-reactjs";
import { FaDownload } from "react-icons/fa6";

const cardData = [
  {
    receipt_number: "1234567890",
    commodity: "Cement",
    quantity: "30 Bags (3,000 kg)",

    issue_date: "02 Dec 2024",
    expiry_date: "02 Dec 2025",
    status: "Pledged",
    warehouse: "Kano Central Storage 1",
    grade: "Grade A",
  },
  {
    receipt_number: "1234567890",
    commodity: "Soya Beans",
    quantity: "500 Bags (3,000 kg)",
    issue_date: "02 Aug 2024",
    expiry_date: "02 Aug 2025",
    status: "Pledged",
    warehouse: "Abuja Central Storage 1",
    grade: "Grade B",
  },
  {
    receipt_number: "1234567890",
    commodity: "Maize",
    quantity: "500 Bags (3,000 kg)",
    issue_date: "02 Nov 2024",
    expiry_date: "02 Nov 2025",
    status: "Active",
    warehouse: "Lagos Central Storage 1",
    grade: "Grade A",
  },
];

export const ReceiptMgmntCards = () => {
  return (
    <div className="flex items-center gap-4 overflow-x-scroll w-full">
      {cardData?.map((item, idx) => (
        <figure
          key={idx}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg relative flex-1 min-w-[300px]"
        >
          <div className="bg-white rounded-lg  mt-0.5 size-full">
            <header className="p-3 flex items-end justify-end">
              <span
                className={clsx(
                  "w-fit flex items-center justify-center rounded-2xl py-1 px-3 text-sm font-medium",
                  item?.status === "Pledged" && "bg-blue-100 text-blue-600",
                  item?.status === "Active" && "bg-green-100 text-green-600"
                )}
              >
                {item?.status}
              </span>
            </header>
            <article className="grid grid-cols-2 gap-2 p-3">
              <span className="flex flex-col">
                <p className="text-sm text-gray-500">Commodity</p>
                <p className="text-sm font-medium text-gray-900">
                  {item.commodity}
                </p>
              </span>
              <span className="flex flex-col">
                <p className="text-sm text-gray-500">Warehouse</p>
                <p className="text-sm font-medium text-gray-900">
                  {item.warehouse}
                </p>
              </span>
              <span className="flex flex-col">
                <p className="text-sm text-gray-500">Grade</p>
                <p className="text-sm font-medium text-gray-900">
                  {item.grade}
                </p>
              </span>
              <span className="flex flex-col">
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="text-sm font-medium text-gray-900">
                  {item.quantity}
                </p>
              </span>
              <span className="flex flex-col">
                <p className="text-sm text-gray-500">Issue Date</p>
                <p className="text-sm font-medium text-gray-900">
                  {item.issue_date}
                </p>
              </span>
              <span className="flex flex-col">
                <p className="text-sm text-gray-500">Expiry Date</p>
                <p className="text-sm font-medium text-gray-900">
                  {item.expiry_date}
                </p>
              </span>
            </article>
            <footer className="flex items-center gap-4 p-3 border-t border-gray-200 justify-between">
              <div className="items-center flex gap-1">
                <h3 className="text-sm font-semibold text-blue-600">
                  <span className="text-gray-500">Receipt:</span>{" "}
                  {item.receipt_number}
                </h3>
                <Copy size={14} color="#000" className="cursor-pointer" />
              </div>
              <div className="items-center flex gap-2">
                <Tooltip label="View">
                  <Eye
                    size={16}
                    color="#000"
                    className="cursor-pointer hover:text-blue-600"
                  />
                </Tooltip>
                <Tooltip label="Download">
                  <FaDownload
                    size={16}
                    color="#000"
                    className="cursor-pointer hover:text-blue-600"
                  />
                </Tooltip>
                <Tooltip label="Print">
                  <Printer
                    size={16}
                    color="#000"
                    className="cursor-pointer hover:text-blue-600"
                  />
                </Tooltip>
              </div>
            </footer>
          </div>
        </figure>
      ))}
    </div>
  );
};
