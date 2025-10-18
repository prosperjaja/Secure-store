"use client";

import { Eye, Printer, SearchNormal } from "iconsax-reactjs";
import { TextInput } from "../ui/mantine/TextInput";
import { Table } from "@mantine/core";
import { FaDownload } from "react-icons/fa6";

import clsx from "clsx";
import { Button } from "../ui/mantine/button";
import { useRouter } from "next/navigation";

const data = [
  {
    receipt: "WR-2024-01",
    item: "Cement",
    quantity: "1000",
    company: "Dangote Cement",
    date: "2024-01-01",
    status: "Pledged",
  },
  {
    receipt: "WR-2024-01",
    item: "Cement",
    quantity: "1000",
    company: "Dangote Cement",
    date: "2024-01-01",
    status: "Active",
  },
  {
    receipt: "WR-2024-01",
    item: "Cement",
    quantity: "1000",
    company: "Dangote Cement",
    date: "2024-01-01",
    status: "Active",
  },
  {
    receipt: "WR-2024-01",
    item: "Cement",
    quantity: "1000",
    company: "Dangote Cement",
    date: "2024-01-01",
    status: "Pledged",
  },
  {
    receipt: "WR-2024-01",
    item: "Cement",
    quantity: "1000",
    company: "Dangote Cement",
    date: "2024-01-01",
    status: "Pledged",
  },
  {
    receipt: "WR-2024-01",
    item: "Cement",
    quantity: "1000",
    company: "Dangote Cement",
    date: "2024-01-01",
    status: "Active",
  },
];

const thead = () => {
  return (
    <Table.Tr>
      <Table.Th>RECEIPT</Table.Th>
      <Table.Th>ITEM</Table.Th>
      <Table.Th>QUANTITY</Table.Th>
      <Table.Th>COMPANY</Table.Th>
      <Table.Th>DATE</Table.Th>
      <Table.Th>STATUS</Table.Th>
      <Table.Th>ACTION</Table.Th>
    </Table.Tr>
  );
};

const rows = data?.map((item, idx) => (
  <Table.Tr key={idx}>
    <Table.Td>
      <span className="text-sm font-medium text-[#0E1C43]">{item.receipt}</span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#0E1C43]">{item.item}</span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#0E1C43]">
        {item.quantity}
      </span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#0E1C43]">{item.company}</span>
    </Table.Td>
    <Table.Td>
      <span className="text-sm font-medium text-[#0E1C43]">{item.date}</span>
    </Table.Td>
    <Table.Td>
      <span
        className={clsx(
          item?.status === "Pledged" && "",
          "text-sm font-medium text-[#0E1C43]"
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

export const ClientDashboardTable = () => {
  const { push } = useRouter();
  return (
    <div className="flex-1 flex flex-col gap-3 p-3 bg-white rounded-lg border border-gray-200 overflow-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-[#0E1C43]">Recent Receipts</h3>
        <div className="flex items-center gap-2">
          <TextInput
            variant="default"
            placeholder="Search here"
            rightSection={<SearchNormal size={16} color="#0E1C43" />}
            miw={250}
          />
          <Button
            variant="primary"
            size="md"
            onClick={() => push("/receipt-management")}
          >
            View All
          </Button>
        </div>
      </div>
      <Table
        striped
        highlightOnHover
        withTableBorder
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
