"use client";

import { Table, Checkbox } from "@mantine/core";
import { FaPrint } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState, useEffect } from "react";

const transactions = [
  {
    id: "TXN-2023-001",
    status: "Success",
    dateIssued: "12 Jan, 2024",
    type: "Withdrawal",
    commodity: "Maize",
    quantity: "100 (MT)",
    warehouse: "Funtua Grain Storage",
    receiptId: "WR-2023-030",
    amount: "₦250,000",
  },
  {
    id: "TXN-2023-002",
    status: "Pending",
    dateIssued: "15 Jan, 2024",
    type: "Pledge",
    commodity: "Cement",
    quantity: "200 (Bags)",
    warehouse: "Lagos Warehouse",
    receiptId: "WR-2023-031",
    amount: "₦500,000",
  },
  {
    id: "TXN-2023-003",
    status: "Failed",
    dateIssued: "18 Jan, 2024",
    type: "Lien",
    commodity: "Ironrods",
    quantity: "50 (Tons)",
    warehouse: "Kano Industrial Hub",
    receiptId: "WR-2023-032",
    amount: "₦750,000",
  },
  {
    id: "TXN-2023-004",
    status: "Success",
    dateIssued: "20 Jan, 2024",
    type: "Deposit",
    commodity: "Rice",
    quantity: "150 (MT)",
    warehouse: "Abuja Central Storage",
    receiptId: "WR-2023-033",
    amount: "₦450,000",
  },
  {
    id: "TXN-2023-005",
    status: "Success",
    dateIssued: "22 Jan, 2024",
    type: "Withdrawal",
    commodity: "Maize",
    quantity: "80 (MT)",
    warehouse: "Funtua Grain Storage",
    receiptId: "WR-2023-034",
    amount: "₦200,000",
  },
];

interface TxnReportTableProps {
  filterType?: "all" | "withdrawal" | "deposit" | "pledged";
}

export const TxnReportTable = ({ filterType = "all" }: TxnReportTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filterType]);

  // Filter transactions based on the active tab
  const filteredTransactions =
    filterType === "all"
      ? transactions
      : filterType === "pledged"
      ? transactions.filter(
          (txn) =>
            txn.type.toLowerCase() === "pledge" ||
            txn.type.toLowerCase() === "lien"
        )
      : transactions.filter(
          (txn) => txn.type.toLowerCase() === filterType.toLowerCase()
        );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
        <Table
          horizontalSpacing="md"
          verticalSpacing="md"
          styles={{
            th: {
              backgroundColor: "#F9FAFB",
              color: "#667085",
              fontWeight: 600,
              fontSize: "12px",
              textTransform: "uppercase",
              padding: "12px 16px",
              borderBottom: "1px solid #E5E7EB",
            },
            td: {
              color: "#101828",
              fontSize: "14px",
              padding: "16px",
              borderBottom: "1px solid #E5E7EB",
            },
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Checkbox size="xs" />
              </Table.Th>
              <Table.Th>Transaction ID</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Date issued</Table.Th>
              <Table.Th>Type</Table.Th>
              <Table.Th>Commodity</Table.Th>
              <Table.Th>Quantity</Table.Th>
              <Table.Th>Warehouse</Table.Th>
              <Table.Th>Receipt ID</Table.Th>
              <Table.Th>Amount</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {paginatedTransactions.map((txn) => (
              <Table.Tr key={txn.id}>
                <Table.Td>
                  <Checkbox size="xs" />
                </Table.Td>
                <Table.Td className="font-medium">{txn.id}</Table.Td>
                <Table.Td>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      txn.status === "Success"
                        ? "bg-[#ECFDF3] text-[#12B76A]"
                        : txn.status === "Pending"
                        ? "bg-[#FEF6EE] text-[#FDB022]"
                        : "bg-[#FEF3F2] text-[#F04438]"
                    }`}
                  >
                    {txn.status}
                  </span>
                </Table.Td>
                <Table.Td>{txn.dateIssued}</Table.Td>
                <Table.Td>{txn.type}</Table.Td>
                <Table.Td>{txn.commodity}</Table.Td>
                <Table.Td>{txn.quantity}</Table.Td>
                <Table.Td>{txn.warehouse}</Table.Td>
                <Table.Td className="text-[#4F46E5]">{txn.receiptId}</Table.Td>
                <Table.Td className="font-semibold">{txn.amount}</Table.Td>
                <Table.Td>
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors cursor-pointer">
                      <MdOutlineFileDownload size={18} color="#667085" />
                    </button>
                    <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors cursor-pointer">
                      <FaPrint size={16} color="#667085" />
                    </button>
                    <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors cursor-pointer">
                      <IoEyeOutline size={18} color="#667085" />
                    </button>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-[#667085]">
          Showing{" "}
          <span className="font-medium text-[#101828]">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-medium text-[#101828]">
            {Math.min(currentPage * itemsPerPage, filteredTransactions.length)}
          </span>{" "}
          of{" "}
          <span className="font-medium text-[#101828]">
            {filteredTransactions.length}
          </span>{" "}
          entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 border border-[#D0D5DD] rounded-lg text-sm font-medium text-[#344054] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 border rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                currentPage === page
                  ? "bg-[#4F46E5] text-white border-[#4F46E5]"
                  : "border-[#D0D5DD] text-[#344054] hover:bg-[#F9FAFB]"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-2 border border-[#D0D5DD] rounded-lg text-sm font-medium text-[#344054] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
