"use client";
import { Table } from "@mantine/core";
import { Eye, Printer } from "iconsax-reactjs";
import { FaDownload } from "react-icons/fa6";

const data = [
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Active",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Active",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Pledged",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Active",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Active",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Pledged",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Active",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Pledged",
  },
  {
    commodity_name: "Maize",
    grade: "A",
    quantity: 100,
    weight: 9800,
    warehouse: "Funtua Grain Storage",
    receipt: "WR-20204-001",
    date: "10 jan 2024",
    status: "Active",
  },
];

export const CommodityMgmntTable = () => {
  const thead = () => {
    return (
      <Table.Tr>
        <Table.Th className="!text-xs !font-semibold !text-[#101828] !uppercase">
          COMMODITY
        </Table.Th>
        <Table.Th className="!text-xs !font-semibold !text-[#101828] !uppercase">
          QUANTITY
        </Table.Th>
        <Table.Th className="!text-xs !font-semibold !text-[#101828] !uppercase">
          WAREHOUSE
        </Table.Th>
        <Table.Th className="!text-xs !font-semibold !text-[#101828] !uppercase">
          RECEIPT ID
        </Table.Th>
        <Table.Th className="!text-xs !font-semibold !text-[#101828] !uppercase">
          DEPOSIT DATE
        </Table.Th>
        <Table.Th className="!text-xs !font-semibold !text-[#101828] !uppercase">
          STATUS
        </Table.Th>
        <Table.Th className="!text-xs !font-semibold !text-[#101828] !uppercase">
          ACTION
        </Table.Th>
      </Table.Tr>
    );
  };

  const rows = data?.map((item, idx) => (
    <Table.Tr key={idx} className="hover:bg-[#F9FAFB]">
      <Table.Td>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-[#101828]">
            {item.commodity_name}
          </span>
          <span className="text-xs text-[#667085]">Grade {item.grade}</span>
        </div>
      </Table.Td>
      <Table.Td>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-[#101828]">
            {item.quantity} Bags
          </span>
          <span className="text-xs text-[#667085]">{item?.weight}kg</span>
        </div>
      </Table.Td>
      <Table.Td>
        <span className="text-sm text-[#667085]">{item.warehouse}</span>
      </Table.Td>
      <Table.Td>
        <span className="text-sm font-medium text-[#101828]">
          {item.receipt}
        </span>
      </Table.Td>
      <Table.Td>
        <span className="text-sm text-[#667085]">{item.date}</span>
      </Table.Td>
      <Table.Td>
        <span className="text-sm text-[#667085]">{item.status}</span>
      </Table.Td>
      <Table.Td>
        <span className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors">
            <Eye color="#667085" size={18} />
          </button>
          <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors">
            <FaDownload color="#667085" size={16} />
          </button>
          <button className="p-1.5 hover:bg-[#F3F4F6] rounded transition-colors">
            <Printer color="#667085" size={18} />
          </button>
        </span>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="flex flex-col overflow-hidden">
      <Table
        highlightOnHover
        verticalSpacing="md"
        horizontalSpacing="lg"
        classNames={{
          thead: "bg-[#F9FAFB] border-b border-[#E5E7EB]",
          tbody: "bg-white",
        }}
      >
        <Table.Thead>{thead()}</Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};
