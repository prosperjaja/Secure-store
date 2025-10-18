"use client";

import { Table } from "@mantine/core";
import clsx from "clsx";
import { Eye, Printer } from "iconsax-reactjs";
import { FaDownload } from "react-icons/fa6";

const data = [
  {
    request_id: "WD-2024-01",
    receipt_id: "WR-2024-01",
    commodity: "Maize",
    quantity: 100,
    request_date: "2024-01-01",
    status: "Pending",
  },
  {
    request_id: "WD-2024-01",
    receipt_id: "WR-2024-01",
    commodity: "Soya Beans",
    quantity: 50,
    request_date: "2024-01-01",
    status: "Completed",
  },
  {
    request_id: "WD-2024-01",
    receipt_id: "WR-2024-01",
    commodity: "Sorghum",
    quantity: 130,
    request_date: "2024-01-01",
    status: "Pending",
  },
];

const thead = () => {
  return (
    <Table.Tr>
      <Table.Th>REQUEST ID</Table.Th>
      <Table.Th>RECEIPT ID</Table.Th>
      <Table.Th>COMMODITY</Table.Th>
      <Table.Th>QUANTITY</Table.Th>
      <Table.Th>REQUEST DATE</Table.Th>
      <Table.Th>STATUS</Table.Th>
      <Table.Th>ACTION</Table.Th>
    </Table.Tr>
  );
};

const rows = data.map((item, idx) => (
  <Table.Tr key={idx}>
    <Table.Td>
      {" "}
      <span className="text-sm font-medium text-[#242424]">
        {item.request_id}
      </span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#242424]">
        {item.receipt_id}
      </span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#242424]">
        {item.commodity}
      </span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#242424]">
        {item.quantity}
      </span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#242424]">
        {item.request_date}
      </span>
    </Table.Td>
    <Table.Td>
      <span
        className={clsx(
          item?.status === "Completed"
            ? "text-green-500 bg-green-100"
            : "text-amber-500 bg-amber-100",
          "text-sm font-medium px-3 py-1 rounded-2xl w-fit flex items-center justify-center"
        )}
      >
        {item.status}
      </span>
    </Table.Td>
    <Table.Td>
      <span className="flex items-center gap-1.5">
        <Eye color="#0E1C43" size={16} />
        <FaDownload color="#0E1C43" size={16} />
        <Printer color="#0E1C43" size={16} />
      </span>
    </Table.Td>
  </Table.Tr>
));

export const RequestWithrawalTable = () => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-3 ">
      <h3 className="text-base font-medium text-[#162964]">
        Select Commodity for Withdrawal
      </h3>
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
