"use client";

import { Table } from "@mantine/core";
import clsx from "clsx";

const tableData = [
  {
    commodity: "Maize",
    warehouse: "Funtua Grain Storage",
    quantity: 100,
    weight: 1000,
    deposit_date: "2024-01-01",
    status: "Pledged",
    storage_fee: "N100,000",
  },
  {
    commodity: "Soybean",
    warehouse: "Funtua Grain Storage",
    quantity: 100,
    weight: 1000,
    deposit_date: "2024-01-01",
    status: "Active",
    storage_fee: "N100,000",
  },
  {
    commodity: "Sorgum",
    warehouse: "Funtua Grain Storage",
    quantity: 100,
    weight: 1000,
    deposit_date: "2024-01-01",
    status: "Pledged",
    storage_fee: "N100,000",
  },
  {
    commodity: "Soybean",
    warehouse: "Funtua Grain Storage",
    quantity: 100,
    weight: 1000,
    deposit_date: "2024-01-01",
    status: "Active",
    storage_fee: "N100,000",
  },
];

export const TxnCommReportsTable = () => {
  const thead = () => {
    return (
      <Table.Tr>
        <Table.Th>COMMODITY</Table.Th>
        <Table.Th>WAREHOUSE</Table.Th>
        <Table.Th>QUANTITY (BAGS)</Table.Th>
        <Table.Th>WEIGHT (KG)</Table.Th>
        <Table.Th>DEPOSIT DATE</Table.Th>
        <Table.Th>STATUS</Table.Th>
        <Table.Th>STORAGE FEE</Table.Th>
      </Table.Tr>
    );
  };

  const rows = tableData.map((item, idx) => (
    <Table.Tr key={idx}>
      <Table.Td>
        {" "}
        <span className="text-sm font-medium text-[#A2A2A2]">
          {item.commodity}
        </span>
      </Table.Td>
      <Table.Td>
        {" "}
        <span className="text-sm font-medium text-[#A2A2A2]">
          {item.warehouse}
        </span>
      </Table.Td>
      <Table.Td>
        {" "}
        <span className="text-sm font-medium text-[#A2A2A2]">
          {item.quantity}
        </span>
      </Table.Td>
      <Table.Td>
        {" "}
        <span className="text-sm font-medium text-[#A2A2A2]">
          {item.weight}
        </span>
      </Table.Td>
      <Table.Td>
        {" "}
        <span className="text-sm font-medium text-[#A2A2A2]">
          {item.deposit_date}
        </span>
      </Table.Td>
      <Table.Td>
        {" "}
        <span
          className={clsx(
            item?.status === "Active"
              ? "text-green-500 bg-green-100"
              : "text-amber-500 bg-amber-100",
            "text-sm font-medium px-3 py-1 rounded-2xl w-fit flex items-center justify-center"
          )}
        >
          {item.status}
        </span>
      </Table.Td>
      <Table.Td>
        {" "}
        <span className="text-sm font-medium text-[#A2A2A2]">
          {item.storage_fee}
        </span>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="flex-1 flex flex-col rounded-lg border border-gray-200 bg-white p-3 gap-2.5">
      <Table
        striped
        highlightOnHover
        verticalSpacing="md"
        classNames={{
          thead:
            "bg-[#F5F5F5] py-6 !text-[#475467] font-normal border-b border-[#E9E8FF] !w-full",
          tbody: "bg-white !w-full",
        }}
        stripedColor="#f5f5f6"
      >
        <Table.Thead>{thead()}</Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
