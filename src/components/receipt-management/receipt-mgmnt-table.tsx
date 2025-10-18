"use client";

import { Filter, SearchNormal } from "iconsax-reactjs";
import { Table, Checkbox } from "@mantine/core";
import clsx from "clsx";
import { Button } from "../ui/mantine/button";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";
import { TextInput } from "../ui/mantine/TextInput";

const data = [
  {
    receipt: "WR-2025-01",
    status: "Active",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Expired",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Active",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Pledge",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Active",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Pledge",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Expired",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Active",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Expired",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
  {
    receipt: "WR-2025-01",
    status: "Pledge",
    item: "Cement",
    quantity: "1000",
    warehouse: "-",
    date: "2025-01-01",
  },
];

export const ReceiptMgmntTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const toggleRow = (idx: number) => {
    setSelectedRows((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleAll = () => {
    setSelectedRows((prev) =>
      prev.length === data.length ? [] : data.map((_, idx) => idx)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-[#12B76A]";
      case "Expired":
        return "text-[#F04438]";
      case "Pledge":
        return "text-[#5925DC]";
      default:
        return "text-[#667085]";
    }
  };

  const thead = () => {
    return (
      <Table.Tr>
        <Table.Th>
          <Checkbox
            checked={selectedRows.length === data.length}
            onChange={toggleAll}
            classNames={{
              input: "cursor-pointer",
            }}
            size="xs"
          />
        </Table.Th>
        <Table.Th className="!text-xs !font-medium !text-[#475467]">
          Receipt
        </Table.Th>
        <Table.Th className="!text-xs !font-medium !text-[#475467]">
          Status
        </Table.Th>
        <Table.Th className="!text-xs !font-medium !text-[#475467]">
          Item
        </Table.Th>
        <Table.Th className="!text-xs !font-medium !text-[#475467]">
          Quantity
        </Table.Th>
        <Table.Th className="!text-xs !font-medium !text-[#475467]">
          Warehouse
        </Table.Th>
        <Table.Th className="!text-xs !font-medium !text-[#475467]">
          Date
        </Table.Th>
        <Table.Th className="!text-xs !font-medium !text-[#475467]">
          Quick Action
        </Table.Th>
      </Table.Tr>
    );
  };

  const rows = data?.map((item, idx) => (
    <Table.Tr key={idx}>
      <Table.Td>
        <Checkbox
          checked={selectedRows.includes(idx)}
          onChange={() => toggleRow(idx)}
          classNames={{
            input: "cursor-pointer",
          }}
          size="xs"
        />
      </Table.Td>
      <Table.Td>
        <span className="text-sm font-medium text-[#101828]">
          {item.receipt}
        </span>
      </Table.Td>
      <Table.Td>
        <span
          className={clsx(
            item.status === "Active"
              ? "bg-green-50"
              : item.status === "Expired"
              ? "bg-[#FEF5F3]"
              : "bg-[#F9FAFB]",
            "flex items-center gap-1.5 py-0.5 px-2 rounded-2xl w-fit"
          )}
        >
          <span
            className={clsx("w-1.5 h-1.5 rounded-full", {
              "bg-[#12B76A]": item.status === "Active",
              "bg-[#F04438]": item.status === "Expired",
              "bg-[#5925DC]": item.status === "Pledge",
            })}
          />
          <span
            className={clsx("text-sm font-medium", getStatusColor(item.status))}
          >
            {item.status}
          </span>
        </span>
      </Table.Td>
      <Table.Td>
        <span className="text-sm text-[#667085]">{item.item}</span>
      </Table.Td>
      <Table.Td>
        <span className="text-sm text-[#667085]">{item.quantity}</span>
      </Table.Td>
      <Table.Td>
        <span className="text-sm text-[#667085]">{item.warehouse}</span>
      </Table.Td>
      <Table.Td>
        <span className="text-sm text-[#667085]">{item.date}</span>
      </Table.Td>
      <Table.Td>
        <button className="text-sm font-medium text-[#344054] hover:text-[#5925DC] transition-colors cursor-pointer">
          View
        </button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="flex-1 flex flex-col gap-4 bg-white rounded-xl border border-[#EAECF0] overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-[#EAECF0]">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold text-[#101828]">
            Recent receipt
          </h3>
          <span className="bg-[#F9F5FF] text-[#6941C6] text-xs font-medium px-2 py-0.5 rounded-full">
            100
          </span>
        </div>
        <div className="flex items-center gap-3">
          <TextInput
            variant="default"
            placeholder="Search receipt"
            leftSection={<SearchNormal size={18} color="#667085" />}
            w={250}
            classNames={{
              input: "!h-9 !pl-10 !text-sm",
            }}
          />
          <Button
            variant="default"
            size="sm"
            classNames={{
              root: "!rounded-lg !border-[#D0D5DD] cursor-pointer",
            }}
          >
            <Filter size={18} color="#344054" />
            <span className="text-sm font-medium text-[#344054]">Filter</span>
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table
          highlightOnHover
          verticalSpacing="md"
          horizontalSpacing="lg"
          classNames={{
            thead: "bg-[#F9FAFB]",
            tbody: "bg-white",
          }}
        >
          <Table.Thead>{thead()}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
      <div className="flex items-center justify-between p-4 border-t border-[#EAECF0]">
        <button className="flex items-center gap-2 px-4 py-2 border border-[#D0D5DD] rounded-lg text-sm font-medium text-[#344054] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
          <ArrowLeft size={18} color="#344054" />
          Previous
        </button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, "...", 8, 9, 10].map((page, idx) => (
            <button
              key={idx}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              className={clsx(
                "min-w-[40px] h-10 px-3 rounded-lg text-sm font-medium transition-colors",
                page === currentPage
                  ? "bg-[#F9F5FF] text-[#7F56D9]"
                  : "text-[#667085] hover:bg-gray-50",
                page === "..." && "cursor-default hover:bg-transparent"
              )}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#D0D5DD] rounded-lg text-sm font-medium text-[#344054] hover:bg-gray-50 transition-colors cursor-pointer">
          Next
          <ArrowRight size={18} color="#344054" />
        </button>
      </div>
    </div>
  );
};
