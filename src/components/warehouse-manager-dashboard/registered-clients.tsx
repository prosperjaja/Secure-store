"use client";

import { useState } from "react";
import { Button } from "../ui/mantine/button";
import { TextInput } from "../ui/mantine/TextInput";
import { SearchNormal1, Add, ArrowDown2 } from "iconsax-reactjs";
import { Checkbox } from "../ui/mantine/checkbox";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface Client {
  id: string;
  name: string;
  type: string;
  allReceipts: number;
  lastDeposit: string;
  outstandingFee: number;
  status: "active" | "inactive";
}

const MOCK_CLIENTS: Client[] = [
  {
    id: "1",
    name: "Amina Bello",
    type: "Farmer",
    allReceipts: 3,
    lastDeposit: "2025-01-01",
    outstandingFee: 15000,
    status: "active",
  },
  {
    id: "2",
    name: "Emeka Obi",
    type: "Trader",
    allReceipts: 5,
    lastDeposit: "2025-01-01",
    outstandingFee: 10000,
    status: "inactive",
  },
  {
    id: "3",
    name: "Amina Bello",
    type: "Farmer",
    allReceipts: 4,
    lastDeposit: "2025-01-01",
    outstandingFee: 10000,
    status: "active",
  },
  {
    id: "4",
    name: "Emeka Obi",
    type: "Trader",
    allReceipts: 2,
    lastDeposit: "2025-01-01",
    outstandingFee: 10000,
    status: "inactive",
  },
  {
    id: "5",
    name: "Emeka Obi",
    type: "Farmer",
    allReceipts: 3,
    lastDeposit: "2025-01-01",
    outstandingFee: 15000,
    status: "active",
  },
];

interface RegisteredClientsProps {
  onAddClient: () => void;
}

export const RegisteredClients = ({ onAddClient }: RegisteredClientsProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const { push } = useRouter();
  const filteredClients = MOCK_CLIENTS.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleClientSelection = (clientId: string) => {
    setSelectedClients((prev) =>
      prev.includes(clientId)
        ? prev.filter((id) => id !== clientId)
        : [...prev, clientId]
    );
  };

  const toggleAllClients = () => {
    if (selectedClients.length === filteredClients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(filteredClients.map((client) => client.id));
    }
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-[#101828]  uppercase">
          Registered Clients
        </h3>
      </header>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 flex-1">
          <TextInput
            rightSection={<SearchNormal1 size={16} color="#667085" />}
            placeholder="Search clients"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            w={200}
          />
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={onAddClient}
            classNames={{
              root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-10",
            }}
            leftSection={<Add size={20} color="#fff" />}
          >
            Add client
          </Button>
          <Button
            onClick={() => push(`/clients`)}
            variant="outline"
            classNames={{
              root: "!bg-[#fff] hover:!bg-[#fafafa] !rounded-lg !h-10",
            }}
          >
            {" "}
            See All
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB]">
              <th className="text-left py-3 px-4">
                <Checkbox
                  checked={
                    selectedClients.length === filteredClients.length &&
                    filteredClients.length > 0
                  }
                  size="xs"
                  onChange={toggleAllClients}
                />
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-[#667085]">
                Name
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-[#667085]">
                Type
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-[#667085]">
                All receipts
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-[#667085]">
                Last Deposit
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-[#667085]">
                Outstanding fee
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-[#667085] flex items-center gap-1">
                Status
                <ArrowDown2 size={14} color="#667085" />
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-[#667085]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr
                key={client.id}
                className="border-b border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors"
              >
                <td className="py-3 px-4">
                  <Checkbox
                    size="xs"
                    checked={selectedClients.includes(client.id)}
                    onChange={() => toggleClientSelection(client.id)}
                  />
                </td>
                <td className="py-3 px-4 text-sm text-[#101828]">
                  {client.name}
                </td>
                <td className="py-3 px-4 text-sm text-[#667085]">
                  {client.type}
                </td>
                <td className="py-3 px-4 text-sm text-[#667085]">
                  {client.allReceipts}
                </td>
                <td className="py-3 px-4 text-sm text-[#667085]">
                  {client.lastDeposit}
                </td>
                <td className="py-3 px-4 text-sm text-[#667085]">
                  {client.outstandingFee.toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={clsx(
                      "inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                      client.status === "active"
                        ? "bg-green-50 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    )}
                  >
                    <span
                      className={clsx(
                        "w-1.5 h-1.5 rounded-full",
                        client.status === "active"
                          ? "bg-green-600"
                          : "bg-gray-600"
                      )}
                    />
                    {client.status === "active" ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <p
                    className="text-sm font-medium text-[#4F46E5] hover:bg-blue-50 rounded-2xl py-1 px-2.5 flex items-center justify-center w-fit cursor-pointer"
                    onClick={() => push(`/clients/${client.id}`)}
                  >
                    View
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
    </div>
  );
};
