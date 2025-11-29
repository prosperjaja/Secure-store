"use client";

import { ClientDetails } from "@/src/types/transaction";
import { Button } from "../ui/mantine/button";
import { Menu } from "@mantine/core";
import { ArrowDown2 } from "iconsax-reactjs";
import { useDrawerContext } from "../providers/drawer-provider";
import { DepositCommodityForm } from "./deposit-commodity-form";
import { RequestWithdrawalSetup } from "../request-withdrawal/request-withdrawal-setup";
import { LoanSetup } from "../loan/loan-setup";
import { TradeCommoditySetup } from "../trade-commodity/trade-commodity-setup";
import { useSearchParams } from "next/navigation";

interface ClientHeaderProps {
  client: ClientDetails;
}

export const ClientHeader = ({ client }: ClientHeaderProps) => {
  const { openDrawer, closeDrawer } = useDrawerContext();
  const managerId = useSearchParams()?.get("managerId");

  const handleDeposit = () => {
    openDrawer({
      component: (
        <DepositCommodityForm clientName={client.name} onClose={closeDrawer} />
      ),
      size: "60%",
    });
  };

  const handleWithdrawal = () => {
    openDrawer({
      component: <RequestWithdrawalSetup />,
      size: "60%",
    });
  };

  const handleTrade = () => {
    openDrawer({
      component: <TradeCommoditySetup />,
      size: "60%",
    });
  };

  const handleLoan = () => {
    openDrawer({
      component: <LoanSetup />,
      size: "60%",
    });
  };

  return (
    <div className="flex items-end justify-between  bg-white rounded-xl p-3 border-[0.5px] border-[#e8e8e8]">
      <div className="flex flex-col gap-1">
        {/* Client Name and Status */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-[#101828]">{client.name}</h1>
          <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-700 rounded-full"></span>
            {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
          </span>
        </div>

        {/* Client Details */}
        <div className="flex items-center gap-6 text-sm text-[#667085]">
          <span className="flex items-center gap-1">
            <span className="font-medium text-[#101828]">
              {client.phoneNumber}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 bg-[#667085] rounded-full"></span>
            <span className="font-medium text-[#101828]">
              {client.clientId}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 bg-[#667085] rounded-full"></span>
            <span className="font-medium text-[#101828]">
              {client.occupation}
            </span>
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <figure className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <Button
            classNames={{
              root: "!bg-[#4F46E5] hover:!bg-[#4338CA] !rounded-lg !h-10 !px-4",
            }}
          >
            Action needed
          </Button>

          {!managerId && (
            <Menu shadow="md" width="target">
              <Menu.Target>
                <Button
                  variant="outline"
                  classNames={{
                    root: "!border-[#D0D5DD] !rounded-lg !h-10 !px-4 !flex !items-center !gap-4",
                  }}
                >
                  Perform transaction
                  <ArrowDown2 size={16} color="#667085" />
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item onClick={handleDeposit}>Deposit</Menu.Item>
                <Menu.Item onClick={handleWithdrawal}>Withdrawal</Menu.Item>
                <Menu.Item onClick={handleTrade}>Trade</Menu.Item>
                <Menu.Item onClick={handleLoan}>Take a loan</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
        </div>
        {/* Additional Info */}
        <div className="text-sm text-[#667085] flex justify-end items-end gap-1">
          <span>Residential address: </span>
          <span className="text-[#101828] font-medium">
            {client.residentialAddress}
          </span>
        </div>
        <div className="text-sm text-[#667085] flex justify-end items-end gap-1">
          <span>Last Activity: </span>
          <span className="text-[#101828] font-medium">
            {client.lastActivity}
          </span>
        </div>
      </figure>
    </div>
  );
};
